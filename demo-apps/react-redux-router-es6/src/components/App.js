// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import EventsPage from './events/EventsPage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import { connect } from 'react-redux';

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Header
					loading={this.props.loading}
				/>

				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/events" component={EventsPage} />
			</div>
		);
	}
}

App.propTypes = {
	//loading: PropTypes.bool.isRequired,
	match: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		loading: state.ajaxCallsInProgress > 0
	};
}

export default App;
