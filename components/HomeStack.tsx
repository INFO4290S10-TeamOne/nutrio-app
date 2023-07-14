import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LogsStack from './LogsStack';

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
    </Stack.Navigator>
  );
};

export default HomeStack;
