import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Log } from '../types/logs';

interface LogsStore {
  logs: Log[];
  addLog: (log: Log) => void;
  hasHydrated: boolean;
  setHasHydrated: (hasHydrated: boolean) => void;
}

export const useLogsStore = create<LogsStore>()(
  persist(
    (set, get) => ({
      logs: [],
      addLog: (log: Log) => set({ logs: [...get().logs, log] }),
      hasHydrated: false,
      setHasHydrated: (hasHydrated: boolean) => set({ hasHydrated }),
    }),
    {
      name: 'logs-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ logs: state.logs }),
      onRehydrateStorage: () => (state) => {
        state.setHasHydrated(true);
      },
    }
  )
);
