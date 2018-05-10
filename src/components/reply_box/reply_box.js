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

		this._addReply = this._addReply.bind(this);
	}
	
	render() {
		const replies = this._getReplies();
		return (
			<div>
				<ReplyForm addReply={this._addReply} />
				<div className='reply-list'>{replies}</div>
			</div>
		);
	}
	
	_getReplies() {
		const { selectedReplyIndex, replies } = this.state;
		return replies.map( (reply, index) => {
				return (
					<Reply 
							replyText={reply.replyText}
							currentTimeDate={reply.currentTimeDate}
							key={reply.uniqueKey}
							isModalDisplayed ={selectedReplyIndex === index}
							displayModal={this._displayModal.bind(this, index)}
							hideModal={this._hideModal.bind(this)}
							deleteReply={this._deleteReply.bind(this, index)}/>            
				);
			});
	}

	_addReply(replyText, currentTimeDate) {
		const reply = {uniqueKey: this.state.replies.length + 1, replyText, currentTimeDate};

		this.setState({ replies: this.state.replies.concat([reply]) });
	}
	
	_displayModal(index){
		this.setState( { selectedReplyIndex: index } );
	}
	
	_hideModal() {
		this.setState( { selectedReplyIndex: null } );    
	}
	
	_deleteReply(indexToDelete){
		this._hideModal();
		const replies = this.state.replies.filter( (reply, index) => {
			return index !== indexToDelete;
		});    
		
		this.setState( { replies });
	}
}
