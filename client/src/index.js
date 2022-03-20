import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';
import Boxcon from './cont/Boxcon';
import {render} from 'react-dom';

let store = createStore(reducers, applyMiddleware(thunk))

import {App} from './App';
render(	<Provider store={store}><App /></Provider>, document.getElementById('root')
);

