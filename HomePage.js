import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Image, TextInput} from 'react-native';
import Router from './Router';
import { createRouter, NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import Button from 'react-native-button';

export default class HomePage extends Component {

  static route = {
    title: 'home',
  }

  goToFood() {
    this.props.navigator.push(Router.getRoute('food'));
  }

  goToScan() {
    this.props.navigator.push(Router.getRoute('scan'));
  }

  render(){
    return(
      <View style={styles.mainConatiner}>
        <View style={styles.logoCont}>
          <Image className="Logo1"
            source={require('./src/images/001-smile.png')}
            style={styles.logo1}
          />
          <Image className="Logo2"
            source={require('./src/images/002-watermelon.png')}
            style={styles.logo2}
          />
          </View>
          <Text style={styles.title}>Food Stuff</Text>
          <View>
            <TextInput
              placeholder= 'enter food here'
              style={styles.textInput}
              // value={this.state.value}
              />
          </View>
          <View>
            <Button
              style={styles.buttonStyling}
              styleDisabled={{color: 'red'}}
              onPress={this.goToFood.bind(this)}>Search
            </Button>
          </View>
          <Text style={styles.title1}>Or</Text>
          <View>
            <Button
              style={styles.buttonStyling}
              styleDisabled={{color: 'red'}}
              onPress={this.goToScan.bind(this)}>Scan
            </Button>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  mainConatiner: {
    backgroundColor: '#C3FFC7',
    flexDirection: 'column',
    alignItems: 'center',
     ...StyleSheet.absoluteFillObject
  },

  logoCont: {
    alignItems:'center'
  },

  logo1: {
    height:60,
    width: 60,
    marginTop: 25,
    position: 'absolute',
  },

  logo2: {
    height:60,
    width: 60,
    marginTop: 43,
  },

  title: {
    fontSize: 36,
    fontWeight:'200',
    marginTop: 15
  },

  title1: {
    fontSize: 36,
    fontWeight:'200',
    marginTop: 35
  },

  textInput: {
    height:40,
    borderRadius: 5,
    width:170,
    marginTop: 25,
    textAlign: 'center',
    backgroundColor:'white'
  },

  buttonStyling: {
    textAlign:'center',
    fontSize:32,
    color:'white',
    fontWeight: '200',
    backgroundColor: '#AA90FF',
    width:120,
    height:60,
    padding:10,
    marginTop:45,
    shadowColor:'black',
    shadowOffset:{
      width:1,
      height:3
    },
    shadowRadius: 5,
    shadowOpacity: .3
  }
})
