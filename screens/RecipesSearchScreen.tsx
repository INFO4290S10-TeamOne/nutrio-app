import { Box, Divider, ScrollView, HStack, Spinner, Heading, useToast } from 'native-base';
import axios from 'axios';
import { useQuery } from 'react-query';
import { ToastAlert } from '../components/ToastAlert';
import SearchBar from '../components/SearchBar';
import CuisineShortcut from '../components/CuisineShortcut';
import RecipeCard from '../components/RecipeCard';
import { useRecipeSearch } from '../store/RecipeSearchStore';
import { SPOONACULAR_API_KEY, SPOONACULAR_URL } from '@env';
import { SpoonacularRecipe, SpoonacularResponse } from '../types/spoonacular';

const cuisines = [
  { id: 1, title: 'Italian', image: require('../assets/favicon.png') },
  { id: 2, title: 'Chinese', image: require('../assets/favicon.png') },
  { id: 3, title: 'Sushi', image: require('../assets/favicon.png') },
  { id: 4, title: 'American', image: require('../assets/favicon.png') },
  { id: 5, title: 'Chicken', image: require('../assets/favicon.png') },
  { id: 6, title: 'Burger', image: require('../assets/favicon.png') },
  { id: 7, title: 'Desserts', image: require('../assets/favicon.png') },
  { id: 8, title: 'Asian', image: require('../assets/favicon.png') },
];

const RecipesSearch = () => {
  const toast = useToast();
  const { search } = useRecipeSearch();
  const {
    data: recipes,
    isLoading,
    isError,
    refetch,
  } = useQuery(
    ['search', search],
    async (): Promise<SpoonacularRecipe[]> => {
      try {
        const { data } = await axios.get<SpoonacularResponse>(
          `${SPOONACULAR_URL}/recipes/complexSearch`,
          {
            params: {
              apiKey: SPOONACULAR_API_KEY,
              query: search,
            },
          }
        );

        return data.results;
      } catch (error) {
        toast.show({
          render: ({ id }) => (
            <ToastAlert
              id={id}
              title='Error'
              description="Couldn't load recipes"
              variant='top-accent'
              status='error'
            />
          ),
        });

        return [];
      }
    },
    {
      enabled: false,
    }
  );

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
        {!isLoading &&
          !isError &&
          recipes?.map((recipe) => (
            <Box key={recipe.id} marginBottom='5'>
              <RecipeCard id={recipe.id} title={recipe.title} image={recipe.image} />
            </Box>
          ))}
        {isLoading && (
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
