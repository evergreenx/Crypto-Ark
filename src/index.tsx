import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hotjar } from 'react-hotjar';



import { Provider } from 'react-redux'
import store from './redux/store'

hotjar.initialize(2760029, 6);

// Identify the user
// hotjar.identify('USER_ID', { userProperty: 'value' });

// Add an event
// hotjar.event('button-click');

// // Update SPA state
// hotjar.stateChange('/my/page');
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>

            <BrowserRouter>
                <App />
            </BrowserRouter>

        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
