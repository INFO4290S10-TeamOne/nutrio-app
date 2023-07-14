import 'react-native-gesture-handler/jestSetup';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

export const NativeBaseWrapper = ({ children }: { children: JSX.Element }) => {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <NavigationContainer>{children}</NavigationContainer>
    </NativeBaseProvider>
  );
};
