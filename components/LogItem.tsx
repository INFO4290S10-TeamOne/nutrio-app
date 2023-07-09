import { Avatar, Box, HStack, Icon, IconButton, Spacer, VStack, Text } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { Log } from '../types/logs';

interface LogItemProps {
  logItem: Log;
}

const LogItem = ({ logItem }: LogItemProps) => {
  return (
    <Box
      key={logItem.id}
      borderBottomWidth='1'
      _dark={{
        borderColor: 'muted.50',
      }}
      borderColor='muted.800'
      pl={['0', '4']}
      pr={['0', '5']}
      py='2'
    >
      <HStack space={[2, 3]} justifyContent='space-between'>
        <Avatar
          size='48px'
          source={{
            uri: logItem.thumbnail,
          }}
        />
        <VStack>
          <Text
            _dark={{
              color: 'warmGray.50',
            }}
            color='coolGray.800'
            bold
          >
            {logItem.itemName}
          </Text>
          <Text
            color='coolGray.600'
            _dark={{
              color: 'warmGray.200',
            }}
          >
            Servings: {logItem.servings}
          </Text>
        </VStack>
        <Spacer />
        <VStack>
          <Text
            fontSize='xs'
            _dark={{
              color: 'warmGray.50',
            }}
            color='coolGray.800'
            alignSelf='flex-start'
          >
            {logItem.date.toLocaleTimeString()}
          </Text>
          <IconButton
            alignSelf={'flex-end'}
            size='md'
            colorScheme={'violet'}
            rounded='full'
            icon={<Icon as={Feather} name='info' />}
            // onPress={() => navigation.navigate('Home')}
          />
        </VStack>
      </HStack>
    </Box>
  );
};

export default LogItem;