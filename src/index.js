import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import Dashboard from './Pages/DashBoard'
import DataCheck from './Pages/DataCheck'
import SingleUpload from './Pages/SingleUpload'
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
