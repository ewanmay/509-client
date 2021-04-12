import { State } from "./types";
import { socket } from './socket';

export const initialState: State = {
  socket,
  image: "",
  isHome: false,
  thiefProgress: 0
}