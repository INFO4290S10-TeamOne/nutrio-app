import { Box, Divider, ScrollView, View } from 'native-base';
import SearchBar from '../components/SearchBar';
import CuisineShortcut from '../components/CuisineShortcut';
import RecipeCard from '../components/RecipeCard';

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

const recipes = [
  {
    id: 1,
    title: 'Chicken Parmesan',
    category: 'Low Carb',
    image: require('../assets/favicon.png'),
    time: 30,
    calories: 400,
  },
  {
    id: 2,
    title: 'Chicken Parmesan',
    category: 'Low Carb',
    image: require('../assets/favicon.png'),
    time: 30,
    calories: 400,
  },
  {
    id: 3,
    title: 'Chicken Parmesan',
    category: 'Low Carb',
    image: require('../assets/favicon.png'),
    time: 30,
    calories: 400,
  },
];

const RecipesSearch = () => {
  return (
    <Box flex='1' m={5}>
      <SearchBar />
      <ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {cuisines.map((cuisine) => (
            <CuisineShortcut key={cuisine.id} title={cuisine.title} image={cuisine.image} />
          ))}
        </ScrollView>
        <Divider my={5} />
        {/* // Recipe cards */}
        {recipes.map((recipe) => (
          <Box key={recipe.id} marginBottom='5'>
            <RecipeCard
              id={recipe.id}
              title={recipe.title}
              category={recipe.category}
              image={recipe.image}
              time={recipe.time}
              calories={recipe.calories}
            />
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};

export default RecipesSearch;
