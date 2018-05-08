import React, { Component } from 'react';
import Modal from '../modal/modal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class Reply extends Component {
	constructor () {
		super();
		this._handleClick = this._handleClick.bind(this);
	}
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
		const { replyText, hideModal, deleteReply, isModalDisplayed } = this.props;
		{/*const imgScr = 'https://www.dropbox.com/s/zy3vhwod43n7dl7/people-200-200.jpg?raw=1'*/}
		
		return(
			<article className='reply'
					ref={node => this.node = node}>
				{/*<img className='avatar' src={imgScr} />*/}
				<pre>
					<p>{replyText}</p>
				</pre>
				<footer>
					<div>
						<span>{userName} &nbsp;|&nbsp;</span>
						<time>{currentDate} &nbsp; {currentTime} </time>
					</div>
						<a onClick={this._handleClick} role="button">
							<FontAwesomeIcon icon="trash"/>
					</a>
					{isModalDisplayed && (
						<Modal 
							hideModal={hideModal}
							deleteReply={deleteReply}/>
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
