import * as GameActions from './actionTypes';

const initialState = {
  hasGameStarted: false,
  isGameRunning: false,
  hasGameEnded: false,
  currentPlayer: 'X',
  moves: ['', '', '', '', '', '', '', '', ''],
  player1: [],
  player2: [],
  gameStatus: '',
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GameActions.START_GAME:
      return {
        ...state,
        hasGameStarted: true,
        isGameRunning: true,
      };
    case GameActions.END_GAME:
      return {
        ...state,
        isGameRunning: false,
        hasGameEnded: true,
      };
    case GameActions.RESET_GAME:
      return {
        hasGameStarted: false,
        isGameRunning: false,
        hasGameEnded: false,
        currentPlayer: 'X',
        moves: ['', '', '', '', '', '', '', '', ''],
        player1: [],
        player2: [],
        gameStatus: '',
      };
    case GameActions.CHANGE_PLAYER:
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      };
    case GameActions.MAKE_MOVE:
      let newMoves = state.moves;
      newMoves[action.payload.movePositon - 1] = action.payload.player;
      let result = checkWin(newMoves, action.payload.player);
      let status = "";
      if(result){
        status = `${action.payload.player} wins`;
      }
      else if(!newMoves.includes('')){
        status = "Draw";
      }
      else {
        status = "";
      }
      return {
        ...state,
        gameStatus : status,
        hasGameEnded: result || !newMoves.includes('') ? true : false,
        currentPlayer: action.payload.player === 'X' ? 'O' : 'X',
        moves: newMoves,
      };
    default:
      return state;
  }
};

function checkWin(moves, player) {
  if (moves[0] == player && moves[1] == player && moves[2] == player)
    return true;

  if (moves[0] == player && moves[3] == player && moves[6] == player)
    return true;

  if (moves[0] == player && moves[4] == player && moves[8] == player)
    return true;

  if (moves[1] == player && moves[4] == player && moves[5] == player)
    return true;

  if (moves[1] == player && moves[4] == player && moves[7] == player)
    return true;

  if (moves[2] == player && moves[5] == player && moves[8] == player)
    return true;

  if (moves[2] == player && moves[4] == player && moves[6] == player)
    return true;

  if (moves[6] == player && moves[7] == player && moves[8] == player)
    return true;

  return false;
}

export default gameReducer;
