import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class ToggleBox extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			isDisplay: false,
		 };
	}

	render() {
		const { isDisplay } = this.state;
		const {className, title, children } = this.props;
		return (
			<div className="toggleBox">
				<div
					className={className}
					title={title}

					onClick={this._toggleDisplay.bind(this)}>
						<FontAwesomeIcon icon={this.props.toggleBtn}/>
				</div>
				{isDisplay &&
					<div>
						{children}
					</div>}
			</div>
		);
	}

	_toggleDisplay() {
		this.setState({ isDisplay: !this.state.isDisplay});
		this._clickOutside(".toggleBox");
	}

	_clickOutside(selector) {
		document.addEventListener("click", () => {
			const isInside = (event.target).closest(selector);

			if ( !isInside ) {
				this._hideDisplay();
			}
		})
	}

	_hideDisplay() {
		this.setState( {isDisplay: false} );
	}
}
