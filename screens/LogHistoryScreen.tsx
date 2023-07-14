import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Box, Heading, Text, ScrollView, Icon } from 'native-base';
import LogList from '../components/LogList';
import { Octicons } from '@expo/vector-icons';
import { TabParamList } from '../types/routes';

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
  {
    id: 7,
    date: new Date(),
    itemName: 'Chicken Parmesan',
    servings: 2,
    thumbnail:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 8,
    date: new Date('2023-07-01'),
    itemName: 'Chicken Parmesan',
    servings: 2,
    thumbnail:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

const allLogs = [
  {
    id: 1,
    date: new Date(),
  },
  {
    id: 2,
    date: new Date('2023-07-01'),
  },
  {
    id: 3,
    date: new Date('2023-06-30'),
  },
  {
    id: 4,
    date: new Date('2023-06-29'),
  },
];

const LogHistoryScreen = () => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  return (
    <ScrollView>
      <Box flex='1' margin={5}>
        {allLogs
          .sort((date1, date2) => date2.date.getTime() - date1.date.getTime())
          .map((item) => {
            const filteredLog = log.filter(
              (logItem) => logItem.date.toLocaleDateString() === item.date.toLocaleDateString()
            );
            return (
              <Box key={item.id} mb={10}>
                <Heading
                  alignItems='center'
                  onPress={() =>
                    navigation.navigate('HomeStack', {
                      screen: 'LogsStack',
                      params: {
                        screen: 'LogDetails',
                        params: { date: item.date.toLocaleDateString(), logItems: filteredLog },
                      },
                    })
                  }
                >
                  <Text>{item.date.toLocaleDateString()} </Text>
                  <Icon as={Octicons} name='chevron-right' size='lg' />
                </Heading>
                <LogList date={item.date.toLocaleDateString()} log={filteredLog} />
              </Box>
            );
          })}
      </Box>
    </ScrollView>
  );
};

export default LogHistoryScreen;
