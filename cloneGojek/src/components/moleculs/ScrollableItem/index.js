import React from 'react'
import { View, Text, Image } from 'react-native'

const ScrollableItem = (props) => {
    return (
        <View style={{ marginRight: 16, alignItems: 'center' }}>
            <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image source={props.img} style={{ height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }} />
            </View>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 5 }}>{props.tittle}</Text>
        </View>
    )
}

export default ScrollableItem