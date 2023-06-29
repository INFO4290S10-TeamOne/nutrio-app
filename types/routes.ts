import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';

export type TabParamList = {
  Home: undefined;
  Recipes: NavigatorScreenParams<RecipeStackParamList>;
  Scale: undefined;
  Goals: undefined;
  Settings: undefined;
};

export type RecipeStackParamList = {
  RecipeSearch: undefined;
  RecipeDetails: {
    id: number;
    title: string;
  };
};

export type RecipeDetailsRouteProps = RouteProp<{ params: { id: number; title: string } }>;
