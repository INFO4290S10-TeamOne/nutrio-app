import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  HStack,
  VStack,
  Text,
  Spinner,
  Heading,
  ScrollView,
} from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TabParamList } from '../types/routes';
import { useSpoonacularSearch } from '../hooks/useSpoonacularSearch';
import { useGoalStore } from '../store/GoalStore';
import { useLogsStore } from '../store/LogsStore';
import RecipeCard from '../components/RecipeCard';
import { getNutrientSum } from '../helpers/getNutrientSum';

function HomeScreen() {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const { data: recipes, isLoading, refetch } = useSpoonacularSearch('');
  const { goal } = useGoalStore();
  const { logs } = useLogsStore();
  const [caloriesToday, setCaloriesToday] = useState(0);
  const [proteinsToday, setProteinsToday] = useState(0);
  const [fatsToday, setFatsToday] = useState(0);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (logs.length > 0) {
      const today = new Date().toLocaleDateString();
      const todaysLogs = logs.filter((log) => {
        return log.date === today;
      });

      const calories = getNutrientSum('Calories', todaysLogs);
      const proteins = getNutrientSum('Protein', todaysLogs);
      const fats = getNutrientSum('Fat', todaysLogs);
      setCaloriesToday(calories);
      setProteinsToday(proteins);
      setFatsToday(fats);
    }
  }, [logs]);

  return (
    <ScrollView>
      <VStack flex={1} justifyContent="center" alignItems="center">
        <Text fontSize={48}>Welcome!</Text>
        <Text fontSize={24}>{new Date().toDateString()}</Text>

        <HStack space={2} mt={5}>
          <Button
            size="lg"
            onPress={() => navigation.navigate('Scale')}
            variant="solid"
            colorScheme="violet"
          >
            Scale
          </Button>
          <Button
            size="lg"
            onPress={() =>
              navigation.navigate('HomeStack', {
                screen: 'LogsStack',
                params: { screen: 'LogHistory' },
              })
            }
            variant="solid"
            colorScheme="primary"
          >
            Logs
          </Button>
        </HStack>
        <VStack my={8}>
          <Text fontSize={24}>Your goals for today:</Text>
          <HStack space={2} justifyContent={'center'}>
            <Text fontSize={18}>{caloriesToday}</Text>
            <Text fontSize={18}>/</Text>
            <Text fontSize={18}>{goal.maxCalories} Calories</Text>
          </HStack>
          <HStack space={4} justifyContent={'center'}>
            <Text fontSize={18}>{proteinsToday}</Text>
            <Text fontSize={18}>/</Text>
            <Text fontSize={18}>{goal.maxProteins}g Protein</Text>
          </HStack>
          <HStack space={4} justifyContent={'center'}>
            <Text fontSize={18}>{fatsToday}</Text>
            <Text fontSize={18}>/</Text>
            <Text fontSize={18}>{goal.maxFats}g Fats</Text>
          </HStack>
        </VStack>
        <VStack space={2} mt={8}>
          <Text textAlign={'center'} fontSize={24}>
            Featured Recipes
          </Text>
          {/* // Recipe cards */}
          {!isLoading ? (
            recipes?.slice(0, 2).map((recipe) => (
              <Box key={recipe.id} marginBottom="5">
                <RecipeCard
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                />
              </Box>
            ))
          ) : (
            <HStack space={2} justifyContent="center">
              <Spinner
                accessibilityLabel="Loading recipes"
                color={'violet.500'}
              />
              <Heading fontSize="md" color={'violet.500'}>
                Loading recipes...
              </Heading>
            </HStack>
          )}
        </VStack>
      </VStack>
    </ScrollView>
  );
}

export default HomeScreen;
