// créer un nouveau composant Diapositive 
// ce composant contient un composant Image dont largeur est de 100 et hauteur de 100
// l'uri de l'image va être transmis par une props uri du parent (App)

// dans le composant Parent "App" => créer un tableau galerie qui contient les valeurs suivantes :
// ["https://source.unsplash.com/random/200x100" , "https://source.unsplash.com/random/200x101", "https://source.unsplash.com/random/200x102"]

// dans la vue du composant App faire une boucle .map() sur chaque élément du tableau et envoyé l'url comme props du composant Diapositive
// rnfes
import { Image } from 'react-native'

const Diapositive = props => <Image source={{ uri : props.url , width: 100 , height : 100  }} />

export default Diapositive