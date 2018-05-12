import React, { Component } from 'react';
import TabIndexLoopBox from '../tabindex_loop_box/tabindex_loop_box'

export default class Modal extends Component {
	componentDidMount(){
		document.getElementById("first-tab_modal").focus();
	}

	render() {
		const { hideDisplay, deleteReply } = this.props;
		const id1 = "first-tab_modal";
		const id2 = "last-tab_modal";

		return (		
			<div className='modal_content'>
				<p className='modal_text'>Are you sure you want to delete your reply?</p>
				<TabIndexLoopBox firstTabId={id1} lastTabId={id2} className="wrapper_btn">
					<button id={id1} className="cancel" onClick={hideDisplay}>Cancel</button>
					<button id={id2} className="delete" onClick={deleteReply}>Delete</button>
				</TabIndexLoopBox>
			</div>			   
		)
	}
}
