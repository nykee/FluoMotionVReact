import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import Dashboard from './pages/DashBoard'
import DataCheck from './pages/DataCheck'
import SingleUpload from './pages/SingleUpload'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route,  browserHistory,IndexRoute  } from 'react-router';



const routes =
    <Route path={'/'} components={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/datacheck" component={DataCheck}/>
        <Route path="/singelupload" component={SingleUpload}/>



    </Route>;

ReactDOM.render(

        <Router history={browserHistory}>
            {routes}
        </Router>

, document.getElementById('root'));
registerServiceWorker();
