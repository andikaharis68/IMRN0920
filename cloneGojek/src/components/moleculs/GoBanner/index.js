import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const GoBanner = ({ varPress }) => {
    return (
        <View style={{ marginTop: 16, marginHorizontal: 17 }}>
            <View style={{ position: 'relative' }}>
                <Image source={require('../../../assets/dummy/food-banner.jpg')} style={{ height: 200, width: '100%', borderRadius: 6 }} />
                <View style={{ position: 'absolute', height: '100%', width: '100%', borderRadius: 6, top: 0, left: 0, backgroundColor: 'black', opacity: 0.15 }} />
                <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
                    <Image source={require('../../../assets/logo/white.png')} style={{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
                <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16 }}>
                    <View >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 15 }}>Free GO-FOOD voucher</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: 'white' }}>Quick, before they run out!</Text>
                    </View>
                    <View style={{ flex: 1, paddingLeft: 12 }}>
                        <TouchableOpacity style={{ backgroundColor: "green", paddingHorizontal: 12, paddingVertical: 11, borderRadius: 4, alignSelf: 'stretch' }} onPress={varPress}>
                            <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'white', textAlign: 'center' }}>GET-VOUCHER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }} />
        </View>
    )
}

export default GoBanner