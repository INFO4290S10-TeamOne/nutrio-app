import { create } from 'zustand';

type RecipeSearch = {
  search: string;
  setSearch: (search: string) => void;
};

export const useRecipeSearch = create<RecipeSearch>((set) => ({
  search: '',
  setSearch: (search: string) => set({ search }),
}));
