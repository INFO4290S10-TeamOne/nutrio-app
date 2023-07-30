import { Box, Heading, AspectRatio, Image, Stack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TabParamList } from '../types/routes';

const RecipeCard = ({ id, title, image }: { id: number; title: string; image: any }) => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('RecipesStack', { screen: 'RecipeDetails', params: { id, title } })
      }
    >
      <Box alignItems='center'>
        <Box
          maxW='80'
          rounded='lg'
          overflow='hidden'
          borderColor='coolGray.200'
          borderWidth='1'
          _dark={{
            borderColor: 'coolGray.600',
            backgroundColor: 'gray.700',
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: 'gray.50',
          }}
        >
          <Box>
            <AspectRatio w='100%' ratio={16 / 9}>
              <Image source={{ uri: image }} alt={title} resizeMode='cover' />
            </AspectRatio>
          </Box>
          <Stack p='4' space={3}>
            <Stack space={2}>
              <Heading size='md' ml='-1'>
                {title}
              </Heading>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default RecipeCard;
