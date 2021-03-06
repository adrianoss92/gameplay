import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text, Image, View, } from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './style';
import { theme } from '../../global/theme';


export function ButtonAdd({...rest}: RectButtonProps){
  return (
    <RectButton 
      style={styles.container}
    >
      <MaterialCommunityIcons 
        name='plus'
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  )
}