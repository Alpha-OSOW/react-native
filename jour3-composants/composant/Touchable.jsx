import { StyleSheet,
         Text,
         View ,
         Image,
        TouchableHighlight,
        TouchableNativeFeedback,  // ne fonctionne que les téléphones android 
        TouchableOpacity,
        TouchableWithoutFeedback
        // site pour image : 
    } from 'react-native'
import React from 'react'

const Touchable = () => {
  return (
    <View style={styles.box}> 
      <Text>Touchables</Text>
      <View style={{flexDirection:"row", justifyContent: "space-around"}}>
                <TouchableOpacity styles={styles.touchableOpacity}>
                    <Image source ={{ uri :  "https://via.placeholder.com/50x50", width:50, height:50}}/>
                </TouchableOpacity>

                <TouchableNativeFeedback style={{padding :20}} background={TouchableNativeFeedback.Ripple(
                    "#000",
                    "#fff",
                    
                )} onPress={() =>{}}>

                <Image source ={{ uri :  "https://via.placeholder.com/50x50", width:50, height:50}}/>
                </TouchableNativeFeedback>

                <TouchableHighlight style={ StyleSheet.touchableOpacity } activeOpacity={0.6} underlayColor={"#DDDDDD"}
                onPress={()=>{}}>
                <Image source ={{ uri :  "https://via.placeholder.com/50x50", width:50, height:50}}/>
                </TouchableHighlight>
                <TouchableWithoutFeedback onPress={()=> {console.warn("no  feed back")}} style={styles.touchableOpacity}>
                <Image source ={{ uri :  "https://via.placeholder.com/50x50", width:50, height:50}}/>
                </TouchableWithoutFeedback>

      </View>
    </View>
  )
}

export default Touchable

const styles = StyleSheet.create({
    box: { paddingHorizontal : 10 },
    touchableOpacity : { width: 100, height: 100, backgroundColor : "#eee", justifyContent : "center", alignItems :"center"}
})
      

