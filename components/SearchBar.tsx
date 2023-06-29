import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput style={styles.searchInput} placeholder='Search...' testID='searchBar' />
      <TouchableOpacity style={{ justifyContent: 'center' }} testID='searchButton'>
        <FontAwesomeIcon icon={faSearch} size={24} color='gray' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#F0EEEE',
    height: 50,
    width: '90%',
    borderRadius: 15,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
});
