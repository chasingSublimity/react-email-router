import React from 'react';
import {Link} from 'react-router';

export default function Email(props) {
	return (
		<div>
			<strong>
				<Link to={'/:mailbox_name' + props.id}>
				{props.from}
				{props.to}
				{props.title}
				</Link>
			</strong>
			&nbsp;
			{props.content}
		</div>
	);
}