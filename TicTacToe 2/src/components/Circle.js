/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Circle extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: '#dd2929',
            alignSelf:'center',
            justifyContent:'center'
          },
        ]}>
        <View style={styles.innerCircle}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top:15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  innerCircle: {
    backgroundColor: '#F5FCFF',
    width: 57,
    height: 57,
    borderRadius: 30,
  },
});
