import React, { Component } from 'react';
import Modal from '../modal/modal';

export default class Reply extends Component {
	componentDidUpdate() {
		this.node.scrollIntoView({block: "end", behavior: "smooth"});
	}
	
	render() {
		const d = this.props.currentTimeDate;
		const optDate = {month: 'short', day: "numeric", year: "numeric"};
		const optTime = {hour: 'numeric', minute: '2-digit', second: '2-digit'};
		const currentDate = d.toLocaleDateString('en-US', optDate);
		const currentTime = d.toLocaleTimeString('en-US', optTime); 
		const userName = 'Anon1111';
		{/*const imgScr = 'https://www.dropbox.com/s/zy3vhwod43n7dl7/people-200-200.jpg?raw=1'*/}
		
		return(
			<article className='reply'
							ref={node => this.node = node}>
				{/*<img className='avatar' src={imgScr} />*/}
				<pre>
					<p>{this.props.replyText}</p>
				</pre>
				<footer>
					<div>
						<span>{userName} &nbsp;|&nbsp;</span>
						<time>{currentDate} &nbsp; {currentTime} </time>
					</div>
						<a onClick={this._handleClick.bind(this)} role="button">
							<i className="fas fa-trash" title="Delete reply"></i>
					</a>
					{this.props.isModalDisplayed && (
						<Modal 
							hideModal={this.props.hideModal}
							deleteReply={this.props.deleteReply}/>
					)}
				</footer>  
			</article>      
		)
	}
	
	_handleClick(event){
		event.preventDefault();
		this.props.displayModal();
	}
}
