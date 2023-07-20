import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import { counter } from '@fortawesome/fontawesome-svg-core';

const GoalsScreen = () => {
  const[calGoal,setCal] = useState('2000')
  const[proGoal,setPro] = useState('2000')
  const[fatGoal,setFat] = useState('2000')
  const[calCurr,setCCal] = useState('900')
  const[proCurr,setCPro] = useState('900')
  const[fatCurr,setCfat] = useState('900')

  return (
    <View style={styles.Header}>
      <Text style={styles.Headfont}>Goals!</Text>
      <View style={styles.Body}>
        <Text style={styles.bodytext}> Calories / day </Text>
        <Text style={styles.counter}> {calCurr} / {calGoal}   </Text>
    </View>
    <View style={styles.Body}>
    <Text  style={styles.bodytext} > Protein / day </Text>
        <Text style={styles.counter}> {proCurr} / {proGoal}   </Text>
    </View>
    <View style={styles.Body}>
    <Text style={styles.bodytext}> Fat / day </Text>
        <Text style={styles.counter}> {fatCurr} / {fatGoal}   </Text>
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
  Headfont:{
    fontWeight: 'bold',
    fontSize: 32,
  },
  Body:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
  }, 
  bodytext:{
    fontSize: 12,
  },
  counter:{
    fontSize: 20,
  },
})
export default GoalsScreen;
