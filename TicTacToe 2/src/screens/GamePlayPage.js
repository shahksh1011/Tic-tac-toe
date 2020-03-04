import React, {Component} from 'react';
import {View, Text, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import BlockComponent from '../components/Block';
import {START_GAME, END_GAME, RESET_GAME} from '../redux/actions';

class GamePlayPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.startGame();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.gameStatus !== undefined && nextProps.gameStatus !== ""){
        Alert.alert(
          nextProps.gameStatus,
          'Game ended',
          [{text: 'OK', onPress: () => {
            this.props.navigation.navigate('StartPage');
            this.props.dispatch(RESET_GAME());
          }}],
          {cancelable: false},
        );
    }
  }

  render() {
    let curX = this.props.currentPlayer === 'O'? 0.0: 0.8
    let curO = this.props.currentPlayer === 'X'? 0.0: 0.8
    return (
      <View style={styles.pageContainer}>
        <View style={styles.gamePlayContainer}>
        <View style={{ flexDirection: 'row',
            justifyContent: 'center',
              alignItems: 'baseline',}}>
              <View style={{ flexDirection: 'column',
                  justifyContent: 'center',
                    alignItems: 'baseline',}}>
                    <Text> Player 1: X     </Text>
                    <Text style= {{color: "#3c9c69", textAlign: 'center',
                    opacity: curX,
                   }}>     Your Turn</Text>
              </View>
              <View style={{ flexDirection: 'column',
                  justifyContent: 'center',
                    alignItems: 'baseline',}}>
                    <Text>      Player 2: O</Text>
                    <Text style= {{color: "#3c9c69", textAlign: 'center',
                    opacity: curO,
                   }}>     Your Turn</Text>
              </View>
        </View>
          <View style={styles.container}>
            <View style={styles.board}>
              <View style={styles.line} />

              <BlockComponent position={1} />
              <BlockComponent
                position={2}
                customStyle={[{top: 0, left: 102}]}
              />
              <BlockComponent
                position={3}
                customStyle={[{top: 0, left: 205}]}
              />
              <View
                style={[
                  styles.line,
                  {
                    width: 1,
                    height: 306,
                    transform: [{translateX: 200}],
                  },
                ]}
              />
              <BlockComponent position={4} customStyle={[{top: 100}]} />
              <BlockComponent
                position={5}
                customStyle={[{top: 100, left: 102}]}
              />
              <BlockComponent
                position={6}
                customStyle={[{top: 100, left: 205}]}
              />
              <View
                style={[
                  styles.line,
                  {
                    width: 306,
                    height: 1,
                    transform: [{translateY: 100}],
                  },
                ]}
              />
              <BlockComponent position={7} customStyle={[{top: 204}]} />
              <BlockComponent
                position={8}
                customStyle={[{top: 204, left: 102}]}
              />
              <BlockComponent
                position={9}
                customStyle={[{top: 204, left: 205}]}
              />
              <View
                style={[
                  styles.line,
                  {
                    width: 306,
                    height: 1,
                    transform: [{translateY: 200}],
                  },
                ]}
              />
            </View>
          </View>
        </View>

      </View>
    );
  }

  goToStartPage = () => {
    this.props.dispatch(RESET_GAME());
    this.props.navigation.navigate('StartPage');
  };

  startGame = () => {};
}

mapStateToProps = state => {
  return {moves: state.moves, gameStatus: state.gameStatus, currentPlayer: state.currentPlayer};
};

export default connect(mapStateToProps)(GamePlayPage);

const styles = StyleSheet.create({
  pageContainer: {flex: 1, backgroundColor: '#f4f4f4'},
  topHeaderButtonContainer: {
    position: 'absolute',
    top: 20,
    height: 40,
    width: 110,
    borderRadius: 20,
    justifyContent: 'center',
  },
  gamePlayContainer: {
    flex: 1,
    zIndex: 100,
    top: 165,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  board: {
    width: 312,
    height: 312,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0
    }
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
    textAlign: 'center',
  },
  line: {
    position: 'absolute',
    width: 1,
    height: 306,
    backgroundColor: '#e4e4e4',
    transform: [{translateX: 100}],
  },
});
