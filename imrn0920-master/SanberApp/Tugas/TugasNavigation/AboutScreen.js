import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default class AboutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'awal'
    }
  }

  updateStatus(status) {
    this.setState({ status })
  }

  render() {
    // console.log(this.props.route.params)
    console.log(this.state.status)
    return (
      <View style={styles.container}>
        <Text>About Screen</Text>
        {/* <Button title='test button' onPress={() => this.updateStatus([100, 99, 99, 76])} /> */}
        {/* <Text>Halo<Text style={{ fontWeight: 'bold' }}> {this.props.route.params.name}</Text>, Selamat Datang di Sanbercode</Text> */}
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
