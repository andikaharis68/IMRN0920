import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import 'react-native-gesture-handler';
import GoBanner from '../../../components/moleculs/GoBanner';
import GoInfo from '../../../components/moleculs/GoInfo';
import GoNews from '../../../components/moleculs/GoNews';
import SearchFeature from '../../../components/moleculs/SearchFeature';
import Gopay from '../../../containers/organisms/Gopay';
import Menu from '../../../containers/organisms/Menu';
import NavBar from '../../../containers/organisms/NavBar';
import ScrollableProducts from '../../../containers/organisms/ScrollableProduct';

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingTop: 15 }}>
                    <SearchFeature />
                    <Gopay />
                    <Menu />
                    <View style={{ backgroundColor: '#F2F2F4', height: 14, marginTop: 20 }} />
                    <GoNews varPress={() => this.props.navigation.navigate('DetailNews')} />
                    <GoInfo />
                    <GoBanner varPress={() => this.props.navigation.navigate('GetVoucher')} />
                    <ScrollableProducts />
                </ScrollView>
                <NavBar />
            </View >
        )
    }
}

export default Home