/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { initialState } from './context/initialState';
import reducer from './context/reducer';
import { StateProvider } from './context/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</Router>
);
