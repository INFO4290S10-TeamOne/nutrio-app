import { Text, TouchableOpacity } from 'react-native';
import { Box, Button } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TabParamList } from '../types/routes';

import { useBearStore } from '../store/FoodStore';

function HomeScreen() {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const { bears, addABear } = useBearStore();

  return (
    <Box flex={1} justifyContent='center' alignItems='center'>
      <Text>Home!</Text>
      <Text>{bears}</Text>
      <Button onPress={() => addABear()}>+</Button>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('HomeStack', {
            screen: 'LogsStack',
            params: { screen: 'LogHistory' },
          })
        }
      >
        <Text style={{ color: 'blue' }}>Logs</Text>
      </TouchableOpacity>
    </Box>
  );
}

export default HomeScreen;
