import React, { Component } from 'react';
import ReplyBox from '../reply_box/reply_box';

export default class App extends Component {
	constructor() {
		super();
		
		this.state = { like: false }
	}
	render() {
		const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Praesent interdum fermentum sapien. In rutrum accumsan lorem at sagittis. 
		Curabitur vitae urna quis velit congue mollis. Phasellus ut justo ut justo 
		laoreet interdum sit amet vitae leo. Lorem ipsum dolor sit amet, consectetur 
		adipiscing elit. Praesent interdum fermentum sapien. In rutrum accumsan lorem 
		at sagittis. Curabitur vitae urna quis velit congue mollis. Phasellus ut justo 
		ut justo laoreet interdum sit amet vitae leo.`
				
		return (
			<main>
				<section className='post-box'>
					<article className="post">
						{/*<img className="avatar" src="https://www.dropbox.com/s/z02pj5f7uztsce7/tech-200-200.jpg?raw=1" />*/}
						<p>{dummyText}</p>
						<footer>
							<div>
								<span>Anon10923 &nbsp;|&nbsp;</span>
								<time>Mar 1, 2018 &nbsp; 05:50PM</time>
							</div>              
							<div className={this.state.like ? 'like' : ''}>
								<a
									role="button" 
									title={this.state.like ? 'Unlike' : 'Like'}  
									onClick={this._handleClick.bind(this)}>
									<i className="fas fa-heart"></i>
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
		this.setState( { like: !this.state.like} );
	}
}
