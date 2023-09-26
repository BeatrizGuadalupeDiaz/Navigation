import React from 'react'
import { View, Text, Button } from 'react-native'
//styles
import { stylesGlobal } from '../styles/global'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
  return (
    <View style={stylesGlobal.screenContainer}>
        <Text style={stylesGlobal.title}>Home</Text>
        <Button 
         title='Go to Settings'
         onPress={() => navigation.navigate('Settings')}
        />
        <Button 
         title='Envio de parametro a Profile'
         onPress={() => navigation.jumpTo('Profile', {user: 'Sergio'})}
        />
    </View>
  )
}

export default Home