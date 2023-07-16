import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HStack, VStack, Box, Text, Avatar, IconButton, Icon, Spacer } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { Log } from '../types/logs';
import { TabParamList } from '../types/routes';
import LogListItem from './LogListItem';

interface LogListProps {
  date: string;
  log: Log;
}

const LogList = ({ date, log }: LogListProps) => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  const truncateLog = log.items.length > 3;
  const slicedLog = truncateLog ? log.items.slice(0, 3) : log.items;

  if (!log.items.length)
    return (
      <Box
        borderBottomWidth='1'
        _dark={{
          borderColor: 'muted.50',
        }}
        borderColor='muted.800'
        pl={['0', '4']}
        pr={['0', '5']}
        py='2'
      >
        <Text
          _dark={{
            color: 'warmGray.50',
          }}
          color='coolGray.800'
          bold
        >
          No items recorded
        </Text>
      </Box>
    );
  return (
    <>
      {slicedLog.map((item) => (
        <LogListItem key={item.id} logItem={item} />
      ))}
      {truncateLog ? (
        <Box
          borderBottomWidth='1'
          _dark={{
            borderColor: 'muted.50',
          }}
          borderColor='muted.800'
          pl={['0', '4']}
          pr={['0', '5']}
          py='2'
        >
          <Text
            onPress={() =>
              navigation.navigate('HomeStack', {
                screen: 'LogsStack',
                params: {
                  screen: 'LogDetails',
                  params: { date, logItems: log },
                },
              })
            }
            alignSelf='center'
            color='coolGray.600'
            _dark={{
              color: 'warmGray.200',
            }}
          >
            {log.items.length - 3} more items...
          </Text>
        </Box>
      ) : null}
    </>
  );
};

export default LogList;
