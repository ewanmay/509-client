import React, { useContext, useEffect } from 'react';
import './App.css';
import Video from './components/Video';
import { AppContext } from './context/context';
function App() {
  const [state, dispatch] = useContext(AppContext)

  useEffect(() => {
    state.socket.on("update_image", (img: string) => dispatch({ type: "SET_SCREENSHOT", payload: 'data:image/jpeg;base64,' + img }));
    state.socket.on("set_is_home", (ishome: boolean) => {
      dispatch({ type: "SET_ISHOME", payload: ishome }); 
      dispatch({ type: "SET_PROGRESS", payload: ishome })
    });
  }, [])
  return (
    <div className="App flex fill center">
      <Video />
    </div>
  );
}

export default App;
