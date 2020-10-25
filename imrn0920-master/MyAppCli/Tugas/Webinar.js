import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class webinar extends Component {
    state = {count: 0}
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({count: this.state.count+ 1})
        }, 1000)
    }

    render() {
        const {count}= this.state
        return (
            <View style={{alignItems:'center', justifyContent:'center', flex: 1}}>
                <Text style={{fontSize:30}}>{count}</Text>
            </View>
        )
    }
}
