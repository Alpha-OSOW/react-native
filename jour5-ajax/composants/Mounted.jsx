import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Mounted = () => {
    
    useEffect(function(){
        // le traitement ici n'est exécuté que 1 fois au moment de l'afficahge du composant
        console.log("le composant Mounted est monté");
    }, [])

  return (
    <View>
      <Text>Mounted</Text>
    </View>
  )
}

export default Mounted

const styles = StyleSheet.create({})