import { createStackNavigator } from '@react-navigation/stack';
import LogHistoryScreen from '../screens/LogHistoryScreen';
import LogDetailsScreen from '../screens/LogDetailsScreen';
import { LogsStackParamList, TabParamList } from '../types/routes';
import HeaderButton from './HeaderButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import EditLogsModal from './EditLogsModal';
import { useLogsStore, useEditLogsStore } from '../store/LogsStore';
import { Log } from '../types/logs';

const Stack = createStackNavigator<LogsStackParamList>();

const generateNewLogId = (logs: Log[]) => {
  const ids = logs.map((log) => log.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
};

const LogsStack = () => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const { logs, addLog, editLog } = useLogsStore();
  const { logDate, editedLogs } = useEditLogsStore();

  const handleSave = (params: { edit: true; id: number } | { edit: false }) => {
    if (params.edit) {
      editLog(params.id, editedLogs);
    } else {
      addLog({
        id: generateNewLogId(logs),
        date: logDate,
        items: editedLogs,
      });
    }
  };

  return (
    <Stack.Navigator id='LogStack'>
      <Stack.Group>
        <Stack.Screen
          options={{
            title: 'Logs',
            // headerRight: () => (
            //   <HeaderButton
            //     iconName='plus'
            //     onPress={() =>
            //       navigation.navigate('HomeStack', {
            //         screen: 'LogsStack',
            //         params: {
            //           screen: 'AddLog',
            //           params: {
            //             edit: false,
            //           },
            //         },
            //       })
            //     }
            //   />
            // ),
          }}
          name='LogHistory'
          component={LogHistoryScreen}
        />
        <Stack.Screen
          options={({ route }) => ({
            title: route.params.date,
            // headerRight: () => (
            //   <HeaderButton
            //     iconName='edit'
            //     onPress={() =>
            //       navigation.navigate('HomeStack', {
            //         screen: 'LogsStack',
            //         params: {
            //           screen: 'AddLog',
            //           params: {
            //             edit: true,
            //             id: route.params.id,
            //           },
            //         },
            //       })
            //     }
            //   />
            // ),
          })}
          name='LogDetails'
          component={LogDetailsScreen}
        />
      </Stack.Group>
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name='AddLog'
          component={EditLogsModal}
          options={({ route }) => ({
            title: route.params.edit ? 'Edit Log' : 'Add Log',
            headerRight: () => (
              <HeaderButton iconName='save' onPress={() => handleSave(route.params)} />
            ),
          })}
        />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default LogsStack;
