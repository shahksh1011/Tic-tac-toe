/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Cross extends Component {
  render() {
    return (
      <View
        style={[
          styles.container
        ]}>
        <View
          style={[
            styles.line,
            {
              transform: [{rotate: '45deg'}],
              backgroundColor: '#2b81de',
            },
          ]}
        />
        <View
          style={[
            styles.line,
            {
              transform: [{rotate: '135deg'}],
              backgroundColor: '#2b81de',
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top:15,
    left:15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
  },
  line: {
    position: 'absolute',
    width: 8,
    height: 60,
  },
});
