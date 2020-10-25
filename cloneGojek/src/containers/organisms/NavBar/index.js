
import React, { Component } from 'react'
import { View } from 'react-native'
import NavBarIcon from '../../../components/moleculs/NavBarIcon'

class NavBar extends Component {
    render() {
        return (
            < View style={{ height: 54, flexDirection: 'row' }}>
                <NavBarIcon tittle='Home' img={require('../../../assets/icon/home-active.png')} active />
                <NavBarIcon tittle='Orders' img={require('../../../assets/icon/order.png')} />
                <NavBarIcon tittle='Help' img={require('../../../assets/icon/help.png')} />
                <NavBarIcon tittle='Inbox' img={require('../../../assets/icon/inbox.png')} />
                <NavBarIcon tittle='Account' img={require('../../../assets/icon/account.png')} />
            </ View >
        )
    }
}

export default NavBar