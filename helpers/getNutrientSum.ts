import { Log } from '../types/logs';

export const getNutrientSum = (nutrientName: string, logs: Log[]) => {
  return logs.reduce((acc, log) => {
    const sumCalories = log.items.reduce((acc, item) => {
      const nutrient = item.nutrition?.nutrients.find(
        (nutrient) => nutrient.name === nutrientName,
      );
      return acc + (nutrient?.amount ?? 0) * item.servings;
    }, 0);
    return acc + sumCalories;
  }, 0);
};
