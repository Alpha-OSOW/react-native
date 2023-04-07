import { StyleSheet, Text, View , Button,} from 'react-native'
import React, { useEffect } from 'react'

const Update = () => {
    const [nb, setNb] = useState(0)

    useEffect(function(){
        console.log("le composant Update a sa local nb modifié ");
    }, [ nb ])
  return (
    <View>
      <Text>Update</Text>
      <Button onPress={()=> setNb (nb + a)} title={JSON.stringify(nb)}/>
    </View>
  )
}

export default Update

const styles = StyleSheet.create({})