import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack } from 'native-base';

const RecipeCard = ({
  title,
  category,
  image,
  time,
  calories,
}: {
  title: string;
  category: string;
  image: any;
  time: number;
  calories: number;
}) => {
  return (
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
  );
};

export default RecipeCard;
