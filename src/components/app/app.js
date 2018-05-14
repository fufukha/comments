import React, { Component } from 'react';
import ReplyBox from '../reply_box/reply_box';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class App extends Component {
	constructor() {
		super();
		
		this.state = { isLike: false }
		this._handleClick = this._handleClick.bind(this);
	}

	render() {
		const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Praesent interdum fermentum sapien. In rutrum accumsan lorem at sagittis. 
		Curabitur vitae urna quis velit congue mollis. Phasellus ut justo ut justo 
		laoreet interdum sit amet vitae leo. Lorem ipsum dolor sit amet, consectetur 
		adipiscing elit. Praesent interdum fermentum sapien. In rutrum accumsan lorem 
		at sagittis. Curabitur vitae urna quis velit congue mollis. Phasellus ut justo 
		ut justo laoreet interdum sit amet vitae leo.`
		const username = `Anon10923`;
		const date = `Mar 1, 2018`;
		const time = `05:50PM`
		const { isLike } = this.state;
				
		return (
			<main>
				<section className='post-box'>
					<article className="post">
						{/*<img className="avatar" src="https://www.dropbox.com/s/z02pj5f7uztsce7/tech-200-200.jpg?raw=1" />*/}
						<p>{dummyText}</p>
						<footer>
							<div>
								<span>{username}&nbsp;&nbsp;|&nbsp;&nbsp;</span>
								<time>{date}&nbsp;&nbsp;{time}</time>
							</div>              
							<div className={isLike ? 'like' : ''}>
								<a
									role="button" 
									title={isLike ? 'Unlike' : 'Like'}  
									onClick={this._handleClick}>
									<FontAwesomeIcon icon="heart"/>
								</a>
							</div>
						</footer>            
					</article>
					<hr/>
					<ReplyBox />
				</section>        
			</main>
		);       
	}
	
	_handleClick(event) {
		event.preventDefault();
		const { isLike } = this.state;
		this.setState( { isLike: !isLike} );
	}
}
