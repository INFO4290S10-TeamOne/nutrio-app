import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


interface Goal{
    maxCal: string;
    maxPro: string;
    maxFat: string;
}

interface GoalStore{
    goal: Goal;
    setGoal: (newGoal: Goal) => void;
}

const defaultGoal: Goal = {
    maxCal: '2000',
    maxPro: '100g',
    maxFat: '100g',
}

export const useGoalStore = create<GoalStore>()(
    persist(
        (set) => ({
            goal: defaultGoal,
            setGoal: (newGoal) => set({ goal: newGoal}),
        }),
        {
        name:'goal-storage',
        storage: createJSONStorage(()=> AsyncStorage),
        partialize: (state) =>({goal: state.goal})
        }
    )
)