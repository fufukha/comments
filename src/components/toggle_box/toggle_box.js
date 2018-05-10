import React, { Component } from 'react';
import Overlay from '../overlay/overlay';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class ToggleBox extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			isDisplay: false,
		 };

		 this._toggleDisplay = this._toggleDisplay.bind(this);
		 this._hideDisplay = this._hideDisplay.bind(this)
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
		const { classNames, title, children, toggleBtn, overlayType, _hideDisplay } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { hideDisplay: this._hideDisplay}));


		return (
			<div>
				{isDisplay &&
					<Overlay className={overlayType} />}
				<div className="toggleBox">
					<div
						className={classNames}
						title={title}
						role="button"
						onClick={this._toggleDisplay}>
							<FontAwesomeIcon icon={toggleBtn}/>
					</div>
					{isDisplay &&
						<div>
							{childrenWithProps}
						</div>}
				</div>
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
