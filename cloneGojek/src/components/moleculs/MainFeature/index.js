import React from 'react'
import { View, Text, Image } from 'react-native'

const MainFeature = (props) => {
    return (
        <View style={{ width: `${100 / 4}%`, alignItems: 'center', marginBottom: 18 }}>
            <View style={{ width: 58, height: 58, borderRadius: 18, borderWidth: 1, borderColor: '#EFEFEF', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={props.img} />
            </View>
            <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>{props.tittle}</Text>
        </View>
    )
}

export default MainFeature