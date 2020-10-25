import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({title}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container:{
        width: '20%',
        height: '30%',
        backgroundColor:'orange'
    }

})
