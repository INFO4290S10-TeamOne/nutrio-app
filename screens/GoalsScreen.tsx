import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
//import { counter } from '@fortawesome/fontawesome-svg-core';
import { useGoalStore } from '../store/GoalStore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TabParamList } from '../types/routes';

const GoalsScreen = () => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const { goal, setGoal } = useGoalStore();
  const pressHandler = () => {
      navigation.navigate('HomeStack', {
      screen: 'goalEdit',
        })
  }

  return (
   
    <View style={styles.Header}>
      <Text style={styles.Headfont}>Goals!</Text>
      <TouchableOpacity onPress={pressHandler} style={styles.Body}>
        <Text style={styles.bodytext}> Calories / day </Text>
        <Text style={styles.counter}>0 / {goal.maxCalorie} </Text>
       </TouchableOpacity>
   
    <TouchableOpacity style={styles.Body}>
    <Text  style={styles.bodytext} > Protein / day </Text>
        <Text style={styles.counter}> 0 / {goal.maxProteins}  </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.Body}>
    <Text style={styles.bodytext}> Fat / day </Text>
        <Text style={styles.counter}> 0 / {goal.maxFats}   </Text>
    </TouchableOpacity>
    </View>

    
  );
};

const styles = StyleSheet.create({
  Header: {
    margin: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Headfont:{
    fontWeight: 'bold',
    fontSize: 32,
  },
  Body:{
      
      flex: 1,
      margin: 20,
      alignItems: 'center',
      padding: 20,
      
  }, 
  bodytext:{
    fontSize: 20,
  },
  counter:{
    fontSize: 20,
  },
})
export default GoalsScreen;
