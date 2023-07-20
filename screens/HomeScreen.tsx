import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Box } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TabParamList } from '../types/routes';
import { useState } from 'react';

function HomeScreen() {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const[date,setdate] = useState('June 3rd') //ill make this actually the date later
  return (
    <Box style={homestyles.primary}>
      <Box style={homestyles.header}>
      <Text style={homestyles.Headfont}>Welcome!</Text>
      </Box>
      <Box>
      <Text style={homestyles.Date}>{date}</Text>
      </Box>
     
      <Box>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('HomeStack', {
            screen: 'LogsStack',
            params: { screen: 'LogHistory' },
          })
        }
      >
        <Text style={{ color: 'blue' }}>Logs</Text>
      </TouchableOpacity>
      </Box>
      <Box style={homestyles.Body}>

      </Box>
        <Text style={homestyles.subHeaderText}> Today's Goals</Text>
      <Box>
        <Text>Calories 900/2000</Text>
      </Box>
        <Box style={homestyles.recipeInsert}>
          <Text style={homestyles.subHeaderText}>Recommended Recipes</Text>
        </Box>
    </Box>
  );
}
const homestyles = StyleSheet.create({
  primary:{
    flex :1,
     justifyContent:'flex-start',
      alignItems:'center'

  },
  header:{
    margin:20,
  },
  Headfont:{
    fontWeight: 'bold',
    fontSize: 32,
  },
  Date:{
    fontSize: 24,
  },
  Body:{
   
    margin:20,

  },
  recipeInsert:{
    margin:14,
  },
  subHeaderText:{
  fontSize:16,
  fontWeight:'bold',
  },
})
export default HomeScreen;
