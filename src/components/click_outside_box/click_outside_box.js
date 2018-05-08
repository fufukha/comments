import React, { Component } from 'react';

export default class ClickOutsideBox extends React.Component {
  componentDidMount() {
    document.addEventListener("click", () => {
			//if outside return empty string-falsey
			const isInside = (event.target).closest(this.props.children.classList);
			if ( !isInside ) {
				this.props.hideElement();
			}
		});
  }
  
  render(){
    return (
      <div>{this.props.children}</div>
    );  
  }  
}
