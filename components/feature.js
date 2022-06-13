import react from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default function Feature(props){
    const { name, value } = props

    // stars
    let stars=''
    for (let i=0; i<value; i+=1){ stars+='⭐︎' }
    
    return(
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{stars}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})