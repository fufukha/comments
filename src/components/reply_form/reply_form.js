import React, { Component } from 'react';
import EmojiPanel from '../emoji_panel/emoji_panel';
import ToggleBox from  '../toggle_box/toggle_box';

export default class ReplyForm extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			replyText: '',
		 };

		 this._handleChange = this._handleChange.bind(this);
		 this._handleKeyPress = this._handleKeyPress.bind(this);
		 this._appendEmoji = this._appendEmoji.bind(this);
		 this._hasContent = this._hasContent.bind(this);
	}
	
	render() {
		const { replyText } = this.state;

		return(
			<div className="reply-form">
				<form>
					<textarea 
						required
						minLength="1"
						type='text' 
						placeholder='Write a reply...' 
						value={replyText}
						onChange={this._handleChange}
						onKeyPress={this._handleKeyPress}>
					</textarea>
					<ToggleBox
						classNames="emoji-btn"
						title="Add emoji"
						toggleBtn={["far", "smile"]}>
							<EmojiPanel
								appendEmoji={this._appendEmoji} />
					</ToggleBox>
				</form>
			</div>
		);
	}
	
	_handleKeyPress(event) {
		const { replyText } = this.state;
		const hasContent = this._hasContent(replyText);

		if( hasContent && event.key == 'Enter' && !event.shiftKey) { 
			event.preventDefault();
			this._handleSubmit(event);
			event.target.blur();
		}
	}

	_hasContent(str) {
		const regex = RegExp('^\s*$');
		const hasContent = !regex.test(str);

		return(hasContent)
	}

	_handleChange(event) {
		const replyText = event.target.value.trim(); 
		
		this.setState({ replyText: replyText });
	}

	_appendEmoji (emoji) {
		const appendedText = `${this.state.replyText}${emoji}`;

		this.setState({ replyText: appendedText});
	}
	
	_handleSubmit(event) {
		event.preventDefault();
		
		const { replyText } = this.state; 
		const currentTimeDate = new Date();

		this.props.addReply(replyText, currentTimeDate);
		
		this.setState({replyText: ''});
	} 
}
