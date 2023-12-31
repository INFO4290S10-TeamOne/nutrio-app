import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { Log } from './logs';

export type TabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  RecipesStack: NavigatorScreenParams<RecipeStackParamList>;
  Scale: undefined;
  Goal: undefined;
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
    id: number;
  };
  AddLog:
    | {
        edit: false;
      }
    | {
        edit: true;
        id: number;
      };
};

export type RecipeDetailsRouteProps = RouteProp<{
  params: { id: number; title: string };
}>;

export type LogDetailsRouteProps = RouteProp<{
  params: { date: string; id: number };
}>;

export type AddLogRouteProps = RouteProp<{
  params: { edit: false } | { edit: true; id: number };
}>;
