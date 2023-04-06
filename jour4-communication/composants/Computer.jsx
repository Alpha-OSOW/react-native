import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Computer = () => {
  return (
    <View>
        <Text>Computer</Text>
        <View style={{flexDirection : "row"}}>
            <Text>0</Text>
            <Button Title="+" onPress={() => {}}/>
       </View>
    </View>
  )
}

export default Computer

const styles = StyleSheet.create({})