import { useEffect } from 'react';
import { Box, FormControl, Input, Stack, Heading, IconButton, Icon, ScrollView } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { AddLogRouteProps } from '../types/routes';
import { useLogsStore, useEditLogsStore } from '../store/LogsStore';
import AddNewLogItemEntry from './AddNewLogItemEntry';

const EditLogsModal = () => {
  const { params } = useRoute<AddLogRouteProps>();
  const { logs } = useLogsStore();
  const { logDate, setLogDate, editedLogs, setEditedLogs, updateItem, deleteItem, addNewItem } =
    useEditLogsStore();

  useEffect(() => {
    if (params.edit) {
      const logToEdit = logs.find((log) => log.id === params.id);
      if (logToEdit?.items) {
        setLogDate(logToEdit.date);
        setEditedLogs(logToEdit.items);
      }
    }

    return () => {
      setLogDate('');
      setEditedLogs([{ id: 0, itemName: '', servings: 0, thumbnail: '' }]);
    };
  }, [params]);

  return (
    <ScrollView flex={1} margin={5}>
      <Heading>New Log</Heading>
      <Box flex={1} margin={5}>
        <FormControl>
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Date</FormControl.Label>
              <Input
                p={2}
                placeholder={new Date().toLocaleDateString()}
                value={logDate}
                onChangeText={setLogDate}
                isReadOnly={params.edit}
              />
            </Stack>
            {editedLogs.map((item) => (
              <AddNewLogItemEntry
                key={item.id}
                id={item.id}
                itemName={item.itemName}
                servings={item.servings}
                thumbnail={item.thumbnail}
                updateItem={updateItem}
                deleteItem={deleteItem}
              />
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
                onPress={addNewItem}
              />
            </Box>
          </Stack>
        </FormControl>
      </Box>
    </ScrollView>
  );
};

export default EditLogsModal;
