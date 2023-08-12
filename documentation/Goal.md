# Goal Implemetation

Goal should be saved in local storage and be accessible as a global state (zustand persistant store)

Since we are using AsyncStorage, goals must be stored as a `JSON` format

## Goal object
```JSON
{
  maxCalories: number,
  maxProtein: number,
  maxFat: number,
}
```
*Values will be stored as strings as JSON can only take string values*

## Operations needed
- `getGoal(): () => Goal`: should return the Goal object from zustand

- `setGoal: (newGoal: {object}) => Goal`: should overwrite the previous Goal in zustand and return the newGoal object

## Pseudocode
```typescript
interface Goal {
  maxCalories: string;
  maxProtein: string;
  maxFat: string;
}

interface GoalStore {
  goal: Goal;
  setGoal: (newGoal: Goal) => Goal;
}

const defaultGoal: Goal = {
  maxCalories: '2000',
  maxProtien: '100g',
  maxFat: '100g'
}

export const useGoalStore = create<GoalStore>()(
  persist(
    (set) => ({
      goal: defaultGoal,
      setGoal: (newGoal) => set({goal: newGoal})
    }),
    {
      name: 'goal-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({goal: state.goal})
    }
  )

)
```



