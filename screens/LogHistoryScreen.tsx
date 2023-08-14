import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Box, Heading, Text, ScrollView, Icon, Button } from 'native-base';
import { Octicons } from '@expo/vector-icons';
import { useLogsStore } from '../store/LogsStore';
import LogList from '../components/LogList';
import { TabParamList } from '../types/routes';

const LogHistoryScreen = () => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const { logs, hasHydrated, clearLogs } = useLogsStore();

  if (!hasHydrated || !logs) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      {/* <Button onPress={() => clearLogs()}>Clear local storage</Button> */}
      <Box flex="1" margin={5}>
        {!logs.length && <Heading textAlign={'center'}>No logs yet.</Heading>}
        {logs.map((logItem) => (
          <Box key={logItem.id} mb={10}>
            <Heading
              alignItems="center"
              onPress={() =>
                navigation.navigate('HomeStack', {
                  screen: 'LogsStack',
                  params: {
                    screen: 'LogDetails',
                    params: { date: logItem.date, id: logItem.id },
                  },
                })
              }
            >
              <Text>{logItem.date} </Text>
              <Icon as={Octicons} name="chevron-right" size="lg" />
            </Heading>
            <LogList date={logItem.date} key={logItem.id} id={logItem.id} />
          </Box>
        ))}
      </Box>
    </ScrollView>
  );
};

export default LogHistoryScreen;
