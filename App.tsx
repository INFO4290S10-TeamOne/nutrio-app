import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import ScaleScreen from './screens/ScaleScreen';
import GoalsScreen from './screens/GoalsScreen';
import SettingsScreen from './screens/SettingsScreen';
import { getTabBarIcon } from './helpers/getTabBarIcon';
import { NativeBaseProvider } from 'native-base';

const Tab = createBottomTabNavigator();

const TabBarIcon = (props: { name: any; color: string; size: number }) => {
  return <FontAwesomeIcon icon={props.name} size={30} color='gray' />;
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              const iconName = getTabBarIcon(route.name);
              return TabBarIcon({ name: iconName, color, size });
            },
          })}
        >
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Recipes' component={RecipesScreen} />
          <Tab.Screen name='Scale' component={ScaleScreen} />
          <Tab.Screen name='Goals' component={GoalsScreen} />
          <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
