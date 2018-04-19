/*
 * Component that manages the countdown timer, cycles, and clock rendering
 * 
 * props.work: work time in seconds
 * props.break: break time in seconds
 * props.cycle: number of work/break cycles
 * props.handleFinish: hook called when all cycles are done
 */
import React, { Component } from 'react';

class PomoTimer extends React.Component {
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
		this.startCycle();
	}

	startCycle() {
		this.timerID = setInterval(() => this.tick(), 1000);
		this.setState(prevState => ({
			started: true,
			counter: parseInt(prevState.work) + parseInt(prevState.break)
		}));
	}
 
	tick() {
		if(0 == this.state.counter) {
			clearInterval(this.timerID);
			if(0 == this.state.cycle) {
				this.props.handleFinish();
			} else {
				this.setState((prevState, props) => ({
					cycle: prevState.cycle - 1
				}));
				this.startCycle();
			}
		} else {
			this.setState((prevState, props) => ({
				counter: prevState.counter - 1
			}));
		}
	}
  
	render() {
		const working = this.state.counter > this.state.break;
		const count = this.state.counter - (working ? this.state.break : 0);
		const min = parseInt(count / 60);
		const sec = ("0" + parseInt(count % 60)).slice(-2);
		const phase = working ? 'Work' : 'Break';
		return <div>
			<h3>Cycles left: {this.state.cycle}</h3>
			<h1>{phase}</h1>
			<h2>{0 == min ? sec : min + ':' + sec}</h2>
		</div>;
	}
}

export default PomoTimer;
