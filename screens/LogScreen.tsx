import { Box } from 'native-base';
import LogList from '../components/LogList';

const LogScreen = () => {
  return (
    <Box flex='1' margin={5}>
      <LogList />
    </Box>
  );
};

export default LogScreen;
