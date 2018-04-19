/*
 * Component that handles switching between the clock and settings
 *
 * props.work: default work time in minutes
 * props.break: default break time in minutes
 * props.cycles: default cycles
 */
import React, { Component } from 'react';
import PomoSettings from './PomoSettings';
import PomoTimer from './PomoTimer';

class PomoClock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			started: false,
			work: 60*props.work,
			break: 60*props.break,
			cycles: props.cycles,
		};
		this.handleStart = this.handleStart.bind(this);
		this.handleWorkChange = this.handleWorkChange.bind(this);
		this.handleBreakChange = this.handleBreakChange.bind(this);
		this.handleCyclesChange = this.handleCyclesChange.bind(this);
		this.handleTimerFinished = this.handleTimerFinished.bind(this);
	}

	handleStart() {
		this.setState({started: true});
	}

	handleWorkChange(newWork) {
		this.setState({work: newWork});
	}

	handleBreakChange(newBreak) {
		this.setState({break: newBreak});
	}

	handleCyclesChange(newCycles) {
		this.setState({cycles: newCycles});
	}

	handleTimerFinished() {
		this.setState({started: false});
	}

	render() {
		const started = this.state.started;
		return this.state.started ? (
			<PomoTimer
				work={this.state.work}
				break={this.state.break}
				cycles={this.state.cycles}/>
		) : (
			<PomoSettings
			work={this.state.work}
			break={this.state.break}
			cycles={this.state.cycles}
			handleStart={this.handleStart}
			handleWorkChange={this.handleWorkChange}
			handleBreakChange={this.handleBreakChange}
			handleCyclesChange={this.handleCyclesChange} />
		)
	}
}

export default PomoClock;
