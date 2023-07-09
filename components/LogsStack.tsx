import { createStackNavigator } from '@react-navigation/stack';
import LogHistoryScreen from '../screens/LogHistoryScreen';
import LogDetailsScreen from '../screens/LogDetailsScreen';
import { LogsStackParamList } from '../types/routes';

const Stack = createStackNavigator<LogsStackParamList>();

const LogsStack = () => {
  return (
    <Stack.Navigator id='LogStack'>
      <Stack.Screen
        options={{
          title: 'Logs',
        }}
        name='LogHistory'
        component={LogHistoryScreen}
      />
      <Stack.Screen
        options={({ route }) => ({ title: route.params.date })}
        name='LogDetails'
        component={LogDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default LogsStack;
