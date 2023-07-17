import { Box, FlatList } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { LogDetailsRouteProps } from '../types/routes';
import LogListItem from '../components/LogListItem';
import { useLogsStore } from '../store/LogsStore';

const LogDetailsScreen = () => {
  const { id } = useRoute<LogDetailsRouteProps>().params;
  const { logs } = useLogsStore();
  const logItems = logs.find((log) => log.id === id);

  if (!logItems) return null;

  return (
    <Box flex='1' margin={5}>
      <FlatList
        data={logItems.items}
        renderItem={({ item }) => <LogListItem logItem={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </Box>
  );
};

export default LogDetailsScreen;
