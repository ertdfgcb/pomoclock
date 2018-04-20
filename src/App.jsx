/*
 * Component that handles switching between the clock and settings
 *
 * props.work: default work time in minutes
 * props.break: default break time in minutes
 * props.cycles: default cycles
 */
import React from 'react';
import MinuteInput from './MinuteInput';
import Timer from './Timer';
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
		return <div>
			<form >
				<fieldset> 
					<div className='control-group'>
						<label id='work-label' htmlFor='work'>Work:</label>
						<MinuteInput id='work' name='work'
							value={this.state.work}
							onChange={this.handleWorkChange} />
					</div>
					<div className='control-group'>
						<label id='break-label' htmlFor='break'>Break:</label>
						<MinuteInput id='break' name='break' type='text'
							value={this.state.break}
							onChange={this.handleBreakChange} />
					</div>
					<div className='control-group'>
						<label id='cycles-label' htmlFor='cycles'>Cycles:</label>
						<input id='cycles' name='cycles' type='text'
							value={this.state.cycles}
							onChange={this.handleCyclesChange} />
					</div>
					<div className='control'>
						<button id='start-button' onClick={this.handleStart}>
							Start
						</button>
					</div>
				</fieldset>
			</form>
		</div>
	}

	clock() {
		return <Timer
			work={this.state.work}
			break={this.state.break}
			cycles={this.state.cycles}
			handleTimerFinished={this.handleTimerFinished}/>
	}

	render() {
		const started = this.state.started;
		document.title = "Pomodoro Clock";
		return this.state.started ? this.clock() : this.settings();
	}
}

export default App;
