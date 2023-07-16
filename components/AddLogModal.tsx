import { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  Input,
  Stack,
  Heading,
  HStack,
  IconButton,
  Icon,
  ScrollView,
} from 'native-base';
import { Feather } from '@expo/vector-icons';

const NewItem = ({
  id,
  updateItem,
  deleteItem,
}: {
  id: number;
  updateItem: (id: number, field: 'itemName' | 'servings' | 'thumbnail', itemName: string) => void;
  deleteItem: (id: number) => void;
}) => {
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
            placeholder='Item Name'
            onChangeText={(e) => updateItem(id, 'itemName', e)}
          />
        </Stack>
        <Stack>
          <FormControl.Label>Servings</FormControl.Label>
          <Input
            p={2}
            placeholder='Servings'
            keyboardType='number-pad'
            onChangeText={(e) => updateItem(id, 'servings', e)}
          />
        </Stack>
        <Stack>
          <FormControl.Label>Thumbnail</FormControl.Label>
          <Input
            p={2}
            placeholder='Thumbnail'
            onChangeText={(e) => updateItem(id, 'thumbnail', e)}
          />
        </Stack>
      </Box>
    </HStack>
  );
};

const AddLogModal = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      itemName: '',
      servings: 0,
      thumbnail: '',
    },
  ]);

  useEffect(() => {
    console.log('items', items);
  }, [items]);

  const updateItem = (
    id: number,
    field: 'itemName' | 'servings' | 'thumbnail',
    newValue: string
  ) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [field]: newValue,
          };
        }
        return item;
      })
    );
  };

  const deleteItem = (id: number) => {
    console.log('delete', id);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <ScrollView flex={1} margin={5}>
      <Heading>New Log</Heading>
      <Box flex={1} margin={5}>
        <FormControl>
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Date</FormControl.Label>
              <Input p={2} placeholder={new Date().toLocaleDateString()} />
            </Stack>
            {items.map((item) => (
              <NewItem key={item.id} id={item.id} updateItem={updateItem} deleteItem={deleteItem} />
            ))}
          </Stack>
          <Stack>
            <Box mt={5} alignItems={'flex-end'}>
              <IconButton
                colorScheme='green'
                rounded='full'
                size='sm'
                icon={<Icon as={Feather} name='plus' />}
                variant='solid'
                onPress={() => {
                  setItems([
                    ...items,
                    {
                      id: items.length,
                      itemName: '',
                      servings: 0,
                      thumbnail: '',
                    },
                  ]);
                }}
              />
            </Box>
          </Stack>
        </FormControl>
      </Box>
    </ScrollView>
  );
};

export default AddLogModal;
