import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Max = () => {
    const [ count, setCount] = useState(0);
  
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex: 1}}>           
          <Button onPress={()=> setCount(count+1)} title="tembah"/>
            <Text style={{fontSize: 30}}>{count}</Text>
          <Button onPress={()=> setCount(count-1)} title="kurang"/>
            
        </View>
    )
}

export default Max

const styles = StyleSheet.create({})
