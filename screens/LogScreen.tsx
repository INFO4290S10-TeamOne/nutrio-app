import { createStackNavigator } from '@react-navigation/stack';
import LogHistoryScreen from '../components/LogHistoryScreen';
import LogDetailsScreen from './LogDetailsScreen';
import { LogStackParamList } from '../types/routes';

const LogStack = createStackNavigator<LogStackParamList>();

const LogScreen = () => {
  return (
    <LogStack.Navigator id='LogStack'>
      <LogStack.Screen
        options={{
          title: 'Logs',
        }}
        name='LogHistory'
        component={LogHistoryScreen}
      />
      <LogStack.Screen
        options={({ route }) => ({ title: route.params.date })}
        name='LogDetails'
        component={LogDetailsScreen}
      />
    </LogStack.Navigator>
  );
};

export default LogScreen;
