/*
 * Entry component that automatically converts entry from minutes to seconds
 *
 * props.id - id for input tag
 * props.bame - name for input tag
 * props.value - default value
 * props.onChange(value) - hook called when value is updated
 */
import React, { Component } from 'react';

class MinuteInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: props.value};
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({value: 60*e.target.value});
		this.props.onChange(60*e.target.value);
	}

	render() {
		return <input 
			type="text"
			id={this.props.id}
			name={this.props.name}
			value={this.state.value/60}
			onChange={this.onChange} />
	}
}

export default MinuteInput;
