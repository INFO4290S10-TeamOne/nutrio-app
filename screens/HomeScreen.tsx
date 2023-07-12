import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Box } from 'native-base';
import { faContactBook } from '@fortawesome/free-solid-svg-icons';

function HomeScreen() {
  return (
    <>
    <Box flex={1} justifyContent='center' alignItems='center' >
      <Text style={styles.header}>Welcome!</Text>
      <Box style={styles.body}>
      <Text> About us:</Text>
      <Text>Nutrio.io is an companion for the Nutri.io IOT scale</Text>
      <Text>Our goal is to help context you with foods and recipes that </Text>
      <Text>help you reach your healh and dietary needs</Text>
      </Box>
        
    </Box>

    <Box style={styles.contact}>
        <Text> Contact us at Support@nutrio.io</Text>
    </Box>
    </>
  );
  
}
const styles = StyleSheet.create({
  contact: {
    alignItems:'center',
    justifyContent:'flex-end',
    flex:2,
    marginTop: 20,
    marginBottom:20,

  },
  header: {
    fontSize:32,
    fontWeight:'bold',
    paddingBottom:20,
    paddingTop:20,
  },
  body: {
      
      alignItems:'center',
      paddingTop:20,


  }

})

export default HomeScreen;
