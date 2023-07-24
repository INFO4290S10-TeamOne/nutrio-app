import { Box, FormControl, Input, Stack, HStack, IconButton, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';

type AddNewLogItemEntryProps = {
  id: number;
  itemName: string;
  servings: number;
  thumbnail: string;
  updateItem: (id: number, field: 'itemName' | 'servings' | 'thumbnail', itemName: string) => void;
  deleteItem: (id: number) => void;
};

const AddNewLogItemEntry = ({
  id,
  itemName,
  servings,
  thumbnail,
  updateItem,
  deleteItem,
}: AddNewLogItemEntryProps) => {
  return (
    <HStack space={5} alignItems={'flex-start'}>
      <Box mt={5}>
        <IconButton
          colorScheme='red'
          rounded='full'
          size='xs'
          icon={<Icon as={Feather} name='minus' />}
          variant='solid'
          onPress={() => {
            console.log('delete', id);
            deleteItem(id);
          }}
        />
      </Box>
      <Box m={1} width={'85%'}>
        <Stack>
          <FormControl.Label>Item Name</FormControl.Label>
          <Input
            p={2}
            value={itemName}
            placeholder='Item Name'
            onChangeText={(e) => updateItem(id, 'itemName', e)}
          />
        </Stack>
        <Stack>
          <FormControl.Label>Servings</FormControl.Label>
          <Input
            p={2}
            value={servings.toString()}
            placeholder='Servings'
            keyboardType='number-pad'
            onChangeText={(e) => updateItem(id, 'servings', e)}
          />
        </Stack>
        <Stack>
          <FormControl.Label>Thumbnail</FormControl.Label>
          <Input
            p={2}
            value={thumbnail}
            placeholder='Thumbnail'
            onChangeText={(e) => updateItem(id, 'thumbnail', e)}
          />
        </Stack>
      </Box>
    </HStack>
  );
};

export default AddNewLogItemEntry;
