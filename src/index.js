// @flow
import 'webpack-hot-middleware/client?reload=true';
import './styles/App.css';
import '../public/index.html';

import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';


// Target HTML where component`s content will be injected.
const appRoot = document.getElementById('app-root');
ReactDOM.render(<App />, appRoot);