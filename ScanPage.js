import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Image, TextInput} from 'react-native';
import Router from './Router';
import { createRouter, NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import Button from 'react-native-button';
// import Camera from 'react-native-camera';

export default class ScanPage extends Component {

  static route = {
    title: 'scan',
  }

  // takePicture() {
  //   this.camera.capture()
  //     .then((data) => console.log(data))
  //     .catch(err => console.error(err));
  //   }

  render(){
    return(
      <View>
        <Text>Hello World</Text>
        {/* <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera> */}
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     height: Dimensions.get('window').height,
//     width: Dimensions.get('window').width
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     color: '#000',
//     padding: 10,
//     margin: 40
//   }
// });
