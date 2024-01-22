// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './todoApp/store';
import TodoApp from './todoApp/todo';

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
