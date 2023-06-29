import { View, ScrollView } from 'react-native';
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
    image: require('../assets/favicon.png'),
    time: 30,
    servings: 4,
  },
  {
    id: 2,
    title: 'Chicken Parmesan',
    image: require('../assets/favicon.png'),
    time: 30,
    servings: 4,
  },
  {
    id: 3,
    title: 'Chicken Parmesan',
    image: require('../assets/favicon.png'),
    time: 30,
    servings: 4,
  },
];

const RecipesScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SearchBar />
      <ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {cuisines.map((cuisine) => (
            <CuisineShortcut key={cuisine.id} title={cuisine.title} image={cuisine.image} />
          ))}
        </ScrollView>
        {/* Divider */}
        <View
          style={{
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            width: '90%',
            alignSelf: 'center',
            marginVertical: 20,
          }}
        />

        {/* // Recipe cards */}
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            time={recipe.time}
            servings={recipe.servings}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default RecipesScreen;
