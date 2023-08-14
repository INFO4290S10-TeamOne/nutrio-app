# Logs implementation

To get proper nutrition tracking, there should be a way to sum up the total nutrients consumed during the day.

We should also store all logs in AsyncStorage.

## Logs Object
```
[
  {
    id: number,
    date: Date,
    servings: number,
    items: [
        {
          id: number
          name: string,
          picture: string,
          url: string,
          nutrients: {
            calories: number,
            ... // Other nutrients
        },
      ],
      ... // Other info
    }
  }
]
```
*Values will be stored as strings as JSON can only take string values*

*The Logs object is subject to change*

## Operations needed

- `getLogs() => Logs[]`: Retrieves all the logs in local storage.  We dont need an explicit method for this as we can access it via zustand.
  - `const { logs } = useLogsStore()`
- `addLog(log: Log) => void`: Adds a new entry to the logs
- `editLog(id: number, logItems: LogItem[]) => void`: Edits the items consumed in the log entry

## Pseudocode

```typescript
interface LogsStore {
  logs: Log[];
  addLog: (log: Log) => void;
  editLog: (id: number, logItems: LogItem[]) => void;
  hasHydrated: boolean;
  setHasHydrated: (hasHydrated: boolean) => void;
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
```

## Pseudocode for getting nutrients consumed today

**For the purposes of goals tracking we are only interested in the servings and nutrition.**

We can calculate the total amount of nutrients consumed per day with the following logic

```typescript
// This creates a new array of logs that were logged today
const itemsConsumedToday = logs.filter((log) => log.date === new Date().toLocaleDateString())

// Gets the sum of all the calories for logs dated for today
const totalCaloriesToday = itemsConsumedToday.reduce((log, total) => log.servings * log.nutrients.calories + total, 0)

// Repeat for other nutrients
...
```

For convienience, these values should also be stored in global state.

