import keyMirror from 'keymirror';


export const actionTypes = keyMirror({
  ADD_CARD: null,
});

const initialState = [];

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
