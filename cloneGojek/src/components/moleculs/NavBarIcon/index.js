import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const NavBarIcon = (props) => {
    return (
        <View style={styles.Nav}>
            <Image style={styles.iconNav} source={props.img} />
            <Text style={{ fontSize: 10, marginTop: 4, color: props.active ? '#43ab4a' : '#545454' }}>{props.tittle}</Text>
        </View>
    )
}

export default NavBarIcon

const styles = StyleSheet.create({
    Nav: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 10,
        color: 'red',
        backgroundColor: 'white',
    },
    iconNav: {
        height: 26,
        width: 26,
    },
})