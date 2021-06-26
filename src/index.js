import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
ReactDOM.render(
  <Suspense fallback={(<div><img style={{margin: "0 auto"}} src="images/743.gif" alt=""/></div>)}>
    <App />
    </Suspense>
,
  document.getElementById('root')
);

