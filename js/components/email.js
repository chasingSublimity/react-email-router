import React from 'react';
import {Link} from 'react-router';

export default function Email(props) {
	return (
		<div>
			<strong>
				<div>
				From: {props.from}
				<br/>
				To: {props.to}
				<br/>
				Subject: {props.title}
				</div>
			</strong>
			<br/>
			{props.content}
		</div>
	);
}