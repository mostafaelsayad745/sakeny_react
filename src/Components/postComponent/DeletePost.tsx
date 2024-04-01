
import React from 'react';
import axios from 'axios';
import config  from '../../config';

interface Props {
  userId: number;
  postId: number;
}

const DeletePost: React.FC<Props> = ({ userId, postId }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${config.baseURL}/api/users/${userId}/posts/${postId}`);
      alert('Post deleted successfully');
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete Post</button>
  );
};

export default DeletePost;
