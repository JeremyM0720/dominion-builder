import React from 'react';

const Header = (props) => (
	<header>
		<h1>{props.title}</h1>
		<p className="stats">Presets: {props.numberOfPresets}</p>
	</header>
);

export default Header;