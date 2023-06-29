import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput placeholder='Search...' />
      <TouchableOpacity>
        <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
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
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
  },
});
