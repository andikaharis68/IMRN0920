import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const GoInfo = (props) => {
    return (
        <View style={{ marginTop: 16, marginHorizontal: 17 }}>
            <View style={{ height: 15, width: 60 }}>
                <Image source={require('../../../assets/logo/gojek.png')} />
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#1c1c1c', marginTop: 15, marginBottom: 20 }}>Complete your profile</Text>
            <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                <View>
                    <Image source={require('../../../assets/dummy/facebook-connect.png')} />
                </View>
                <View style={{ flex: 1, marginLeft: 16 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#4a4a4a' }}>Connet with facebook</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#4a4a4a', width: '70%' }}>Login faster without verification code</Text>
                </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: "green", paddingHorizontal: 12, paddingVertical: 11, borderRadius: 4, alignSelf: 'flex-end' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'white', textAlign: 'center' }}>CONNECT</Text>
            </TouchableOpacity>
            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }} />
        </View>
    )
}

export default GoInfo