import { Text, Alert, CloseIcon, HStack, IconButton, VStack, useToast } from 'native-base';

interface ToastAlertProps {
  id: string;
  status?: 'info' | 'warning' | 'success' | 'error';
  variant?: 'solid' | 'subtle' | 'left-accent' | 'top-accent' | 'outline';
  title: string;
  description?: string;
  isClosable?: boolean;
}

export const ToastAlert = ({
  id,
  status,
  variant,
  title,
  description,
  isClosable,
  ...rest
}: ToastAlertProps) => {
  const toast = useToast();

  return (
    <Alert
      marginBottom={8}
      maxWidth='100%'
      alignSelf='center'
      flexDirection='row'
      status={status ? status : 'info'}
      variant={variant}
      {...rest}
    >
      <VStack space={1} flexShrink={1} w='100%'>
        <HStack flexShrink={1} alignItems='center' justifyContent='space-between'>
          <HStack space={2} flexShrink={1} alignItems='center'>
            <Alert.Icon />
            <Text
              fontSize='md'
              fontWeight='medium'
              flexShrink={1}
              color={variant === 'solid' ? 'lightText' : variant !== 'outline' ? 'darkText' : null}
            >
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant='unstyled'
              icon={<CloseIcon size='3' />}
              _icon={{
                color: variant === 'solid' ? 'lightText' : 'darkText',
              }}
              onPress={() => toast.close(id)}
            />
          ) : null}
        </HStack>
        <Text
          px='6'
          color={variant === 'solid' ? 'lightText' : variant !== 'outline' ? 'darkText' : null}
        >
          {description}
        </Text>
      </VStack>
    </Alert>
  );
};

// const Exmaple = () => {
//   const ToastDetails = [
//     {
//       title: 'Account verified',
//       variant: 'solid',
//       description: 'Thanks for signing up with us.',
//       isClosable: true,
//     },
//     {
//       title: 'Something went wrong',
//       variant: 'subtle',
//       description: 'Please create a support ticket from the support page',
//     },
//     {
//       title: 'Network connection restored',
//       variant: 'left-accent',
//       description: 'This is to inform you that your network connectivity is restored',
//       isClosable: true,
//     },
//     {
//       title: 'Invalid email address',
//       variant: 'top-accent',
//       description: 'Please enter a valid email address',
//     },
//     {
//       title: 'Invalid email address',
//       variant: 'outline',
//       description: 'Please enter a valid email address',
//     },
//   ];

//   return (
//     <Center>
//       <VStack space={2}>
//         {ToastDetails.map((item, index) => (
//           <Button
//             key={index}
//             onPress={() =>
//               toast.show({
//                 render: ({ id }) => {
//                   return <ToastAlert id={id} {...item} />;
//                 },
//               })
//             }
//           >
//             {item.variant}
//           </Button>
//         ))}
//       </VStack>
//     </Center>
//   );
// };
