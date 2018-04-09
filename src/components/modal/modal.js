import React, { Component } from 'react';

export default class Modal extends Component {
	render() {
		return (
			<div className='modal_bg'>
				<div className='modal_content'>
					<p className='modal_text'>Are you sure you want to delete your reply?</p>
					<div className='wrapper_btn'>
						<button onClick={this.props.hideModal}>Cancel</button>
						<button onClick={this.props.deleteReply}>Delete</button>
					</div>
				</div>
			</div>      
		)
	}
}
