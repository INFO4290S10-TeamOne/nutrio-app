import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Button, HStack } from 'native-base';
import { Goal, useGoalStore } from '../store/GoalStore';
import { useLogsStore } from '../store/LogsStore';
import { getNutrientSum } from '../helpers/getNutrientSum';

const GoalsScreen = () => {
  const { goal, setGoal } = useGoalStore();
  const { logs } = useLogsStore();
  const [caloriesToday, setCaloriesToday] = useState(0);
  const [proteinsToday, setProteinsToday] = useState(0);
  const [fatsToday, setFatsToday] = useState(0);

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

  const changeGoalPrompt = (type: keyof Goal) => {
    Alert.prompt('Edit Goal', 'Enter your new goal', (text) => {
      setGoal({ ...goal, [type]: Number(text) });
    });
  };

  return (
    <View style={styles.Header}>
      <Text style={styles.Headfont}>Your daily Goals</Text>
      <View style={styles.Body}>
        <Text style={styles.bodytext}> Calories per day </Text>
        <HStack space={2} alignItems={'center'} mt={4}>
          <Text style={styles.counter}>
            {caloriesToday} / {goal.maxCalories} cals
          </Text>
          <Button
            colorScheme={'violet'}
            onPress={() => changeGoalPrompt('maxCalories')}
          >
            Edit
          </Button>
        </HStack>
      </View>

      <View style={styles.Body}>
        <Text style={styles.bodytext}> Protein per day </Text>
        <HStack space={2} alignItems={'center'} mt={4}>
          <Text style={styles.counter}>
            {proteinsToday} / {goal.maxProteins}g
          </Text>
          <Button
            colorScheme={'violet'}
            onPress={() => changeGoalPrompt('maxProteins')}
          >
            Edit
          </Button>
        </HStack>
      </View>
      <View style={styles.Body}>
        <Text style={styles.bodytext}> Fat per day </Text>
        <HStack space={2} alignItems={'center'} mt={4}>
          <Text style={styles.counter}>
            {fatsToday} / {goal.maxFats}g
          </Text>
          <Button
            colorScheme={'violet'}
            onPress={() => changeGoalPrompt('maxFats')}
          >
            Edit
          </Button>
        </HStack>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    margin: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Headfont: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  Body: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    padding: 20,
  },
  bodytext: {
    fontSize: 20,
  },
  counter: {
    fontSize: 20,
  },
});
export default GoalsScreen;
