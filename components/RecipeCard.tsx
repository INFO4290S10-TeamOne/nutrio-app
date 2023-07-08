import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TabParamList } from '../types/routes';

const RecipeCard = ({
  id,
  title,
  category,
  image,
  time,
  calories,
}: {
  id: number;
  title: string;
  category: string;
  image: any;
  time: number;
  calories: number;
}) => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Recipes', { screen: 'RecipeDetails', params: { id, title } })
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
              <Image source={image} alt='image' resizeMode='cover' />
            </AspectRatio>
            <Center
              bg='violet.500'
              _dark={{
                bg: 'violet.400',
              }}
              _text={{
                color: 'warmGray.50',
                fontWeight: '700',
                fontSize: 'xs',
              }}
              position='absolute'
              bottom='0'
              px='3'
              py='1.5'
            >
              {category}
            </Center>
          </Box>
          <Stack p='4' space={3}>
            <Stack space={2}>
              <Heading size='md' ml='-1'>
                {title}
              </Heading>
            </Stack>
            <HStack alignItems='center' space={4} justifyContent='space-between'>
              <HStack alignItems='center'>
                <Text
                  color='coolGray.600'
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight='400'
                >
                  {calories} calories
                </Text>
              </HStack>
              <HStack alignItems='center'>
                <Text
                  color='coolGray.600'
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight='400'
                >
                  {time} min
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default RecipeCard;
