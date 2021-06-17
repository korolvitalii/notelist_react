import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index.js';
import App from './components/App.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";

/* eslint-disable no-underscore-dangle */
const initialState = { 
  tasks: [
  {
    name: 'Shopping List', created: 'April 20, 2021', category: 'Task', content: 'Tomatoes, bread', dates: [], active: true, archive: false,
  },
  {
    name: 'The theory of evolution', created: 'April 27, 2021', category: 'Random Thougth', content: 'The evolution', dates: [], active: true, archive: false,
  },
  {
    name: 'New Feature', created: 'May 05, 2021', category: 'Idea', content: 'Implement new..', dates: [], active: true, archive: false,
  },
  {
    name: 'William Gaddis', created: 'May 07, 2021', category: 'Quote', content: 'Power doesnt.. ', dates: [], active: true, archive: false,
  },
  {
    name: 'Books', created: 'May 15, 2021', category: 'Task', content: 'The learn startup', dates: [], active: true, archive: false,
  },
  {
    name: 'Notes', created: 'April 20, 2021', category: 'Task', content: 'Wrire poem', dates: [], active: true, archive: false,
  },
  {
    name: 'Film', created: 'April 22, 2021', category: 'Task', content: 'Maxtrix, 1+1...', dates: [], active: true, archive: false,
  },
  ]
};

const store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('container'),
  );