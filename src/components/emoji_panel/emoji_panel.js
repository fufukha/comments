import React, { Component } from 'react';

export default class EmojiPanel extends Component {
	constructor() {
		super();
		this._handleClick = this._handleClick.bind(this);
	}
	
	render () {
		const emojis = ["🙂", "😃", "😀", "🙄",
		 "😉", "🤣", "😎", "😛",
		 "😯", "🤔", "😕", "🙄",
		 "🙁","😩", "😤", "😡",
		 "😇", "🤓", "😷", "😍"];

		const emojiSpans = emojis.map( emoji => 
			<span onClick={this._handleClick}>{emoji}</span>
		);

		return (
			<div className='emoji-panel'>
				<div className='wrapper-emoji'>
					{emojiSpans}
				</div>
			</div>
		)
	}

	_handleClick (event) {
		const emoji = event.target.innerHTML; 
		this.props.appendEmoji(emoji);
	}
}
