import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import ScrollableItem from '../../../components/moleculs/ScrollableItem'

class ScrollableProducts extends Component {
    render() {
        return (
            <View style={{ marginTop: 16 }}>
                <View style={{ height: 15, width: 60, marginHorizontal: 17 }}>
                    <Image source={require('../../../assets/logo/go-food.png')} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, marginHorizontal: 17 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#1c1c1c' }}>Nearby Restaurant</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#61a756' }}>See All</Text>
                </View>
                <ScrollView horizontal style={{ flexDirection: 'row', paddingLeft: 16 }}>
                    <ScrollableItem tittle='KFC Aoen Mall' img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                    <ScrollableItem tittle='Bakmi GM Aoen Mall' img={require('../../../assets/dummy/go-food-gm.jpg')} />
                    <ScrollableItem tittle='Martabak Orins' img={require('../../../assets/dummy/go-food-orins.jpg')} />
                    <ScrollableItem tittle='Martabak Banka' img={require('../../../assets/dummy/go-food-banka.jpg')} />
                    <ScrollableItem tittle='Ayam Bakar Pak Boss' img={require('../../../assets/dummy/go-food-pak-boss.jpg')} />
                </ScrollView>
                <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginHorizontal: 17 }} />
            </View>
        )
    }
}

export default ScrollableProducts