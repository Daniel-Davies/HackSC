/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FormComponent from './FormComponent';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   data: ['Multiple Sclerosis', 'Everything Else'],
    //   desc: "Looks like you're new to App! Get started by filling out some basic medical data below.",
    //   subtitle: 'Basic Diagnoses',
    //   backButton: false
    // }

    this.state = {
      data: ['Cognitive Difficulties', 'Vision Problems', 'Fatigue', 'Heat Sensitivity', 
        'Bowel and Bladder Problems', 'Sexual Issues', 'Pain', 'Motor Problems'],
      desc: 'Please specify the symptoms you are experiencing so we can create a more individualized match for you.',
      subtitle: 'Multiple Sclerosis Symptoms',
      backButton: true
    }
    
  }

  render() {
    return (
      <View>
        <FormComponent data= {this.state.data} desc={this.state.desc} subtitle={this.state.subtitle} backButton={this.state.backButton}></FormComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
