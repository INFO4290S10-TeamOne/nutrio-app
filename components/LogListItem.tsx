import { Avatar, Box, HStack, Icon, IconButton, Spacer, VStack, Text } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { LogItem } from '../types/logs';
import { TabParamList } from '../types/routes';

interface LogItemProps {
  logItem: LogItem;
}

const LogListItem = ({ logItem }: LogItemProps) => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();

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
            uri: logItem.image,
          }}
        />
        <VStack maxW={'70%'}>
          <Text
            _dark={{
              color: 'warmGray.50',
            }}
            color='coolGray.800'
            bold
          >
            {logItem.title}
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
          <IconButton
            alignSelf={'flex-end'}
            size='md'
            colorScheme={'violet'}
            rounded='full'
            icon={<Icon as={Feather} name='info' />}
            onPress={() =>
              navigation.navigate('RecipesStack', {
                screen: 'RecipeDetails',
                params: { id: logItem.id, title: logItem.title },
              })
            }
          />
        </VStack>
      </HStack>
    </Box>
  );
};

export default LogListItem;
