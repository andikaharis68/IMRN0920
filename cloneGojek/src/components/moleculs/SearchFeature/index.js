import React from 'react'
import { View, TextInput, Image } from 'react-native'

const SearchFeature = (props) => {
    return (
        <View style={{ flexDirection: 'row', marginHorizontal: 17 }}>
            <View style={{ position: 'relative', flex: 1 }}>
                <TextInput placeholder='What do you want to eat?' style={{ height: 40, borderWidth: 1, borderRadius: 25, borderColor: '#e8e8e8', fontSize: 13, paddingLeft: 45, paddingRight: 20, marginRight: 18 }} />
                <Image source={require('../../../assets/icon/search.png')} style={{ position: 'absolute', top: 6, left: 12 }} />
            </View>
            <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../../assets/icon/promo.png')} />
            </View>
        </View>
    )
}

export default SearchFeature