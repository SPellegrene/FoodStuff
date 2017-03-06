import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Image, TextInput} from 'react-native';
import Router from './Router';
import { createRouter, NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import Button from 'react-native-button';
import axios from 'axios';

export default class FoodDetail extends Component {

  constructor(props) {
      super(props);
      this.state = {
        info: []
      }
    }

  static route = {
    title: 'food',
  }

  comonentDidMount(){
    this.getData();
  }

  getData() {
    axios.get("https://us.openfoodfacts.org/brand/kraft.json")
    .then((response)=> {
      this.setState({
        info:response.data
      })
      console.log(this.state.info);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render(){
    return(
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }
}
