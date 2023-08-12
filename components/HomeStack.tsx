import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LogsStack from './LogsStack';
import GoalEditScreen from '../screens/GoalEditScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator id='HomeStack'>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
        name='Home'
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='LogsStack'
        component={LogsStack}
      />
          <Stack.Screen
             options={{
              title: 'Goals Editting',
            }}
          name='goalEdit'
          component={GoalEditScreen}
         
        />
    </Stack.Navigator>
  );
};

export default HomeStack;
