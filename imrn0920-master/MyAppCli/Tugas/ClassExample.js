import React, { Component } from 'react'
import { View, Text, Button} from 'react-native'

export default class ClassExample extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0
        };
    }
    tambah = () =>{
        this.setState({
            count: this.state.count+1,
        });
    }
    kurang = () =>{
        this.setState({
            count: this.state.count-1,
        });
    }
    render() {
        return (
            <View style={{alignItems:'center', justifyContent:'center', flex: 1}}>
                <Button title="tambah" onPress={this.tambah}/>
        <Text style={{fontSize:30}}>{this.state.count}</Text>
                <Button title="Kurang" onPress={this.kurang}/>
            </View>
        )
    }
}
