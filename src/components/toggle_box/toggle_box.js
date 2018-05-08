import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class ToggleBox extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			isDisplay: false,
		 };

		 this._toggleDisplay = this._toggleDisplay.bind(this);
	}

	componentDidMount() {
		document.addEventListener("click", () => {
			//if outside return empty string-falsey
			const isInside = (event.target).closest(".toggleBox");
			if ( !isInside ) {
				this._hideDisplay();
			}
		});
  }

	render() {
		const { isDisplay } = this.state;
		const { className, title, children, toggleBtn } = this.props;

		return (
			<div className="toggleBox">
				<div
					className={className}
					title={title}

					onClick={this._toggleDisplay}>
						<FontAwesomeIcon icon={toggleBtn}/>
				</div>
				{isDisplay &&
					<div>
						{children}
					</div>}
			</div>
		);
	}

	_toggleDisplay() {
		const { isDisplay } = this.state;
		this.setState({ isDisplay: !isDisplay });
	}

	_hideDisplay() {
		this.setState( {isDisplay: false} );
	}
}
