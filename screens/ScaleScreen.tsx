import { Circle, VStack, HStack, Text } from 'native-base';

const ScaleScrren = () => {
  return (
    <VStack space={8} alignItems={'center'} justifyItems={'center'} my={10}>
      <Circle size='250px' bg='violet.300'>
        <VStack space={4} alignItems={'center'}>
          <Text fontSize={24}>Weight</Text>
          <HStack space={4}>
            <Text fontSize={52}>260</Text>
            <Text fontSize={52}>g</Text>
          </HStack>
        </VStack>
      </Circle>
      <VStack alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize={32}>Chicken Breast</Text>
        <Text underline={true} fontSize={18} color='violet.500'>
          Change item
        </Text>
      </VStack>
      <VStack alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
        <HStack space={4} justifyContent={'space-between'} alignItems={'center'} w={'50%'}>
          <Text fontSize={24}>263.3</Text>
          <Text fontSize={24}> Calories</Text>
        </HStack>
        <HStack space={4} justifyContent={'space-between'} alignItems={'center'} w={'50%'}>
          <Text fontSize={24}>9.1 g</Text>
          <Text fontSize={24}>Protein</Text>
        </HStack>
        <HStack space={4} justifyContent={'space-between'} alignItems={'center'} w={'50%'}>
          <Text fontSize={24}>22.1 g</Text>
          <Text fontSize={24}>Fat</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};
export default ScaleScrren;
