import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
} from 'react-native';
import toyota from './assets/src/img/toyota.jpg';
import mazda from './assets/src/img/mazda.jpg';
import mitsubishi from './assets/src/img/mitsubishi.jpg';

const DATA = [
  {
    id: '1',
    title: 'Toyota',
    // src: require('./src/img/toyota.jpg'),
    src: toyota,
  },
  {
    id: '2',
    title: 'Mazda',
    // src: require('./src/img/mazda.jpg'),
    src: mazda,
  },
  {
    id: '3',
    title: 'Mitsubishi',
    // src: require('./src/img/mitsubishi.jpg'),
    src: mitsubishi,
  },
];

const Item = ({name,img}) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      {name}
    </Text>
    <Image style={styles.img} source={img} />
  </View>
);

const Cars = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const renderItem = ({item}) => (
    <Item name ={item.title} img = {item.src}/>
  );

  return (
    // <View style ={{flex:1,justifyContent:"center",alignItems:"center"}}>
    //   <Text>Hola Mundo</Text>
    // </View>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item:{
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title:{
    fontSize: 32,
    color: '#000000',
  },
  img:{
    width: 200,
    height: 125,
    borderWidth: 2,
    borderColor: '#d35647',
    resizeMode: 'contain',
    margin: 8,
  },
});

export default Cars;

