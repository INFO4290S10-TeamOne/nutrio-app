import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

const RecipeCard = ({
  title,
  image,
  time,
  servings,
}: {
  title: string;
  image: any;
  time: number;
  servings: number;
}) => {
  return (
    <TouchableOpacity style={styles.card} testID='recipe-card'>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <Text style={styles.detail}>Time: {time} min</Text>
          <Text style={styles.detail}>Servings: {servings}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 220,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // only iOS
    shadowOpacity: 0.25, // only iOS
    shadowRadius: 3.84, // only iOS
    elevation: 5, // only Android
    marginBottom: 20,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    fontSize: 14,
    color: 'gray',
  },
});

export default RecipeCard;
