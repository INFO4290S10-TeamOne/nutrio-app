import { Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Box flex={1} justifyContent='center' alignItems='center'>
      <Text>Home!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Log')}>
        <Text style={{ color: 'blue' }}>Log</Text>
      </TouchableOpacity>
    </Box>
  );
}

export default HomeScreen;
