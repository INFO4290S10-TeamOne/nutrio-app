import { View, Text,StyleSheet } from 'react-native';

const ScaleScrren = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View >
     
      <Text style={style.scale}>0.g</Text>
      <Text style={style.items}>Select item</Text>
      <Text style={style.items}>0.0 Cal</Text>
      <Text style={style.items}>0.0g Protein</Text>
      <Text style={style.items}>0.0g fat</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  scale:{
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent:'center',
    width: 150,
    height: 150,
    backgroundColor:'grey',
    borderRadius: 150/2,
    padding:50,
    margin:20,
  },
  items:{
   
    fontSize: 16,
    margin:20,


  }
})
export default ScaleScrren;

