import { useNavigation } from '@react-navigation/native';
import { HStack, VStack, FlatList, Box, Text, Avatar, IconButton, Icon, Spacer } from 'native-base';
import { Feather } from '@expo/vector-icons';

const log = [
  {
    id: 1,
    date: new Date(),
    itemName: 'Chicken Parmesan',
    servings: 2,
    thumbnail:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 2,
    date: new Date(),
    itemName: 'Chicken Parmesan',
    servings: 2,
    thumbnail:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 3,
    date: new Date(),
    itemName: 'Chicken Parmesan',
    servings: 2,
    thumbnail:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 4,
    date: new Date(),
    itemName: 'Chicken Parmesan',
    servings: 2,
    thumbnail:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 5,
    date: new Date(),
    itemName: 'Chicken Parmesan',
    servings: 2,
    thumbnail:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 6,
    date: new Date(),
    itemName: 'Chicken Parmesan',
    servings: 2,
    thumbnail:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

const LogList = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={log}
      renderItem={({ item }) => (
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
          <HStack space={[2, 3]} justifyContent='space-between'>
            <Avatar
              size='48px'
              source={{
                uri: item.thumbnail,
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
                {item.itemName}
              </Text>
              <Text
                color='coolGray.600'
                _dark={{
                  color: 'warmGray.200',
                }}
              >
                Servings: {item.servings}
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
                {item.date.toLocaleDateString()} {item.date.toLocaleTimeString()}
              </Text>
              <IconButton
                alignSelf={'flex-end'}
                size='md'
                colorScheme={'violet'}
                rounded='full'
                icon={<Icon as={Feather} name='info' />}
                onPress={() => navigation.navigate('Home')}
              />
            </VStack>
          </HStack>
        </Box>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default LogList;
