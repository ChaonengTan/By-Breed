import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Feature from './feature'

export default function Item(props) {
    const { data, index } = props
    const { breed } = data
    const keys = Object.keys(data).filter(key => key!=='breed')
    const average = (keys.reduce((acc, key) => {
        return acc + data[key]
    }, 0) / keys.length).toFixed(1)
	return(
		<View style={styles.container}>
			<Text style={styles.label}>{index}: {breed} {average}</Text>
            {keys.map(key => <Feature key={key} name={key} value={data[key]}/>)}
		</View>
	)
}
const styles = StyleSheet.create({
    container: {
        padding:10,
        margin:1,
    },
    label: {
        fontSize:28
    }
})