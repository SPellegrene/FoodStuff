
import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View} from 'react-native';
import Router from './Router';
import { createRouter, NavigationProvider, StackNavigation } from '@exponent/ex-navigation';

export default class FoodStuff extends Component {
  render() {
      return (
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute={Router.getRoute('home')} />
        </NavigationProvider>
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

AppRegistry.registerComponent('FoodStuff', () => FoodStuff);
