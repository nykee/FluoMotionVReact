import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './components/DashBoard'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route,  browserHistory  } from 'react-router';



const routes =
    <Route path={'/'} components={App}>
        <Route path="about" component={Dashboard} />



    </Route>;

ReactDOM.render(

        <Router history={browserHistory}>
            {routes}
        </Router>

, document.getElementById('root'));
registerServiceWorker();
