import { State } from "./types";

export const reducer = (state: State, action: Record<string, any>): State => {
  switch (action.type) {
    case "SET_SCREENSHOT":
      return { ...state, image: action.payload };
    case "SET_ISHOME":
      return { ...state, isHome: action.payload };
    case "SET_PROGRESS":      
      const newProgress = action.payload ? Math.max(state.thiefProgress - 1, -50) : Math.min(state.thiefProgress + 1, 80);

      return { ...state, thiefProgress: newProgress};
    default: {
      return state;
    }
  }
}