import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import ChatNavigator from './src/navigation/chatNavigation'
import userReducer from './src/redux/store/reducer/user';

const rootReducer = combineReducers({
  user:userReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store} >
      <ChatNavigator />
    </Provider>
  );
}

