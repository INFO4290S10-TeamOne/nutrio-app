import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface Goal {
  maxCalories: number;
  maxProteins: number;
  maxFats: number;
}

interface GoalStore {
  goal: Goal;
  setGoal: (newGoal: Goal) => void;
}

const defaultGoal: Goal = {
  maxCalories: 2000,
  maxProteins: 100,
  maxFats: 100,
};

export const useGoalStore = create<GoalStore>()(
  persist(
    (set) => ({
      goal: defaultGoal,
      setGoal: (newGoal) => set({ goal: newGoal }),
    }),
    {
      name: 'goal-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ goal: state.goal }),
    },
  ),
);
