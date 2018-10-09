import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
	return (
		<div className="jumbotron">
			<h1>Drifting Events</h1>
			<p>Built with React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
			<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
		</div>
	);
};

export default HomePage;
