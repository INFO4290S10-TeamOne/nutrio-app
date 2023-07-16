import { useState, useEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Box, Heading, Text, ScrollView, Icon, View } from 'native-base';
import { Octicons } from '@expo/vector-icons';
import { useLogsStore } from '../store/LogsStore';
import LogList from '../components/LogList';
import { TabParamList } from '../types/routes';
import { Log } from '../types/logs';

const defaultLogs: Log[] = [
  {
    id: 1,
    date: new Date().toLocaleDateString(),
    items: [
      {
        id: 1,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 2,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 3,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 4,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
  },
  {
    id: 1,
    date: new Date().toLocaleDateString(),
    items: [
      {
        id: 1,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 2,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 3,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 4,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
  },
  {
    id: 2,
    date: new Date().toLocaleDateString(),
    items: [
      {
        id: 1,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 2,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 3,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 4,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
  },
  {
    id: 3,
    date: new Date().toLocaleDateString(),
    items: [
      {
        id: 1,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 2,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 3,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 4,
        date: new Date().toLocaleDateString(),
        itemName: 'Chicken Parmesan',
        servings: 2,
        thumbnail:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
  },
];

const LogHistoryScreen = () => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const { logs, hasHydrated } = useLogsStore();

  if (!hasHydrated || !logs) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <Box flex='1' margin={5}>
        {logs.map((logItem) => (
          <Box key={logItem.id} mb={10}>
            <Heading
              alignItems='center'
              onPress={() =>
                navigation.navigate('HomeStack', {
                  screen: 'LogsStack',
                  params: {
                    screen: 'LogDetails',
                    params: { date: logItem.date, logItems: logItem },
                  },
                })
              }
            >
              <Text>{logItem.date}</Text>
              <Icon as={Octicons} name='chevron-right' size='lg' />
            </Heading>
            <LogList date={logItem.date} key={logItem.id} log={logItem} />
          </Box>
        ))}
      </Box>
    </ScrollView>
  );
};

export default LogHistoryScreen;
