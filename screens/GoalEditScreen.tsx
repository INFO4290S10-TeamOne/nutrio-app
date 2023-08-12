import { StyleSheet, TouchableOpacity,View, Text} from 'react-native';
import { useGoalStore } from '../store/GoalStore';
import { NavigationProp, useNavigation } from '@react-navigation/native';



const GoalEditScreen = () => {
    const { goal } = useGoalStore();
    
    return(
        <View>
            <Text> Goals Editting here!</Text>
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

export default GoalEditScreen;