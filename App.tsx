import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import HomeStack from './components/HomeStack';
import RecipesStack from './components/RecipesStack';
import ScaleScreen from './screens/ScaleScreen';
import GoalsScreen from './screens/GoalsScreen';
import { getTabBarIcon } from './helpers/getTabBarIcon';
import { NativeBaseProvider } from 'native-base';
import { TabParamList } from './types/routes';

const Tab = createBottomTabNavigator<TabParamList>();

const TabBarIcon = (props: { name: any; color: string; size: number }) => {
  return <FontAwesomeIcon icon={props.name} size={30} color={props.color} />;
};

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator
            id="TabBar"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                const iconName = getTabBarIcon(route.name);
                return TabBarIcon({ name: iconName, color, size });
              },
              tabBarActiveTintColor: '#8b5cf6',
            })}
          >
            <Tab.Screen
              options={{
                headerShown: false,
                tabBarLabel: 'Home',
              }}
              name="HomeStack"
              component={HomeStack}
            />
            <Tab.Screen
              options={{
                headerShown: false,
                tabBarLabel: 'Recipes',
              }}
              name="RecipesStack"
              component={RecipesStack}
            />
            <Tab.Screen name="Scale" component={ScaleScreen} />
            <Tab.Screen name="Goals" component={GoalsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
