import React from 'react';
import EMAILS from '../emails';
import MailBox from './mailbox';

export default function MailBoxContainer(props) {
	return (
		<MailBox emails={EMAILS.inbox} />
	);
}