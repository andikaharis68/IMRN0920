
import React from 'react';
import { Image, View } from 'react-native';

const GetVoucher = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Image source={require('../../../assets/dummy/voucher.png')} style={{ width: '100%', height: 270 }} />
            </View>
        </View>
    )
}

export default GetVoucher