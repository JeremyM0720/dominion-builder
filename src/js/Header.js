import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title, numberOfPresets}) => (
	<header>
		<h1>{title}</h1>
		<p className="stats">Presets: {numberOfPresets}</p>
	</header>
);

Header.proptypes = {
	title: PropTypes.string,
	numberOfPresets: PropTypes.number
}

export default Header;