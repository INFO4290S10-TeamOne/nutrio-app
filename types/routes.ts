import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { Log } from './logs';

export type TabParamList = {
  Home: undefined;
  Recipes: NavigatorScreenParams<RecipeStackParamList>;
  Scale: undefined;
  Goals: undefined;
  Settings: undefined;
  Log: NavigatorScreenParams<LogStackParamList>;
};

export type RecipeStackParamList = {
  RecipeSearch: undefined;
  RecipeDetails: {
    id: number;
    title: string;
  };
};

export type LogStackParamList = {
  LogHistory: undefined;
  LogDetails: {
    date: string;
    logItems: Log[];
  };
};

export type RecipeDetailsRouteProps = RouteProp<{ params: { id: number; title: string } }>;

export type LogDetailsRouteProps = RouteProp<{ params: { date: string; logItems: Log[] } }>;
