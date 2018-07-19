import React from 'react';

class CommentSection extends React.Component {
	constructor() {
		super();

		this.state = {
			item: {},
			comment: {}
		};
	}

	componentDidMount() {
		this.setState({
			item: this.props.data, 
			comment: this.props.data.comments  });
	}

	render() {
		return (
			<div>
				<span>
					<img src={this.state.item.thumbnailUrl} />
					<h5>{this.state.item.username}</h5>
				</span>
				<img src={this.state.item.imageUrl} />
				<div>{this.state.item.likes} likes</div>
				<div className="users">{this.state.comment.map(function(user) {
					return (
					<div>
						<div>{user.username}</div>
						<div>{user.text}</div>
					</div>);
				} )}</div>
				<form onSubmit="" >
					<input type="text" value={} placeholder="Add a comment..." >
				</form>
			</div>
			);
	}
}

export default CommentSection;
***************************************************************************************
***************************************************************************************
import React, {Component} from 'react';

class CommentSection extends Component {
	constructor() {
		super();

		this.state = {
			comments: [],
			newComment: ''
		};
	}

	componentDidMount() {
		this.setState({ comments: this.props.comments});
	}

	addComment =(e) => {
        e.preventDefault();
        const commentObj = {
        	username: 'Sean',
        	text: this.State.newComment
        };
        const commentArray = this.state.comments;
        commentArray.push(commentObj);
        this.setState({
        	comments: commentArray,
        	newComment: ''
        });
	}

	handleCommentInput = (e) => {
		this.setState({ newComment: e.target.value});
	}

	render() {
		return (
			<div className="comment-section">
				{this.state.comments.map((comment, i) => (
					<div className="comment" key={i}>
						<div className="comment-user"><b>{comment.username}</b></div>
						<div className="comment-text">{comment.text}</div>
					</div>
				))}
				<div className="comment-input">
					<input type="text" placeholder="..." value={this.state.newComment} onChange={this.handleCommentInput} />
					<button type="submit" onClick={this.addComment}>Submit</button>
				</div>
			</div>
			);
	}
}

export default CommentSection;