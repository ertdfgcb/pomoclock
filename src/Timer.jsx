/*
 * Component that manages the countdown timer, cycles, and clock rendering
 * 
 * props.work: work time in seconds
 * props.break: break time in seconds
 * props.cycle: number of work/break cycles
 * props.handleFinish: hook called when all cycles are done
 */
import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import Favicon from 'react-favicon';
import './Timer.css';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			work: props.work,
			break: props.break,
			cycle: props.cycles
		}
    }

	componentDidMount() {
		this.startNextCycle();
	}

	startNextCycle() {
		this.timerID = setInterval(() => this.tick(), 1000);
		this.setState(prevState => ({
			started: true,
			counter: parseInt(prevState.work) + parseInt(prevState.break),
			cycle: prevState.cycle - 1
		}));
	}
 
	tick() {
		if(0 == this.state.counter) {
			clearInterval(this.timerID);
			if(0 == this.state.cycle) {
				this.props.handleTimerFinished();
			} else {
				this.startNextCycle();
			}
		} else {
			this.setState((prevState, props) => ({
				counter: prevState.counter - 1
			}));
		}
	}
  
	render() {
		const working = this.state.counter >= this.state.break;
		const count = this.state.counter - (working ? this.state.break : 0);
		const pct = count / (working ? this.state.work : this.state.break);
		const phase = working ? 'Work' : 'Break';
		const color = working ? '#ff9100' : '#00b0ff';
		const sec = ("0" + parseInt(count % 60)).slice(-2);;
		const min = count / 60;
		document.title = `${parseInt(min)}:${sec} - ${phase}`;
		return <div>
			<Favicon url={`http://oday.io/pomoclock/${phase}.ico`}/>
			<CircularProgressbar
				styles={{
					path: {stroke: color},
					text: {fill:color}
				}}
				percentage={100*pct}
				counterClockwise='true'
				textForPercentage={(pct) => {return phase}}/>
		</div>;
	}
}

export default Timer;
