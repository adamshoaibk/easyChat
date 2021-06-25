import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import ChatNavigator from './src/navigation/chatNavigation'
import userReducer from './src/redux/store/reducer/user';
import messageReducer from './src/redux/store/reducer/messages';

const rootReducer = combineReducers({
  user:userReducer,
  message:messageReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store} >
      <ChatNavigator />
    </Provider>
  );
}

