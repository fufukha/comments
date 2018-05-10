import React, { Component } from 'react';

export default class Modal extends Component {
	render() {
		const { hideDisplay, deleteReply } = this.props;
		return (		
			<div className='modal_content'>
				<p className='modal_text'>Are you sure you want to delete your reply?</p>
				<div className='wrapper_btn'>
					<button onClick={hideDisplay}>Cancel</button>
					<button onClick={deleteReply}>Delete</button>
				</div>
			</div>			   
		)
	}
}
