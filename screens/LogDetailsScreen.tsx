import {
  HStack,
  VStack,
  Box,
  Text,
  Avatar,
  IconButton,
  Icon,
  Spacer,
  FlatList,
  Heading,
} from 'native-base';
import { Feather } from '@expo/vector-icons';
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