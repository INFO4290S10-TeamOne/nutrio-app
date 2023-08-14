import { Log } from '../../types/logs';
import { Unit } from '../../types/spoonacular';
import { getNutrientSum } from '../getNutrientSum';

const mockLogs: Log[] = [
  {
    id: 1,
    date: '2021-01-01',
    items: [
      {
        id: 2,
        title: 'Chicken Parmesan',
        image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
        servings: 2,
        nutrition: {
          nutrients: [
            {
              name: 'Calories',
              amount: 200,
              unit: Unit.Kcal,
            },
            {
              name: 'Fat',
              amount: 20,
              unit: Unit.G,
            },
          ],
          properties: [],
          flavonoids: [],
          ingredients: [],
          caloricBreakdown: {
            percentProtein: 10,
            percentFat: 10,
            percentCarbs: 10,
          },
          weightPerServing: {
            amount: 10,
            unit: Unit.G,
          },
        },
      },
    ],
  },
];

const mockLogs2: Log[] = [
  {
    id: 1,
    date: '2021-01-01',
    items: [
      {
        id: 2,
        title: 'Chicken Parmesan',
        image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
        servings: 2,
        nutrition: {
          nutrients: [
            {
              name: 'Calories',
              amount: 200,
              unit: Unit.Kcal,
            },
            {
              name: 'Fat',
              amount: 20,
              unit: Unit.G,
            },
          ],
          properties: [],
          flavonoids: [],
          ingredients: [],
          caloricBreakdown: {
            percentProtein: 10,
            percentFat: 10,
            percentCarbs: 10,
          },
          weightPerServing: {
            amount: 10,
            unit: Unit.G,
          },
        },
      },
      {
        id: 2,
        title: 'Some other recipe',
        image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
        servings: 1,
        nutrition: {
          nutrients: [
            {
              name: 'Calories',
              amount: 400,
              unit: Unit.Kcal,
            },
            {
              name: 'Fat',
              amount: 20,
              unit: Unit.G,
            },
          ],
          properties: [],
          flavonoids: [],
          ingredients: [],
          caloricBreakdown: {
            percentProtein: 10,
            percentFat: 10,
            percentCarbs: 10,
          },
          weightPerServing: {
            amount: 10,
            unit: Unit.G,
          },
        },
      },
    ],
  },
];

describe('getNutrientSum', () => {
  it('returns 0 when logs is empty', () => {
    expect(getNutrientSum('Calories', [])).toEqual(0);
  });

  it('returns the correct sum of calories', () => {
    expect(getNutrientSum('Calories', mockLogs)).toEqual(400);
  });

  it('returns the correct sum of calories when there are multiple items', () => {
    expect(getNutrientSum('Calories', mockLogs2)).toEqual(800);
  });
});
