import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Login extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
      <Text>{this.props.hi}</Text>
    </View>
  );
  }

}
