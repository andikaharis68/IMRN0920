import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export class ProjectScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.push('Login')}>
          <Text>Project Screen</Text>
        </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}> */}
        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('About', { name: 'Mukhlis' })}>
          <Text>About Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Skill')}>
          <Text>Skill Screen</Text>
        </TouchableOpacity> */}
      </View>
    )
  }
};

export class AddScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.push('Login')}>
          <Text>Add Screen</Text>
        </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}> */}
        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('About', { name: 'Mukhlis' })}>
          <Text>About Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Skill')}>
          <Text>Skill Screen</Text>
        </TouchableOpacity> */}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
