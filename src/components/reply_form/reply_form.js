import React, { Component } from 'react';
import EmojiPanel from '../emoji_panel/emoji_panel';
import ToggleBox from  '../toggle_box/toggle_box';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class ReplyForm extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			replyText: '',
		 };
	}
	
	render() {
		return(
			<div className="reply-form">
				<form>
					<textarea 
						required
						minLength="1"
						type='text' 
						placeholder='Write a reply...' 
						value={this.state.replyText}
						onChange={this._handleChange.bind(this)}
						onKeyPress={this._handleKeyPress.bind(this)}>
					</textarea>
					<ToggleBox
						className="emoji-btn"
						title="Add emoji"
						toggleBtn={["far", "smile"]}>
							<EmojiPanel
								appendEmoji={this._appendEmoji.bind(this)} />
					</ToggleBox>
				</form>
			</div>
		);
	}
	
	_handleKeyPress(event) {
		const regex = RegExp('.');
		let replyText = this.state.replyText;
		const hasContent = regex.test(replyText);
		if(hasContent && event.key == 'Enter' && !event.shiftKey) { 
			event.preventDefault();
			this._handleSubmit(event);
			event.target.blur();
		}
	}
	
	_handleChange(event) {
		console.log(event.target.value.length);
		this.setState({ replyText: event.target.value });
	}

	_appendEmoji (emoji) {
		const appendedText = `${this.state.replyText}${emoji}`;

		this.setState({ replyText: appendedText});
	}
	
	_handleSubmit(event) {
		event.preventDefault();
		
		let replyText = this.state.replyText; 
		let currentTimeDate = new Date();
		this.props.addReply(replyText, currentTimeDate);
		
		this.setState({replyText: ''});
	} 
}
