import { useState } from 'react'
import { VStack, Heading, Icon, useTheme } from 'native-base';

import { Envelope, Key } from 'phosphor-react-native';

import Logo from '../asset/logooo.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function SignIn() {

    const [name, setName] = useState('');
    const [ password, setPassword] = useState('');

    const { colors } = useTheme();

    return(
        <VStack flex={1} alignItems='center' bg='#edce1f' px={8} pt={24} >
            <Logo  width={120} height={40}/>
            <Heading color='black' fontSize='xl' mt={20} mb={6}>
                Acesse sua conta 
            </Heading>

            <Input 
                placeholder='E-mail'
                mb={4}
                InputLeftElement={<Icon as={ <Envelope color={colors.gray[300]} /> } ml={4} />}
                onChangeText={setName}
            />
            <Input
                mb={8}
                placeholder='Senha'
                InputLeftElement={<Icon as={ <Key color={colors.gray[300]} /> } ml={4} />}
                secureTextEntry
            />

            <Button title='Entrar' w='full'/>

        </VStack>
    )
}