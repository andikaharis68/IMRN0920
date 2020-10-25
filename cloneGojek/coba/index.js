import React, { Component } from 'react';
import { ScrollView, View, TextInput, Image } from 'react-native';
import 'react-native-gesture-handler';

class Coba extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingTop: 15 }}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 17 }}>
                        <View style={{ position: 'relative', flex: 1 }}>
                            <TextInput placeholder='What do you want to eat?' style={{ height: 40, borderWidth: 1, borderRadius: 25, borderColor: '#e8e8e8', fontSize: 13, paddingLeft: 45, paddingRight: 20, marginRight: 18 }} />
                            <Image source={require('../../../assets/icon/search.png')} style={{ position: 'absolute', top: 6, left: 12 }} />
                        </View>
                        <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../../assets/icon/promo.png')} />
                        </View>
                    </View>

                    <Gopay />
                    <Menu />
                    <View style={{ backgroundColor: '#F2F2F4', height: 14, marginTop: 20 }} />
                    <GoNews />
                    <GoInfo />
                    <GoBanner />
                    <ScrollableProducts />
                </ScrollView>
                <NavBar />
            </View >
        )
    }
}

export default Coba