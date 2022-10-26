import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()


async function getPokemonData(){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`) //Get data
  const pokemonData = await response.json() //JSONify
  console.log(pokemonData.name)
  const pokeName = String(pokemonData.name)
  return pokeName
}

const FeedScreen = () => {

  const nav = useNavigation();

  function handleNavigation(){
    nav.navigate('Catalog')
  }
  console.log(getPokemonData())
  return(
    <View style={styles.layout}>
      <Text style={styles.title}>{getPokemonData()}</Text>
      <Button title="Go to Catalog" onPress={handleNavigation}/>
    </View>
  )
}

const CatalogScreen = () => {

  const nav = useNavigation();

  function handleNavigation(){
    nav.navigate('Feed')
  }

  return(
    <View style={styles.layout}>
      <Text style={styles.title}>Catalog Screen</Text>
      <Image source={{uri: "https://api.lorem.space/image/album"}} style={styles.image} />
      <Button title="Back to Feed" onPress={handleNavigation}/>
    </View>
  )
}

const GalleryScreen = () => {
  return(
    <View style={styles.layout}>
      <Text style={styles.title}>Catalog Screen</Text>
      <ScrollView>
        <Image source={{uri: "https://api.lorem.space/image/album"}} style={styles.image} />
        <Image source={{uri: "https://api.lorem.space/image/album"}} style={styles.image} />
        <Image source={{uri: "https://api.lorem.space/image/album"}} style={styles.image} />
        <Image source={{uri: "https://api.lorem.space/image/album"}} style={styles.image} />
      </ScrollView>
      
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#07A0C3',
        tabBarInactiveTintColor: '#24434A',
        headerStyle: {backgroundColor: '#07A0C3'},
        headerTintColor: 'white',
        headerTitleStyle: {fontWeight: 'bold'}
      }}>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Catalog" component={CatalogScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  title: {
    fontSize: 32,
    marginBottom: 60
  },
  image: {
    resizeMode: 'contain', 
    width: 400,
    height: 400
  }
});
