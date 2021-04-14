import Socket from 'socket.io-client'
const route = process.env.REACT_APP_ROUTE ? process.env.REACT_APP_ROUTE : 'http://localhost:5000'
export const socket: SocketIOClient.Socket = Socket(route, { transports: ["websocket", "polling", "flashsocket"]});
