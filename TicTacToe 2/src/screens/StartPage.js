import React, {Component} from 'react';
import {
  Text,
  Image,
  Animated,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import RNExitApp from 'react-native-exit-app';
import {connect} from 'react-redux';
import {START_GAME} from '../redux/actions';

class StartPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  //
  //<Animated.Image
  //source={require("../assets/holeMask.png")}
  //style={styles.holeMaskImage}
  ///>

  render() {
    return (
      <View style={styles.pageContainer}>
        <Text style={styles.pageHeaderFont}>Tic Tac Toe</Text>
        <TouchableOpacity
          style={styles.actionButtonContainer}
          activeOpacity={0.6}
          onPress={() => {
            this.props.navigation.navigate('GamePlayPage');
            this.props.dispatch(START_GAME());
          }}>
          <Text style={styles.actionButtonText}>Start Game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButtonContainer}
          activeOpacity={0.7}
          onPress={() => {
            RNExitApp.exitApp();
          }}>
          <Text style={styles.actionButtonText}>Exit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(StartPage);

const styles = StyleSheet.create({
  pageContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  pageHeaderFont: {
    fontWeight: '700',
    fontSize: 30,
    color: '#000',
    alignSelf: 'center',
    marginBottom: 15,
  },
  imageContainer: {
    backgroundColor: 'transparent',
    height: 160,
    width: 170,
    marginBottom: 15,
  },
  holeImage: {
    position: 'absolute',
    resizeMode: 'center',
    height: 80,
    width: 170,
    left: 0,
    bottom: -25,
    zIndex: 10,
  },
  holeMaskImage: {
    position: 'absolute',
    resizeMode: 'cover',
    height: 30,
    width: 150,
    bottom: 0,
    left: 5,
    zIndex: 100,
  },
  moleImage: {
    position: 'absolute',
    resizeMode: 'cover',
    height: 250,
    width: 150,
    bottom: -100,
    left: 10,
    zIndex: 15,
  },
  actionButtonContainer: {
    height: 64,
    width: 200,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
  },
  actionButtonImage: {
    resizeMode: 'contain',
    position: 'absolute',
    height: 64,
    width: 200,
    top: 0,
    left: 0,
  },
  actionButtonText: {
    fontWeight: '700',
    fontSize: 22,
    color: '#000',
    paddingBottom: 10,
    alignSelf: 'center',
  },
  highScoreContainer: {
    position: 'absolute',
    bottom: 20,
    padding: 5,
    backgroundColor: '#47d147',
    borderRadius: 5,
  },
  highScoreText: {fontSize: 14, fontWeight: '500', color: '#000'},
});
