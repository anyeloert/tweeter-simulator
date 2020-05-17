import React from 'react';
import Menu from './Components/Menu'
import Modal from './Components/Modal'
import Tweets from './Components/Tweets'


//redux
import {Provider} from 'react-redux'
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <Menu/>
      <Modal/>
      <Tweets/>
      
    </Provider>
  );
}

export default App;
