import React from 'react'
import { View, Text } from 'react-native'
import { stylesGlobal } from '../styles/global'

const News = () => {
  return (
    <View style={stylesGlobal.screenContainer}>
        <Text style={stylesGlobal.title}>News</Text>
    </View>
  )
}

export default News