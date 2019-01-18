import React from 'react';

const Chief = props => (
	<div className="chief">
		<a href={props.url} target="_blank" rel="noopener noreferrer">
			<img src={props.img} alt="photographie de la présidente" />
			<div className="chiefs__overlay"></div>
		</a>
		<p>{props.title}</p>
		<p className="muted" dangerouslySetInnerHTML={{ __html: props.description }} />
	</div>
);

export default Chief;
