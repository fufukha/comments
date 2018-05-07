import React, { Component } from 'react';

export default class EmojiPanel extends Component {
	render () {
		const emojis = ["😃", "😀", "🙄"];

		const emojiSpans = emojis.map( emoji => 
			<span onClick={this._handleClick.bind(this)}>{emoji}</span>
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
