import { Socket } from 'phoenix';
import keyMirror from 'keymirror';


export const actionTypes = keyMirror({
  CONNECTED_TO_CHANNEL: null,
});


const socket = new Socket('ws://127.0.0.1:4000/socket', {
  params: {
  },
  logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data); },
});
socket.connect();


const initialState = {
  socket: socket,
  channel: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CONNECTED_TO_CHANNEL:
      return {
        ...state,
        channel: action.channel,
      }
    default:
      return state;
  }
}
