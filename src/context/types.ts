export interface State {
  socket: SocketIOClient.Socket,
  image: string,
  isHome: boolean,
  thiefProgress: number
}

export interface Test {
  id: Number;
}