import { useState } from 'react';
import {
  ScrollView,
  VStack,
  Box,
  Image,
  Text,
  HStack,
  Spinner,
  Heading,
  Button,
  IconButton,
  AddIcon,
  MinusIcon,
  useToast,
} from 'native-base';
import { ToastAlert } from '../components/ToastAlert';
import { useRoute } from '@react-navigation/native';
import { RecipeDetailsRouteProps } from '../types/routes';
import { useSpoonacularRecipeInformation } from '../hooks/useSpoonacularRecipeInformation';
import { useLogsStore } from '../store/LogsStore';
import { Log } from '../types/logs';

const RecipeDetailsScreen = () => {
  const toast = useToast();
  const { id, title } = useRoute<RecipeDetailsRouteProps>().params;
  const {
    data: recipeDetails,
    isLoading,
    isError,
  } = useSpoonacularRecipeInformation(id);
  const { logs, addLog, editLog } = useLogsStore();
  const [showFullNutrients, setShowFullNutrients] = useState(false);
  const [numServings, setNumServings] = useState(1);

  const addToLog = () => {
    if (!recipeDetails) return;

    const hasLogsForToday = logs.some(
      (log) => log.date === new Date().toLocaleDateString(),
    );

    // Create new log entry if there are no logs for today
    if (!hasLogsForToday) {
      // Create a new id
      const ids = logs?.map((item) => item.id) ?? 0;
      const maxId = Math.max(...ids, 0);

      const newLogEntry: Log = {
        id: maxId + 1,
        date: new Date().toLocaleDateString(),
        items: [{ ...recipeDetails, servings: numServings }],
      };

      addLog(newLogEntry);
    } else {
      // Add to existing log entry
      const existingLog = logs.find(
        (log) => log.date === new Date().toLocaleDateString(),
      );

      if (!existingLog) return;

      const updatedItems = [
        ...existingLog.items,
        { ...recipeDetails, servings: numServings },
      ];

      editLog(existingLog.id, updatedItems);
    }

    toast.show({
      render: ({ id }) => (
        <ToastAlert
          id={id}
          title="Success!"
          description="Item added to log"
          variant="top-accent"
          status="success"
        />
      ),
    });
  };

  const handleMinus = () => {
    if (numServings > 1) {
      setNumServings(numServings - 1);
    }
  };

  if (isError) {
    return (
      <VStack space={4} alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">
          Error loading recipe
        </Text>
      </VStack>
    );
  }

  return (
    <ScrollView>
      {!isLoading && recipeDetails ? (
        <VStack space={4} alignItems="center" paddingBottom={12}>
          <Box
            width="100%"
            height={300}
            bg="gray.200"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              alt={title}
              source={{
                uri: recipeDetails?.image,
              }}
              resizeMode="cover"
              height={300}
              width="100%"
            />
          </Box>
          <VStack width="100%" space={4} px="4">
            <Text fontSize="2xl" fontWeight="bold">
              {recipeDetails.title}
            </Text>
            <VStack width="100%" space={4}>
              <Text fontSize="lg" fontWeight="bold">
                Nutrition
              </Text>
              {recipeDetails.nutrition.nutrients.slice(0, 4).map((nutrient) => (
                <HStack key={nutrient.name} justifyContent="space-between">
                  <Text>{nutrient.name}</Text>
                  <Text>{nutrient.amount + ' ' + nutrient.unit}</Text>
                </HStack>
              ))}
              {showFullNutrients &&
                recipeDetails.nutrition.nutrients.slice(4).map((nutrient) => (
                  <HStack key={nutrient.name} justifyContent="space-between">
                    <Text>{nutrient.name}</Text>
                    <Text>{nutrient.amount + ' ' + nutrient.unit}</Text>
                  </HStack>
                ))}
              <Button
                size="sm"
                variant="subtle"
                colorScheme="violet"
                onPress={() => setShowFullNutrients(!showFullNutrients)}
              >
                {showFullNutrients
                  ? 'Hide full nutrient list'
                  : 'Show full nutrient list'}
              </Button>
            </VStack>
            <VStack width="100%" space={4}>
              <Text fontSize="lg" fontWeight="bold">
                Ingredients
              </Text>
              {recipeDetails.extendedIngredients.map((ingredient) => (
                <HStack key={ingredient.id} justifyContent="space-between">
                  <Text>{ingredient.amount + ' ' + ingredient.unit}</Text>
                  <Text>
                    {ingredient.name.charAt(0).toUpperCase() +
                      ingredient.name.slice(1)}
                  </Text>
                </HStack>
              ))}
            </VStack>
            <VStack width="100%" space={4}>
              <Text fontSize="lg" fontWeight="bold">
                Directions
              </Text>
              {recipeDetails.analyzedInstructions.map((instruction) =>
                instruction.steps.map((step) => (
                  <Text key={step.number}>
                    {step.number + '. ' + step.step}
                  </Text>
                )),
              )}
            </VStack>
          </VStack>
          <VStack width="100%" space={4} px="4" my="4">
            <HStack space={2} justifyContent="center">
              <HStack space={2} alignItems="center">
                <IconButton
                  onPress={handleMinus}
                  colorScheme="coolGray"
                  variant="outline"
                  icon={<MinusIcon />}
                />
                <Box paddingX={2} w={10}>
                  <Text fontSize="lg" textAlign={'center'}>
                    {numServings}
                  </Text>
                </Box>
                <IconButton
                  onPress={() => setNumServings(numServings + 1)}
                  colorScheme="coolGray"
                  variant="outline"
                  icon={<AddIcon />}
                />
              </HStack>
              <Button
                size="lg"
                colorScheme="violet"
                onPress={addToLog}
                w={'60%'}
              >
                Add to log
              </Button>
            </HStack>
          </VStack>
        </VStack>
      ) : (
        <VStack space={4} alignItems="center">
          <HStack space={2} justifyContent="center">
            <Spinner
              accessibilityLabel="Loading recipes"
              color={'violet.500'}
            />
            <Heading fontSize="md" color={'violet.500'}>
              Loading recipe...
            </Heading>
          </HStack>
        </VStack>
      )}
    </ScrollView>
  );
};

export default RecipeDetailsScreen;
