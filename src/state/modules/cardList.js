import keyMirror from 'keymirror';

export const actionTypes = keyMirror({
  CONNECT_BOARD: null,
  CONNECT_BOARD_SUCCESS: null,
  CONNECT_BOARD_ERROR: null,

  ADD_CARD: null,
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
      })
  };
}

export function addCard(card) {
  return {
    card,
    type: actionTypes.ADD_CARD,
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      return [
          ...state,
          action.card
      ];
    default:
      return state;
  }
}
