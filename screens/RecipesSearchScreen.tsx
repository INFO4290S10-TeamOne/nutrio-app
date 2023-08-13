import { useEffect } from 'react';
import { Box, Divider, ScrollView, HStack, Spinner, Heading } from 'native-base';
import SearchBar from '../components/SearchBar';
import CuisineShortcut from '../components/CuisineShortcut';
import RecipeCard from '../components/RecipeCard';
import { useRecipeSearch } from '../store/RecipeSearchStore';
import { useSpoonacularSearch } from '../hooks/useSpoonacularSearch';

const cuisines = [
  {
    id: 1,
    title: 'Italian',
    image: 'https://img.icons8.com/fluency/96/spaghetti.png',
  },
  { id: 2, title: 'Chinese', image: 'https://img.icons8.com/fluency/96/dim-sum.png' },
  { id: 3, title: 'Sushi', image: 'https://img.icons8.com/fluency/96/salmon-sushi.png' },
  { id: 4, title: 'American', image: 'https://img.icons8.com/fluency/96/bagel.png' },
  { id: 5, title: 'Chicken', image: 'https://img.icons8.com/fluency/96/kfc-chicken.png' },
  { id: 6, title: 'Burger', image: 'https://img.icons8.com/fluency/96/hamburger.png' },
  { id: 7, title: 'Desserts', image: 'https://img.icons8.com/fluency/96/cheesecake.png' },
  { id: 8, title: 'Asian', image: 'https://img.icons8.com/fluency/96/noodles.png' },
];

const RecipesSearch = () => {
  const { search } = useRecipeSearch();
  const { data: recipes, isLoading, refetch } = useSpoonacularSearch(search);

  useEffect(() => {
    refetch();
  }, []);

  const handleSearch = () => {
    refetch();
  };

  return (
    <Box flex='1' m={5}>
      <SearchBar handleSearch={handleSearch} />
      <ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {cuisines.map((cuisine) => (
            <CuisineShortcut key={cuisine.id} title={cuisine.title} image={cuisine.image} />
          ))}
        </ScrollView>
        <Divider my={5} />
        {/* // Recipe cards */}
        {!isLoading ? (
          recipes?.map((recipe) => (
            <Box key={recipe.id} marginBottom='5'>
              <RecipeCard id={recipe.id} title={recipe.title} image={recipe.image} />
            </Box>
          ))
        ) : (
          <HStack space={2} justifyContent='center'>
            <Spinner accessibilityLabel='Loading recipes' color={'violet.500'} />
            <Heading fontSize='md' color={'violet.500'}>
              Loading recipes...
            </Heading>
          </HStack>
        )}
      </ScrollView>
    </Box>
  );
};

export default RecipesSearch;
