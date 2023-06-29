import { createStackNavigator } from '@react-navigation/stack';
import RecipesSearch from '../components/RecipesSearch';
import RecipeDetailsScreen from './RecipeDetailsScreen';
import { RecipeStackParamList } from '../types/routes';

const RecipesStack = createStackNavigator<RecipeStackParamList>();

const RecipesScreen = () => {
  return (
    <RecipesStack.Navigator id='RecipesStack'>
      <RecipesStack.Screen name='RecipeSearch' component={RecipesSearch} />
      <RecipesStack.Screen
        options={({ route }) => ({ title: route.params.title })}
        name='RecipeDetails'
        component={RecipeDetailsScreen}
      />
    </RecipesStack.Navigator>
  );
};

export default RecipesScreen;
