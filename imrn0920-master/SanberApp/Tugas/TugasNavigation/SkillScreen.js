import React from 'react';
import { TouchableNativeFeedback, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import skillData from './skillData.js'

export default class SkillScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 0
    }
  }

  render() {
    let skillList = skillData
    console.log(this.props.route)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SkillScreen</Text>
        {/* <Image
          source={require('./images/logo.png')}
          // style={{}}
          resizeMode='contain'
        />

        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons name='account-circle' size={20} color='#3EC6FF' />
          <View>
            <Text>Hai,</Text>
            <Text>Mukhlis Hanafi</Text>
          </View>
        </View>

        <View>
          <Text>SKILL</Text>
          <View style={{ height: 2, backgroundColor: '#3EC6FF' }} />
        </View>

        <ScrollView horizontal>
          <TouchableOpacity>
            <Text>Library / Framework</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Bahasa Pemrograman</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Teknologi</Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableNativeFeedback style={{ backgroundColor: 'red' }}>
          <View style={{ padding: 15 }}>
            <Text>Test Button</Text>
          </View>
        </TouchableNativeFeedback>

        <View>
          <FlatList
            data={skillList}
            keyExtractor={skill => skill.id.toString()}
            renderItem={({ item }) => {
              // let icon = true ? require(item.logoUrl) : require(item.logoUrl)
              return (
                <View>
                  <Text>{item.categoryName}</Text>
                  <Image source={item.logoUrl} style={{ height: 20, width: 100 }} />
                </View>
              )
            }}
          />
        </View> */}

      </View>
    )
  }
}