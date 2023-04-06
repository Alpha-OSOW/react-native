import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Premier = ({largeur , hauteur , unite}) => {
   // destructuré le paramètre props pour prendre les propriétés intéressantes
  return (
    <View>
       {/** App => Composant Parent 
       * Premier => Composant Enfant (exécuté dans le composant App)
       * lorsque l'on a exécuté le composant Premier avec des props 
       * 
       * 1 seul composant utilisable avec des valeurs différentes 
       * envoyer des données de <App> => <Premier />
       */}
      <Text>Premier {largeur} {hauteur} {unite} </Text>
       {/** on peut alors utiliser directement les valeurs sans avoir à répéter props.largeur , props.hauteur et props.unite */}
    </View>
  )
}

export default Premier

const styles = StyleSheet.create({})

// créer un nouveau composant Diapositive 
// ce composant contient un composant Image dont largeur est de 100 et hauteur de 100
// l'uri de l'image va être transmis par une props uri du parent (App)

// dans le composant Parent "App" => créer un tableau galerie qui contient les valeurs suivantes :
// ["https://source.unsplash.com/random/200x100" , "https://source.unsplash.com/random/200x101", "https://source.unsplash.com/random/200x102"]

// dans la vue du composant App faire une boucle .map() sur chaque élément du tableau et envoyé l'url comme props du composant Diapositive