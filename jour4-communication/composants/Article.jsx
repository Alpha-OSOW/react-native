{/* <Text>titre<Text>
<Text>un peu de contenu<Text>
<View>
    <Button>
    <Text>nb</Text>
</View>

le titre / le contenu / le nombre sont envoyés comme valeur depuis les props depuis le parent 

------------------

Dans App.js 

créer un state data et qui contient la collection suivante  
[ 
    {id : 1 , titre : "article 1" , contenu : "lorem ipsum 1" , nb : 0},
    {id : 2 , titre : "article 2" , contenu : "lorem ipsum 2" , nb : 2},
    {id : 3 , titre : "article 3" , contenu : "lorem ipsum 3" , nb : 10}
]

parcourir chaque élément de data via une boucle map () et afficher chaque <Article> avec les données associées 

si vous cliquez sur le bouton du 1er article => augmenter de + 1 le nombre de chiffre 0 + 1
si vous cliquez sur le bouton du 2eme article => augmenter de + 1 le nombre de chiffre 2 + 1
si vous cliquez sur le bouton du 3eme article => augmenter de + 1 le nombre de chiffre 10 + 1 */}

import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

const Article = ({id , titre , contenu , nb , augmenter}) => {
  return (
    <View style={styles.article}>
      <Text>{titre}</Text>
      <Text>{contenu}</Text>
      <View style={styles.likeBox}>
        <Button onPress={() => augmenter(id)} title="+" />
        <Text>{nb}</Text>
      </View>
    </View>
  )
}

export default Article

const styles = StyleSheet.create({
    article : { paddingHorizontal : 10 , marginVertical : 20 },
    likeBox : { flexDirection : "row" , alignItems : "baseline"}
})