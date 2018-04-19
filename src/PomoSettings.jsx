/*
 * Component that manages the settings for the clock
 *
 * props.work: default work time in seconds
 * props.break: default break time in seconds
 * props.cycles: default work/break cycles
 * props.handleStart: hook called when start button is pressed
 * props.handleWorkChange: hook called when work value is changed
 * props.handleBreakChange: hook called when break value is changed
 * props.handleCyclesChange: hook called when cycles value is changed
 */
import React, { Component } from 'react';
class PomoSettings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			work: props.work,
			break: props.break,
			cycles: props.cycles
		}
		this.handleStart = this.handleStart.bind(this);
		this.handleWorkChange = this.handleWorkChange.bind(this);
		this.handleBreakChange = this.handleBreakChange.bind(this);
		this.handleCyclesChange = this.handleCyclesChange.bind(this);
	}

	handleStart(e) {
		this.props.handleStart();
	}

	handleWorkChange(e) {
		this.setState({work: 60*e.target.value});
		this.props.handleWorkChange(this.state.work);
	}

	handleBreakChange(e) {
		this.setState({break: 60*e.target.value});
		this.props.handleBreakChange(this.state.break);
	}

	handleCyclesChange(e) {
		this.setState({cycle: e.target.value});
		this.props.handleCycleChange(this.state.cycles);
	}

	render() {
		return <div>
			<fieldset>
				<label htmlFor='work'>Work
					<input id='work' name='work' type='text'
						value={this.state.work/60}
						onChange={this.handleWorkChange} />
				</label>
				<br/>
				<label htmlFor='break'>Break
					<input id='break' name='break' type='text'
						value={this.state.break / 60}
						onChange={this.handleBreakChange}/>
				</label>
				<br/>
				<label htmlFor='cycles'>Cycles
					<input id='cycles' name='cycles' type='text'
						value={this.state.cycles}
						onChange={this.handleCycleChange}/>
				</label>
				<br/>
				<button onClick={this.handleStart}>
					Start
				</button>
			</fieldset>
		</div>
	}
}

export default PomoSettings;
