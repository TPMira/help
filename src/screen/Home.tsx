import { useState } from 'react';
import { HStack, IconButton, VStack, useTheme, Text, Heading, FlatList, Center } from 'native-base';
import { SignOut, ChatTeardropText } from 'phosphor-react-native';

import  { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';
import { Button } from '../components/Button';

import Logo from '../asset/logooo.svg'

export function Home() {
  
  const [ statusSelected, setStatusSelected ] = useState<'open' | 'closed'>('open');
  const [orders, setOrders] = useState<OrderProps[]>([
    
  
  ]);

  const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg='gray.700'>
        <HStack
            w='full'
            justifyContent='space-between'
            alignItems='center'
            bg='#edce1f'
            pt={12}
            pb={5}
            px={6}
        >
            <Logo  width={120} height={40}/>

            <IconButton
               icon={<SignOut size={26} color={colors.gray[700]}/>} 
            />
        </HStack>

        <VStack flex={1} px={6}>
          <HStack w='full' mt={8} mb={4} justifyContent='space-between' alignItems='center'>
            <Heading color='gray.100'>
              Meus Chamados
            </Heading>
            <Text color='gray.200'>
              3 
            </Text>
          </HStack>

          <HStack space={3} mb={8}>

            <Filter
              type='open'
              title='em andamento'
              onPress={() => setStatusSelected('open')}
              isActive={ statusSelected === 'open' }
            />

            <Filter
              type='closed'
              title='finalizados'
              onPress={() => setStatusSelected('closed')}
              isActive={statusSelected === 'closed'}
            />

          </HStack>
          
          <FlatList
            data={orders}
            keyExtractor={ item => item.id}
            renderItem={({ item }) => <Order data={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
            ListEmptyComponent={() => (
              <Center>
                <ChatTeardropText color={colors.gray[300]} size={40}/>
                <Text color='gray.200' fontSize='xl' mt={6} textAlign='center'>
                  Voce ainda nao possui {'\n'}
                  solicitacoes
                </Text>
              </Center>
            )}
          />

          <Button title='Nova Solicitacao'/>        

        </VStack>

    </VStack>
  );
}