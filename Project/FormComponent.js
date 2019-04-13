import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Body, Text, Button } from 'native-base';
import { genericTypeAnnotation } from '@babel/types';

export default class FormComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      const backIncluded = <View style={styles.backButtonContainer}><Button style={styles.backButton}><Text style={styles.buttonText}>Back</Text></Button><Button style={styles.backButton}><Text style={styles.buttonText}>Next</Text></Button></View>;
      const backExcluded = <View style={styles.buttonContainer}><Button style={styles.button}><Text style={styles.buttonText}>Next</Text></Button></View>
      return (
        <View>
          <Text style={styles.header}>ACCOUNT SETUP</Text>
          <Text style={styles.description}>{this.props.desc}</Text>
          <Text style={styles.subheader}>{this.props.subtitle}</Text>
            {this.props.data.map((item, key) => {
              return (
                <ListItem style={styles.checkbox}>
                  <CheckBox checked={true} color='#afafff'/>
                  <Body>
                    <Text style={styles.checkboxText}>{item}</Text>
                  </Body>
                </ListItem>
              );
            })}
          {this.props.backButton ? backIncluded : backExcluded}
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    buttonContainer: {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20
    },
    backButtonContainer: {
      flexDirection: 'row',
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 20
    },
    backButton: {
      backgroundColor: '#afafff',
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'center'
    },
    button: {
      backgroundColor: '#afafff',
      alignSelf: 'center',
      width: '100%',
      justifyContent: 'center'
    },
    buttonText: {
      fontSize: 19,
      alignSelf: 'center'
    },
    checkbox: {
      marginLeft: 40,
      marginRight: 20
    },
    checkboxText: {
      fontSize: 19
    },
    subheader: {
      textAlign: 'left',
      fontSize: 22,
      marginLeft: 20,
      marginTop: 25,
      color: '#afafff'
    },
    description: {
      fontSize: 18,
      textAlign: 'left',
      marginLeft: 20,
      marginTop: 20,
      color: '#a0a0a0'
    },
    header: {
      textAlign: 'left',
      color: '#afafff',
      fontSize: 25,
      marginLeft: 20,
      marginRight: 20,
      paddingTop: 15,
      paddingBottom: 15,
      borderBottomColor: '#afafff',
      borderBottomWidth: 2
    },
  });
  