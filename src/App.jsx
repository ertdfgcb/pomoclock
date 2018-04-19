/*
 * Component that handles switching between the clock and settings
 *
 * props.work: default work time in minutes
 * props.break: default break time in minutes
 * props.cycles: default cycles
 */
import React, { Component } from 'react';
import MinuteInput from './MinuteInput';
import PomoTimer from './PomoTimer';
import './App.css';

class App extends React.Component {
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

	handleCyclesChange(e) {
		this.setState({cycles: e.target.value});
	}

	handleTimerFinished() {
		this.setState({started: false});
	}

	settings() {
		return <div id="settings">
			<fieldset>
				<div class="input-line">
					<label htmlFor='work'>Work
						<MinuteInput id='work' name='work'
							value={this.state.work}
							onChange={this.handleWorkChange} />
					</label>
				</div>
				<br/>
				<div class="input-line">
					<label htmlFor='break'>Break
						<MinuteInput id='break' name='break' type='text'
							value={this.state.break}
							onChange={this.handleBreakChange} />
					</label>
				</div>
				<br/>
				<div class="input-line">
					<label htmlFor='cycles'>Cycles
						<input id='cycles' class='setting' name='cycles' type='text'
							value={this.state.cycles}
							onChange={this.handleCyclesChange} />
					</label>
				</div>
				<br/>
				<div class="input-line">
					<button onClick={this.handleStart}>
						Start
					</button>
				</div>
			</fieldset>
		</div>
	}

	clock() {
		return <PomoTimer id="timer"
			work={this.state.work}
			break={this.state.break}
			cycles={this.state.cycles} />
	}

	render() {
		const started = this.state.started;
		return this.state.started ? this.clock() : this.settings();
	}
}

export default App;
