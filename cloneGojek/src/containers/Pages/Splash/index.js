import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000)
    })
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Image source={require('../../../assets/logo/gojeks.png')} style={{ width: 300, height: 70 }} />
            </View>
        </View>
    )
}

export default Splash