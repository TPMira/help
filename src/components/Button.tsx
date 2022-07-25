import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';


type Props = IButtonProps & {
    title: string;
}

export function Button( { title, ...rest }: Props) {
  return (
    <ButtonNativeBase
        bg='#edce1f'
        h={14}
        fontSize='sm'
        rounded='sm' 
        _pressed={
            {
                bg: '#af59cf'
            }
        }
        {...rest}
    >
        <Heading fontSize='sm'>
            {title}
        </Heading>
    </ButtonNativeBase>
  );
}