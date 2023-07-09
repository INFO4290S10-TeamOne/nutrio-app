import { ScrollView, VStack, Box, Image, Text } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { RecipeDetailsRouteProps } from '../types/routes';

const recipeDetails = {
  id: 1,
  title: 'Chicken Parmesan',
  description: 'A delicious Italian dish',
  ingredients: [
    '1/2 cup all-purpose flour',
    '1/2 teaspoon salt',
    '1/4 teaspoon ground black pepper',
    '2 eggs',
    '1 cup panko bread crumbs',
    '1/2 cup grated Parmesan cheese',
    '4 skinless, boneless chicken breast halves - pounded to 1/2 inch thickness',
    '1/4 cup olive oil',
    '1/2 cup prepared tomato sauce',
    '1/4 cup fresh mozzarella, cut into small cubes',
    '1/4 cup chopped fresh basil',
  ],
  directions: [
    'Preheat oven to 425 degrees F (220 degrees C).',
    'Place flour in a shallow plate. Season chicken breasts with salt and black pepper; dredge lightly in flour. Shake off excess flour and set aside.',
    'Beat eggs in a shallow bowl. Combine bread crumbs and Parmesan cheese in a separate shallow bowl. Dip flour coated chicken breasts in beaten eggs. Press chicken breasts into bread crumb mixture until evenly coated. Place coated chicken breasts in a 9x13 inch baking dish. Drizzle with olive oil.',
    'Bake in the preheated oven until no longer pink in the center and the juices run clear, 30 to 35 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C). Top each chicken breast with about 2 tablespoons of tomato sauce and 2 tablespoons of mozzarella cheese; return to oven and bake until cheese is melted, about 5 minutes more. Garnish with basil.',
  ],
  image: 'https://images.media-allrecipes.com/userphotos/720x405/2280918.jpg',
  nutrition: {
    calories: 549.2,
    carbohydrates: 30.2,
    cholesterol: 183.8,
    fat: 27.1,
    fiber: 1.7,
    protein: 42.1,
    saturatedFat: 7.9,
    sodium: 1033.9,
    sugar: 2.9,
  },
  servings: 4,
  time: {
    active: '20 min',
    cook: '40 min',
    inactive: '10 min',
    prep: '20 min',
    total: '1 hr 10 min',
  },
};

const RecipeDetailsScreen = () => {
  const { id, title } = useRoute<RecipeDetailsRouteProps>().params;
  return (
    <ScrollView>
      <VStack space={4} alignItems='center'>
        <Box width='100%' height={300} bg='gray.200' alignItems='center' justifyContent='center'>
          <Image
            alt={title}
            source={{
              uri: recipeDetails.image,
            }}
            resizeMode='cover'
            height={300}
            width='100%'
          />
        </Box>
        <VStack width='100%' space={4} px='4'>
          <Text fontSize='2xl' fontWeight='bold'>
            {recipeDetails.title}
          </Text>
          <Text fontSize='lg'>{recipeDetails.description}</Text>
          <VStack width='100%' space={4}>
            <Text fontSize='lg' fontWeight='bold'>
              Ingredients
            </Text>
            {recipeDetails.ingredients.map((ingredient, index) => (
              <Text key={index}>{ingredient}</Text>
            ))}
          </VStack>
          <VStack width='100%' space={4}>
            <Text fontSize='lg' fontWeight='bold'>
              Directions
            </Text>
            {recipeDetails.directions.map((direction, index) => (
              <Text key={index}>{direction}</Text>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;
