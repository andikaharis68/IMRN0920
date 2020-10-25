import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import GopayFeature from '../../../components/moleculs/GopayFeature'

class Gopay extends Component {
    render() {
        return (
            <View style={{ marginTop: 8, marginHorizontal: 17 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2c5fb8', padding: 14, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                    <Image source={require('../../../assets/icon/gopay.png')} />
                    <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>Rp 500.000</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                    <GopayFeature tittle='Pay' img={require('../../../assets/icon/pay.png')} />
                    <GopayFeature tittle='Nearby' img={require('../../../assets/icon/nearby.png')} />
                    <GopayFeature tittle='Top Up' img={require('../../../assets/icon/topup.png')} />
                    <GopayFeature tittle='More' img={require('../../../assets/icon/more.png')} />
                </View >
            </View >
        )
    }
}

export default Gopay