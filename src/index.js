import React from 'react';
import ReactDOM from 'react-dom';

/*============ APP ============*/
class App extends React.Component {
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

/*============REPLY BOX=============*/
class ReplyBox extends React.Component {
  constructor() {
    super();
    this.state = {
      replies: [], 
      selectedReplyKIndex: null
    }
  }
  
  render() {
    const replies = this._getReplies();
    return (
      <div>
        <ReplyForm addReply={this._addReply.bind(this)} />
        <div className='reply-list'>{replies}</div>
      </div>
    );
  }
  
  _getReplies() {
    return this.state.replies.map( (reply, index) => {
        return (
          <Reply 
              replyText={reply.replyText}
              currentTimeDate={reply.currentTimeDate}
              key={reply.uniqueKey}
              isModalDisplayed ={this.state.selectedReplyIndex === index}
              displayModal={this._displayModal.bind(this, index)}
              hideModal={this._hideModal.bind(this)}
              deleteReply={this._deleteReply.bind(this, index)}/>            
        );
      });
  }

  _addReply(replyText, currentTimeDate) {
    const reply = {uniqueKey: this.state.replies.length + 1, replyText, currentTimeDate};
    console.log(reply.uniqueKey);

    this.setState({ replies: this.state.replies.concat([reply]) });
  }
  
  _displayModal(index){
    this.setState( { selectedReplyIndex: index } );
  }
  
  _hideModal() {
    this.setState( { selectedReplyIndex: null } );    
  }
  
  _deleteReply(indexToDelete){
    console.log(indexToDelete);
    this._hideModal();
    const replies = this.state.replies.filter( (reply, index) => {
      return index !== indexToDelete;
    });    
    
    this.setState( { replies });
  }
}

/*=========== REPLY FORM ============*/
class ReplyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { replyText: '' };
  }
  
  render() {
    return(
      <div className="reply-form">
        <form>
          <textarea 
            required
            minLength="1"
            type='text' 
            placeholder='Write a reply...' 
            value={this.state.replyText}
            onChange={this._handleChange.bind(this)}
            onKeyPress={this._handleKeyPress.bind(this)}>
          </textarea>
        </form>
      </div>
    );
  }
  
  _handleKeyPress(event) {
    const regex = RegExp('.');
    let replyText = this.state.replyText;
    const hasContent = regex.test(replyText);
    if(hasContent && event.key == 'Enter' && !event.shiftKey) { 
      event.preventDefault();
      this._handleSubmit(event);
      event.target.blur();
    }
  }
  
  _handleChange(event) {
    console.log(event.target.value.length);
    this.setState({ replyText: event.target.value });
  }
  
  _handleSubmit(event) {
    event.preventDefault();
    
    let replyText = this.state.replyText; 
    let currentTimeDate = new Date();
    this.props.addReply(replyText, currentTimeDate);
    
    this.setState({ replyText: '' });
  }
}

/*============= REPLY ==============*/
class Reply extends React.Component {
  componentDidUpdate() {
    this.node.scrollIntoView({block: "end", behavior: "smooth"});
  }
  
  render() {
    const d = this.props.currentTimeDate;
    const optDate = {month: 'short', day: "numeric", year: "numeric"};
    const optTime = {hour: 'numeric', minute: '2-digit', second: '2-digit'};
    const currentDate = d.toLocaleDateString('en-US', optDate);
    const currentTime = d.toLocaleTimeString('en-US', optTime); 
    const userName = 'Anon1111';
    {/*const imgScr = 'https://www.dropbox.com/s/zy3vhwod43n7dl7/people-200-200.jpg?raw=1'*/}
    
    return(
      <article className='reply'
              ref={node => this.node = node}>
        {/*<img className='avatar' src={imgScr} />*/}
        <pre>
          <p>{this.props.replyText}</p>
        </pre>
        <footer>
          <div>
            <span>{userName} &nbsp;|&nbsp;</span>
            <time>{currentDate} &nbsp; {currentTime} </time>
          </div>
            <a onClick={this._handleClick.bind(this)} role="button">
              <i className="fas fa-trash" title="Delete reply"></i>
          </a>
          {this.props.isModalDisplayed && (
            <Modal 
              hideModal={this.props.hideModal}
              deleteReply={this.props.deleteReply}/>
          )}
        </footer>  
      </article>      
    )
  }
  
  _handleClick(event){
    event.preventDefault();
    this.props.displayModal();
  }
}

/*============= Modal ==============*/

class Modal extends React.Component {
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

ReactDOM.render (
  <App />, document.getElementById('app')
);
