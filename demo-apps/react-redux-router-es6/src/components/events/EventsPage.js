import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as driftEventActions from '../../actions/driftEventActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'C:/Users/danny/AppData/Local/Microsoft/TypeScript/3.0/node_modules/redux';

class EventsPage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			driftEvent: { name: "" }
		};

		// 1. We need to properly bind the `this` of the EventsPage component
		this.onEventNameChange = this.onEventNameChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	// 2. Child functions -- called by render()
	onEventNameChange(event) {
		const driftEvent = this.state.driftEvent;
		// update the events name
		driftEvent.name = event.target.value;
		this.setState({ driftEvent: driftEvent });
	}

	onClickSave() {
		// dispatch - cleaner way.
		this.props.actions.createDriftEvent(this.state.driftEvent);
	}

	driftEventsRow(driftEvent, index) {
		return (<div key={index}>{driftEvent.name}</div>);
	}

	// 3. Render function where we typically are calling a child component
	// Ideally, we just call a child component that contains the markup
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

// 4. Proptypes
EventsPage.propTypes = {
	driftEvents: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

// 5. Redux connect and related functions
function mapStateToProps(state, ownProps) {
	return {
		driftEvents: state.driftEvents
	};
}

// What actions are available in our Component?
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(driftEventActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);

/**
 * Lets talk about exports
We could do:

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(EventsPage);

OR

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);

Use whichever reads more clearly to you...
*/
