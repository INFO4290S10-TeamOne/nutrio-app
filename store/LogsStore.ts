import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Log, LogItem } from '../types/logs';

interface LogsStore {
  logs: Log[];
  addLog: (log: Log) => void;
  editLog: (id: number, logItems: LogItem[]) => void;
  hasHydrated: boolean;
  setHasHydrated: (hasHydrated: boolean) => void;
  clearLogs: () => void;
}

export const useLogsStore = create<LogsStore>()(
  persist(
    (set, get) => ({
      logs: [],
      addLog: (log: Log) => set({ logs: [...get().logs, log] }),
      editLog: (id: number, logItems: LogItem[]) => {
        const newLogs = get().logs.map((log) => {
          if (log.id === id) {
            return {
              ...log,
              items: logItems,
            };
          }
          return log;
        });

        set({ logs: newLogs });
      },
      hasHydrated: false,
      setHasHydrated: (hasHydrated: boolean) => set({ hasHydrated }),
      clearLogs: () => set({ logs: [] }),
    }),
    {
      name: 'logs-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ logs: state.logs }),
      onRehydrateStorage: () => (state) => {
        if (state) state.setHasHydrated(true);
      },
    }
  )
);

interface EditLogsStore {
  logDate: string;
  setLogDate: (logDate: string) => void;
  editedLogs: LogItem[];
  setEditedLogs: (editedLogs: LogItem[]) => void;
  updateItem: (id: number, field: 'title' | 'servings' | 'image', newValue: string) => void;
  deleteItem: (id: number) => void;
  addNewItem: () => void;
}

export const useEditLogsStore = create<EditLogsStore>((set, get) => ({
  logDate: '',
  setLogDate: (logDate: string) => set({ logDate }),
  editedLogs: [
    {
      id: 0,
      title: '',
      servings: 0,
      image: '',
    },
  ],
  setEditedLogs: (editedLogs: Omit<LogItem, 'date'>[]) => set({ editedLogs }),
  updateItem: (id: number, field: 'title' | 'servings' | 'image', newValue: string) => {
    const newLogs: LogItem[] = get().editedLogs.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [field]: newValue,
        };
      }
      return item;
    });

    set({
      editedLogs: newLogs,
    });
  },
  deleteItem: (id: number) =>
    set({
      editedLogs: get().editedLogs.filter((item) => item.id !== id),
    }),
  addNewItem: () =>
    set({
      editedLogs: [
        ...get().editedLogs,
        {
          id: generateNewId(get().editedLogs),
          title: '',
          servings: 0,
          image: '',
        },
      ],
    }),
}));

const generateNewId = (logs: LogItem[]) => {
  const ids = logs.map((item) => item.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
};
