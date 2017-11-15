import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import Dashboard from './pages/DashBoard'
import DataManage from './pages/DataManage/DataManage'
import DataCheck from './pages/DataManage/DataCheck'
import DataDownload from './pages/DataManage/DataDownload'
import SingleUpload from './pages/DataUpload/SingleUpload'
import DataUpload from './pages/DataUpload/DataUpload'
import MultipleUpload from './pages/DataUpload/MultipleUpload'
import HelpContainer from './pages/Help/HelpContainer'
import AccountInfo from './pages/Help/AccountInfo'
import OnlineHelp from './pages/Help/OnlineHelp'
import DownloadContent from './pages/Help/DownloadContent'
import FilmingNotice from './pages/Help/FilmingNotice'
import SystemFlow from './pages/Help/SystemFlow'
import UploadRequirement from './pages/Help/UploadRequirement'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route,  browserHistory,IndexRoute  } from 'react-router';



const routes =
    <Route path={'/'} components={App}>
        <IndexRoute component={Dashboard} />
        <Route path="dataManage" component={DataManage}>
            <Route path="check" component={DataCheck}/>
            <Route path="download" component={DataDownload}/>
        </Route>
        <Route path="upload" component={DataUpload}>
            <Route path="single" component={SingleUpload}/>
            <Route path="multiple" component={MultipleUpload}/>
        </Route>
        <Route path="help" component={HelpContainer}>
            <Route path="accountInfo" component={AccountInfo}/>
            <Route path="onlineHelp" component={OnlineHelp}/>
            <Route path="downloadContent" component={DownloadContent}/>
            <Route path="filmingNotice" component={FilmingNotice}/>
            <Route path="systemFlow" component={SystemFlow}/>
            <Route path="uploadRequirement" component={UploadRequirement}/>
        </Route>



    </Route>;

ReactDOM.render(

        <Router history={browserHistory}>
            {routes}
        </Router>

, document.getElementById('root'));
registerServiceWorker();
