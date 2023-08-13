import { SpoonacularRecipeInformation } from './spoonacular';

export type Log = {
  id: number;
  date: string;
  items: LogItem[];
};

export type LogItem = Partial<SpoonacularRecipeInformation> & { servings: number; id: number };
