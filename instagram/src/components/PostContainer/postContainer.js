import React from 'react';
import dummyData from '.tests/dummy-data.js';
import CommentSection from './CommentSection/commentSection.js';

class PostContainer extends React.Component {
	render() {
		return (
			<div>
				{dummyData.map((datum, i) => <CommentSection key={i} data={datum} />)}	
			</div>
			);
	}
}

export default PostContainer;

************************************************************************************
************************************************************************************
import React from 'react';
import CommentSection from '../CommentSection/commentSection';
import './postContainer.css';

const PostContainer = ({postData}) => {
	return(
		<div className="post-container">
			<div className="thumbnail">
				<img src={postData.thumbnailUrl} />
				<span><b>{postData.username}</b></span>
			</div>
			<div className="image">
				<img src={postData.imageUrl} />
			</div>
			<CommentSection comments={postData.comments} />
		</div>
	);
}

export default PostContainer;