import React, { Component } from 'react';

export default class Overlay extends Component {
	render() {
		const { children, className} = this.props;
		return (
			<div id="overlay" className={className}>{children}</div>
		);
	}
}
