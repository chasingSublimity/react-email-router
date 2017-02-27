import React from 'react';
import Link from 'react-router';
import EMAILS from '../emails';

export default function App(props) {
	return (
		<div>
			<h1>
				Your damn emails
			</h1>
			<div>
				{props.children}
			</div>
		</div>
	);
}