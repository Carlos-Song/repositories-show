import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { StateCan } from './StateContainer/StateContainer';

ReactDOM.render(
<StateCan.Provider>
    <App />
</StateCan.Provider>,
document.getElementById('root'));
serviceWorker.unregister();
