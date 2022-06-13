import { StatusBar } from 'expo-status-bar';
import react, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import Item from './components/item';
import { cats, dogs } from './components/breeds'

export default function App() {
  const [search, setSearch] = useState('')
  const [mode, setMode] = useState(false)
  const data = mode ? dogs : cats
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.kav}
      >
        <StatusBar style='auto'/>
        <View>
          <FlatList
            data={data.filter(item => item.breed.includes(search))}
            keyExtractor={item => item.breed}
            renderItem={({ item, index }) => {
              return <Item data={item} index={index}/>
            }}
          />
        </View>
        <View>
          <TextInput
            style={styles.search}
            placeholder='search'
            onChangeText={setSearch}
            value={search}
          />
        </View>
        <View style={styles.bar}>
          <Button
            onPress={() => setMode(!mode)} 
            title={mode ? "Dogs" : "Cats"}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    fontSize:24,
    padding:10,
    position:'absolute',
    bottom:0,
    width:'100%',
    backgroundColor:'white',
    textAlign: 'center'
  },
  kav: {
    flex:1,
    width:'100%',
    justifyContent: 'center',
  },
  bar:{
    position:'absolute',
    top:5,
    right:0,
  }
})
