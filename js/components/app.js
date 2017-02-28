import React from 'react';
import {Link} from 'react-router';
import EMAILS from '../emails';
import MailBoxContainer from './mailbox-container';

export default function App(props) {
	return (
		<div>
			<h1>
				Your Damn Emails
			</h1>
			<div>
				<Link to={'/mail/inbox'}>Inbox</Link>
			</div>
			<div>
				<Link to={'/mail/spam'}>Spam</Link>
			</div>
			<div>
				{props.children}
			</div>
		</div>
	);
}