import React, { useEffect, useState } from "react";
import { SafeAreaView,Text, Button, FlatList, Switch, View, StyleSheet } from "react-native";
import music_data from './music-data.json'
import SongCard from './components/SongCard'
import SearchBar from "./components/SearchBar";




const App = () =>{

  const [list, setList] = useState(music_data)


  const renderSong = ({item}) => <SongCard song={item}/>
  const renderSeperator = () => <View style={styles.seperator}/>

  const handleSearch = text => { 

      const filteredList = music_data.filter(song => {
            const searcedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();

            return currentTitle.indexOf(searcedText) > -1;

      })

        setList(filteredList)
  } 



return(

<SafeAreaView style={styles.container}>
    <View style={styles.container}>
        <SearchBar  onSearch = {handleSearch}/>
        <FlatList 
        data = {list}
        renderItem={renderSong}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeperator}

        />
    </View>
</SafeAreaView>

)
}

export default App;



const styles = StyleSheet.create({
  container : {flex :1},
  seperator: {
    borderWidth : 1,
    borderColor: '#e0e0e0'

  }
})