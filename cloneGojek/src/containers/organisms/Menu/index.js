
import React, { Component } from 'react'
import { View } from 'react-native'
import MainFeature from '../../../components/moleculs/MainFeature'

class Menu extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', marginTop: 18, flexWrap: 'wrap' }}>
                {/* menu ===> (flexwrap digunakan untuk konton lanjut ke baris bawah)*/}
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                    <MainFeature tittle="GO-RIDE" img={require('../../../assets/icon/go-ride.png')} />
                    <MainFeature tittle="GO-CAR" img={require('../../../assets/icon/go-car.png')} />
                    <MainFeature tittle="GO-BLUEBIRD" img={require('../../../assets/icon/go-bluebird.png')} />
                    <MainFeature tittle="GO-SEND" img={require('../../../assets/icon/go-send.png')} />
                    <MainFeature tittle="GO-DEALS" img={require('../../../assets/icon/go-deals.png')} />
                    <MainFeature tittle="GO-PULSA" img={require('../../../assets/icon/go-pulsa.png')} />
                    <MainFeature tittle="GO-FOOD" img={require('../../../assets/icon/go-food.png')} />
                    <MainFeature tittle="MORE" img={require('../../../assets/icon/go-more.png')} />
                </View>
            </View>
        )
    }
}

export default Menu