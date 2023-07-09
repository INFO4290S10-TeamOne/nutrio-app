import { createStackNavigator } from '@react-navigation/stack';
import RecipesSearch from '../screens/RecipesSearchScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import { RecipeStackParamList } from '../types/routes';

const Stack = createStackNavigator<RecipeStackParamList>();

const RecipesStack = () => {
  return (
    <Stack.Navigator id='RecipesStack'>
      <Stack.Screen
        options={{
          title: 'Recipes',
        }}
        name='RecipeSearch'
        component={RecipesSearch}
      />
      <Stack.Screen
        options={({ route }) => ({ title: route.params.title })}
        name='RecipeDetails'
        component={RecipeDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default RecipesStack;
