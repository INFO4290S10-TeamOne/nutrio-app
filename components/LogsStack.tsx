import { createStackNavigator } from '@react-navigation/stack';
import LogHistoryScreen from '../screens/LogHistoryScreen';
import LogDetailsScreen from '../screens/LogDetailsScreen';
import { LogsStackParamList, TabParamList } from '../types/routes';
import HeaderButton from './HeaderButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AddLogModal from './AddLogModal';

const Stack = createStackNavigator<LogsStackParamList>();

const LogsStack = () => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  return (
    <Stack.Navigator id='LogStack'>
      <Stack.Group>
        <Stack.Screen
          options={{
            title: 'Logs',
            headerRight: () => (
              <HeaderButton
                iconName='plus'
                onPress={() =>
                  navigation.navigate('HomeStack', {
                    screen: 'LogsStack',
                    params: {
                      screen: 'AddLog',
                    },
                  })
                }
              />
            ),
          }}
          name='LogHistory'
          component={LogHistoryScreen}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.date })}
          name='LogDetails'
          component={LogDetailsScreen}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name='AddLog'
          component={AddLogModal}
          options={{
            headerRight: () => <HeaderButton iconName='save' onPress={() => console.log('save')} />,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default LogsStack;
