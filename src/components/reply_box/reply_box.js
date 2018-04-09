import React, { Component } from 'react';
import ReplyForm from '../reply_form/reply_form';
import Reply from '../reply/reply';

export default class ReplyBox extends Component {
	constructor() {
		super();
		this.state = {
			replies: [], 
			selectedReplyKIndex: null
		}
	}
	
	render() {
		const replies = this._getReplies();
		return (
			<div>
				<ReplyForm addReply={this._addReply.bind(this)} />
				<div className='reply-list'>{replies}</div>
			</div>
		);
	}
	
	_getReplies() {
		return this.state.replies.map( (reply, index) => {
				return (
					<Reply 
							replyText={reply.replyText}
							currentTimeDate={reply.currentTimeDate}
							key={reply.uniqueKey}
							isModalDisplayed ={this.state.selectedReplyIndex === index}
							displayModal={this._displayModal.bind(this, index)}
							hideModal={this._hideModal.bind(this)}
							deleteReply={this._deleteReply.bind(this, index)}/>            
				);
			});
	}

	_addReply(replyText, currentTimeDate) {
		const reply = {uniqueKey: this.state.replies.length + 1, replyText, currentTimeDate};
		console.log(reply.uniqueKey);

		this.setState({ replies: this.state.replies.concat([reply]) });
	}
	
	_displayModal(index){
		this.setState( { selectedReplyIndex: index } );
	}
	
	_hideModal() {
		this.setState( { selectedReplyIndex: null } );    
	}
	
	_deleteReply(indexToDelete){
		console.log(indexToDelete);
		this._hideModal();
		const replies = this.state.replies.filter( (reply, index) => {
			return index !== indexToDelete;
		});    
		
		this.setState( { replies });
	}
}
