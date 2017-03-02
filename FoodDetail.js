import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Image, TextInput} from 'react-native';
import Router from './Router';
import { createRouter, NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import Button from 'react-native-button';


export default class FoodDetail extends Component {

  static route = {
    title: 'food',
  }

  render(){
    return(
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }
}
