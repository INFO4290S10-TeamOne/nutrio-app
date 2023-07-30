import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRecipeSearch } from '../store/RecipeSearchStore';
import { useSpoonacularSearch } from '../hooks/useSpoonacularSearch';

const CuisineShortcut = ({ title, image }: { title: string; image: any }) => {
  const { setSearch } = useRecipeSearch();
  const { refetch } = useSpoonacularSearch(title);

  const handleSearch = () => {
    setSearch(title);

    refetch();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleSearch}>
      <Image source={image} style={{ width: 50, height: 50, resizeMode: 'cover' }} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // only iOS
    shadowOpacity: 0.25, // only iOS
    shadowRadius: 3.84, // only iOS
    elevation: 5, // only Android
  },
  text: {
    position: 'absolute',
    bottom: 5,
    fontSize: 14,
  },
});

export default CuisineShortcut;
