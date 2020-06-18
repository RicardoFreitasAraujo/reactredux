import React from 'react';
import Sidebar from './components/sidebar';
import Video from './components/video';
import { Provider } from 'react-redux';
import store  from './components/store/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video></Video>
        <Sidebar></Sidebar>
      </Provider>
    </div>
  );
}

export default App;
