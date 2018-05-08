import React, { Component } from 'react';

export default class Modal extends Component {
	render() {
		const { hideModal, deleteReply } = this.props;
		return (
			<div className='modal_bg'>				
				<div className='modal_content'>
					<p className='modal_text'>Are you sure you want to delete your reply?</p>
					<div className='wrapper_btn'>
						<button onClick={hideModal}>Cancel</button>
						<button onClick={deleteReply}>Delete</button>
					</div>
				</div>
			</div>      
		)
	}
}
