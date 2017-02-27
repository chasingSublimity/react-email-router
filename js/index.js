require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/app';
import EmailContainer from './components/email-container';
import MailBoxContainer from './components/mailbox-container';

const routes = (
	<Router history={hashHistory}>
		<Route path='/mail' component={App}>
			<IndexRoute component={MailBoxContainer} />
			<Route path=':mailbox_name' component={EmailContainer} />
		</Route>
	</Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);