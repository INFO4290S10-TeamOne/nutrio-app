import { Feather } from '@expo/vector-icons';
import { IconButton, Icon, Box } from 'native-base';

type HeaderButtonProps = {
  type?: any;
  iconName: string;
  onPress: () => void;
  variant?: string;
};

const HeaderButton = ({
  type = Feather,
  iconName,
  onPress,
  variant = 'ghost',
}: HeaderButtonProps) => {
  return (
    <IconButton
      key={iconName}
      colorScheme='violet'
      rounded='full'
      size='md'
      icon={<Icon as={type} name={iconName} />}
      onPress={onPress}
      variant={variant}
    />
  );
};

export default HeaderButton;
