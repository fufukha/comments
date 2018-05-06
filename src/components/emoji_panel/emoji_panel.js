import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class EmojiPanel extends Component {
	render () {
		return (
			<div className='emoji-panel'>
				<div className='wrapper-emoji'>
					<FontAwesomeIcon icon="smile"/>
					<FontAwesomeIcon icon="smile"/>
					<FontAwesomeIcon icon="smile"/>
					<FontAwesomeIcon icon="smile"/>
				</div>
			</div>
		)
	}
}
