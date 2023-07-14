import { Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TabParamList } from '../types/routes';

function HomeScreen() {
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  return (
    <Box flex={1} justifyContent='center' alignItems='center'>
      <Text>Home!</Text>
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
