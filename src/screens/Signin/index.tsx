import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image
} from 'react-native';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';
import { Background } from '../../components/Background';




export function SignIn(){

  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate('Home');
  }

  // const [text, setText] = useState('');
  return (
    <Background>

      <View style={styles.container}>

        <Image 
          source={IllustrationImg} 
          style={styles.image} 
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}
            e organize suas{'\n'}
            jogatinas
          </Text>

          <Text style={styles.subTitle}>
            Crie Grupos para jogar seus games{'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon 
            title="Entra com Discord"
            onPress={handleSignIn}
          />
        </View>  
      </View>
    </Background>

  );
}