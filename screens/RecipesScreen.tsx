import { ScrollView, View, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';

const RecipesScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Recipes!</Text>
      <SearchBar />
    </View>
  );
};

export default RecipesScreen;
