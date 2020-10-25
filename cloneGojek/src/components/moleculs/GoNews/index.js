import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'

const GoNews = ({ varPress }) => {
    return (
        <View style={{ marginTop: 16, marginHorizontal: 17, borderBottomColor: '#E8E9ED', borderBottomWidth: 1 }}>
            <View style={{ position: 'relative' }}>
                <Image source={require('../../../assets/dummy/sepak-bola.jpg')} style={{ height: 200, width: '100%', borderRadius: 6 }} />
                <View style={{ position: 'absolute', height: '100%', width: '100%', borderRadius: 6, top: 0, left: 0, backgroundColor: 'black', opacity: 0.2 }} />
                <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
                    <Image source={require('../../../assets/logo/white.png')} style={{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
            </View>
            <View style={{ paddingTop: 16, paddingBottom: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>GO-NEWS</Text>
                <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11 }}>Andika Haris selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
                <TouchableOpacity style={{ backgroundColor: "green", paddingHorizontal: 12, paddingVertical: 11, borderRadius: 4, alignSelf: 'flex-end' }} onPress={varPress}>
                    <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'white', textAlign: 'center' }} >READ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GoNews