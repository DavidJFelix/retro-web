import { Socket } from 'phoenix';


const socket = new Socket('ws://127.0.0.1:4000/socket', {
  params: {
  },
  logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data); },
});
socket.connect();

const initialState = {
  socket: socket,
}

export default function reducer(state = initialState, action) {
  return state;
}
