import { Box, FlatList } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { LogDetailsRouteProps } from '../types/routes';
import LogItem from '../components/LogItem';

const LogDetailsScreen = () => {
  const { logItems } = useRoute<LogDetailsRouteProps>().params;
  return (
    <Box flex='1' margin={5}>
      <FlatList
        data={logItems}
        renderItem={({ item }) => <LogItem logItem={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </Box>
  );
};

export default LogDetailsScreen;
