import * as GAME_ACTIONS from "./actionTypes";

export const START_GAME = () => {
  return {
    type: GAME_ACTIONS.START_GAME
  };
};

export const END_GAME = () => {
  return {
    type: GAME_ACTIONS.END_GAME
  };
};

export const RESET_GAME = () => {
  return {
    type: GAME_ACTIONS.RESET_GAME
  };
};

export const CHANGE_PLAYER = () => {
  return {
    type: GAME_ACTIONS.CHANGE_PLAYER
  };
};

export const MAKE_MOVE = (movePositon,player) => {

  return {
    type: GAME_ACTIONS.MAKE_MOVE,
    payload : {movePositon,player}
  };
};
