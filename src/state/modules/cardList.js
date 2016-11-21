import keyMirror from 'keymirror';

import { actionTypes as sessionActionTypes } from './session';

export const actionTypes = keyMirror({
  CONNECT_BOARD: null,
  CONNECT_BOARD_SUCCESS: null,
  CONNECT_BOARD_ERROR: null,

  ADD_CARD: null,
  CREATE_CARD: null,
});

const initialState = [
  {
    title: "sample1",
  },
  {
    title: "sample2",
  }
];

export function connectToChannel(socket) {
  console.log("connectToChannel");
  return dispatch => {
    const channel = socket.channel('board:lobby')
    console.log("dispatch")
    channel.join()
      .receive('ok', () => {
        console.log("ok");
        dispatch({
          type: actionTypes.CONNECT_BOARD_SUCCESS,
        });
      })
      .receive('error', () => {
        console.log("error");
        dispatch({
          type: actionTypes.CONNECT_BOARD_ERROR,
        });
      });
    channel.on('card:created', (card) => {
      console.log('CARD: ', card);
      dispatch({
        type: actionTypes.ADD_CARD,
        card
      });
    });

    dispatch({
      type: sessionActionTypes.CONNECTED_TO_CHANNEL,
      channel,
    });
  };
}

export function addCard(title, channel) {
  return {
    type: actionTypes.CREATE_CARD,
    channel,
    title,
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      return [
          ...state,
          action.card
      ];
    case actionTypes.CREATE_CARD:
      action.channel.push("card:create", {title: action.title});
      return state;
    default:
      return state;
  }
}
