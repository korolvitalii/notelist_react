import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index.js';
import App from './components/App.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";
import { reduxForm } from 'redux-form';

const initialState = { 
  notes: [
  {
    name: 'Shopping List', created: 'April 20, 2021', category: 'Task', content: 'Tomatoes, bread', dates: [], active: true, archive: false, id: 1,
  },
  {
    name: 'The theory of evolution', created: 'April 27, 2021', category: 'Random Thougth', content: 'The evolution', dates: [], active: true, archive: false, id: 2,
  },
  {
    name: 'New Feature', created: 'May 05, 2021', category: 'Idea', content: 'Implement new..', dates: [], active: true, archive: false, id: 3,
  },
  {
    name: 'William Gaddis', created: 'May 07, 2021', category: 'Quote', content: 'Power doesnt.. ', dates: [], active: true, archive: false, id: 4,
  },
  {
    name: 'Books', created: 'May 15, 2021', category: 'Task', content: 'The learn startup', dates: [], active: true, archive: false, id: 5,
  },
  {
    name: 'Notes', created: 'April 20, 2021', category: 'Task', content: 'Wrire poem', dates: [], active: true, archive: false, id: 6,
  },
  {
    name: 'Film', created: 'April 22, 2021', category: 'Task', content: 'Maxtrix, 1+1...', dates: [], active: true, archive: false, id: 7,
  },
  ],
  categories: ['Task', 'Random Thougth', 'Idea','Quote'],
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