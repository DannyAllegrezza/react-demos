import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({ loading }) => {
	const activeStyle = { color: 'orange' };
	return (
		<nav>
			<NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
			{" | "}
			<NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
			{" | "}
			<NavLink to="/events" activeStyle={activeStyle}>Events</NavLink>
			{loading && <LoadingDots interval={100} dots={20} />}
		</nav>
	);
};

Header.propTypes = {
	//loading: PropTypes.bool.isRequired
};

export default Header;
