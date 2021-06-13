import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import './index.css'
ReactDOM.render(
  <Suspense fallback={(<div><img className="loadingimg" src="images/loadingrecycle.gif" alt=""/></div>)}>
    <App />
    </Suspense>
,
  document.getElementById('root')
);

