import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Functional = () => {
    const [count, setCount]= useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setCount(count+1);
        }, 3000)
    })
    return (
        <View style={{justifyContent:'center', flex:1, alignItems: "center"}}>
            <Text style={{fontSize: 30}}>{count}</Text>
        </View>
    )
}

export default Functional

const styles = StyleSheet.create({})
