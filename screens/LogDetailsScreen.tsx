import { Box, FlatList } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { LogDetailsRouteProps } from '../types/routes';
import LogListItem from '../components/LogListItem';

const LogDetailsScreen = () => {
  const { logItems } = useRoute<LogDetailsRouteProps>().params;
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
