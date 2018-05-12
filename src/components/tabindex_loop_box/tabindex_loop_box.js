import React, { Component } from 'react';

export default class TabIndexLoopBox extends Component {
  constructor(props) {
    super(props);
    this._focusguard1 = this._focusguard1.bind(this);
    this._focusguard2 = this._focusguard2.bind(this);
  }

	render() {
    const { children, firstTabId, lastTabId, className } = this.props;
    const childrenWithProps = React.Children.map(children, (child, i) =>
        React.cloneElement(child, {tabIndex: `${i + 2}`}));
    const lastIndex = `${React.Children.count(children) + 2}`
    
		return (
			<div className={className}>
  			<div id="focusguard-1" 
  			tabIndex="1"
  			onFocus={()=>this._focusguard1(lastTabId)}>
        </div>
  			{childrenWithProps}
  			<div id="focusguard-2" 
  			tabIndex={lastIndex}
  			onFocus={()=>this._focusguard2(firstTabId)}>
        </div>
			</div>);
    }
  
    _focusguard1(id) {
      document.getElementById(id).focus();
    }
    
    _focusguard2(id) {
      document.getElementById(id).focus();
    }
	}
