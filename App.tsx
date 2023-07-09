import * as React from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import ScaleScreen from './screens/ScaleScreen';
import GoalsScreen from './screens/GoalsScreen';
import SettingsScreen from './screens/SettingsScreen';
import LogScreen from './screens/LogScreen';
import { getTabBarIcon } from './helpers/getTabBarIcon';
import { NativeBaseProvider } from 'native-base';
import { TabParamList } from './types/routes';

const Tab = createBottomTabNavigator<TabParamList>();

const TabBarIcon = (props: { name: any; color: string; size: number }) => {
  return <FontAwesomeIcon icon={props.name} size={30} color={props.color} />;
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          id='TabBar'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              const iconName = getTabBarIcon(route.name);
              return TabBarIcon({ name: iconName, color, size });
            },
            tabBarActiveTintColor: '#8b5cf6',
          })}
        >
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen
            options={{
              headerShown: false,
            }}
            name='Recipes'
            component={RecipesScreen}
          />
          <Tab.Screen name='Scale' component={ScaleScreen} />
          <Tab.Screen name='Goals' component={GoalsScreen} />
          <Tab.Screen name='Settings' component={SettingsScreen} />
          <Tab.Screen name='Log' component={LogScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
