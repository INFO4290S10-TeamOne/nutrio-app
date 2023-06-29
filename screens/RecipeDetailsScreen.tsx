import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RecipeDetailsRouteProps } from '../types/routes';

const RecipeDetailsScreen = () => {
  const { id, title } = useRoute<RecipeDetailsRouteProps>().params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Recipe Details! {id} {title}
      </Text>
    </View>
  );
};

export default RecipeDetailsScreen;
