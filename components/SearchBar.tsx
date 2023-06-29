import { VStack, Box, Divider, Input, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useRecipeSearch } from '../store/RecipeSearch';

const SearchBar = () => {
  const { search, setSearch } = useRecipeSearch();

  return (
    <VStack
      my='4'
      space={5}
      w='100%'
      maxW='350px'
      divider={
        <Box px='2'>
          <Divider />
        </Box>
      }
    >
      <VStack w='100%' space={5} alignSelf='center'>
        <Input
          placeholder='Search'
          variant='filled'
          width='100%'
          borderRadius='10'
          py='1'
          px='2'
          InputLeftElement={
            <Icon ml='2' size='4' color='gray.400' as={<Ionicons name='ios-search' />} />
          }
          InputRightElement={
            search.length ? (
              <Icon
                mr='2'
                size='4'
                color='gray.400'
                as={<Ionicons name='ios-close' onPress={() => setSearch('')} />}
              />
            ) : undefined
          }
          fontSize={16}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </VStack>
    </VStack>
  );
};

export default SearchBar;
