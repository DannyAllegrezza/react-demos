import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as driftEventActions from '../../actions/driftEventActions';
import { connect } from 'react-redux';

class EventsPage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			driftEvent: { name: "" }
		};

		// We need to properly bind the `this` of the EventsPage component
		this.onEventNameChange = this.onEventNameChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onEventNameChange(event) {
		const driftEvent = this.state.driftEvent;
		// update the events name
		driftEvent.name = event.target.value;
		this.setState({ driftEvent: driftEvent });
	}

	onClickSave() {
		// dispatch our action
		this.props.dispatch(driftEventActions.createDriftEvent(this.state.driftEvent));
	}

	driftEventsRow(driftEvent, index) {
		return (<div key={index}>{driftEvent.name}</div>);
	}
	render() {
		return (
			<div>
				<h1>Events!</h1>
				{this.props.driftEvents.map(this.driftEventsRow)}
				<h2>Add a new drift event</h2>
				<input type="text" onChange={this.onEventNameChange} value={this.state.driftEvent.name} />
				<input type="submit" value="Save" onClick={this.onClickSave} />
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		driftEvents: state.driftEvents
	};
}

EventsPage.propTypes = {
	dispatch: PropTypes.func.isRequired,
	driftEvents: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(EventsPage);

/**
 * Lets talk about exports
We could do:

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(EventsPage);

OR

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);

Use whichever reads more clearly to you...
*/
