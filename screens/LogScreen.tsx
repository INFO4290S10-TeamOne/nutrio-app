import { Box, Heading, Text } from 'native-base';
import LogList from '../components/LogList';

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
    date: new Date('2023-07-01'),
    itemName: 'Chicken Parmesan',
    servings: 2,
    thumbnail:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

const LogScreen = () => {
  const today = new Date();

  const filteredLog = log.filter((item) => {
    return item.date.toLocaleDateString() === today.toLocaleDateString();
  });

  return (
    <Box flex='1' margin={5}>
      <Heading>
        <Text>{today.toLocaleDateString()}</Text>
      </Heading>
      <LogList log={filteredLog} />
    </Box>
  );
};

export default LogScreen;
