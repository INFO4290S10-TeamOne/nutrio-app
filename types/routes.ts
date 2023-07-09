import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { Log } from './logs';

export type TabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Recipes: NavigatorScreenParams<RecipeStackParamList>;
  Scale: undefined;
  Goals: undefined;
  Settings: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  LogsStack: NavigatorScreenParams<LogsStackParamList>;
};

export type RecipeStackParamList = {
  RecipeSearch: undefined;
  RecipeDetails: {
    id: number;
    title: string;
  };
};

export type LogsStackParamList = {
  LogHistory: undefined;
  LogDetails: {
    date: string;
    logItems: Log[];
  };
};

export type RecipeDetailsRouteProps = RouteProp<{ params: { id: number; title: string } }>;

export type LogDetailsRouteProps = RouteProp<{ params: { date: string; logItems: Log[] } }>;
