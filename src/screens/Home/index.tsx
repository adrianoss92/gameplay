import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native'; 

import { Appointment } from '../../components/Appointment';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';

import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';


export function Home(){
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails');
  }
  
  const appointments = [
    {
      id:'1',
      guild:{
        id:'1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id:'2',
      guild:{
        id:'1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id:'3',
      guild:{
        id:'1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
  ]

  function handleCategorySelect(categoryId: string){

    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return(
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader 
          title="Patidas agendadas"
          subtitle="Total 6"
        />
        <FlatList 
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Appointment 
              data={item}
              onPress={handleAppointmentDetails}
            />
          )}
          ItemSeparatorComponent={()=> <ListDivider />}
          style={styles.matches} 
          showsVerticalScrollIndicator = {false}
        />

      </View>

    </Background>
  );
}