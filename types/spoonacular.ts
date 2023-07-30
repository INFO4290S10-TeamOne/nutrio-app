export type SpoonacularResponse = {
  number: number;
  offset: number;
  results: SpoonacularRecipe[];
  totalResults: number;
};

export type SpoonacularRecipe = {
  id: number;
  image: string;
  imageType: string;
  title: string;
};
