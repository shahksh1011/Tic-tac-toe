import React, {Component} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {connect} from 'react-redux';
import Circle from './Circle';
import Cross from './Cross';
import * as ACTIONS from '../redux/actions';

class BlockComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childComponent: null,
    };
  }

  render() {
    return (
      <TouchableHighlight
        style={[
          {height: 100, width: 100, position: 'absolute'},
          this.props.customStyle,
        ]}
        disabled={this.state.childComponent !== null}
        onPress={() => {
          this.props.dispatch(
            ACTIONS.MAKE_MOVE(this.props.position, this.props.currentPlayer),
          );

          if (this.props.currentPlayer === 'X') {
            this.setState({childComponent: <Cross />});
          } else {
            this.setState({childComponent: <Circle />});
          }
        }}>
        <View>{this.state.childComponent}</View>
      </TouchableHighlight>
    );
  }
}

mapStateToProps = state => {
  return {currentPlayer: state.currentPlayer};
};

export default connect(mapStateToProps)(BlockComponent);
