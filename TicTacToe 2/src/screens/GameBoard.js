/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class GameBoard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.board}>
          <View style={styles.line} />
          <View
            style={[
              styles.line,
              {
                width: 3,
                height: 306,
                transform: [{translateX: 200}],
              },
            ]}
          />
          <View
            style={[
              styles.line,
              {
                width: 306,
                height: 3,
                transform: [{translateY: 100}],
              },
            ]}
          />
          <View
            style={[
              styles.line,
              {
                width: 306,
                height: 3,
                transform: [{translateY: 200}],
              },
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
    board: {
      width: 312,
      height: 312,
      borderWidth: 3,
      borderColor: '#000'
    },
    line: {
      position: 'absolute',
      width: 3,
      height: 306,
      backgroundColor: '#000',
      transform: [
        {translateX: 100}
      ]
    }
  })

const styles1 = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  actionButtonContainer: {
    height: 64,
    width: 200,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default GameBoard;
