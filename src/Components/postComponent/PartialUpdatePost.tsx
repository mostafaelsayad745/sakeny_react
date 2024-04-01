
import React, { useState } from 'react';
import axios from 'axios';
import  config  from '../../config';

interface PatchOperation {
  op: string;
  path: string;
  value: any;
}

interface Props {
  userId: number;
  postId: number;
}

const PartialUpdatePost: React.FC<Props> = ({ userId, postId }) => {
  const [operations, setOperations] = useState<PatchOperation[]>([]);

  // Add methods to manage operations

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.patch(`${config.baseURL}/api/users/${userId}/posts/${postId}`, operations);
      alert('Post partially updated successfully');
    } catch (error) {
      console.error('Failed to partially update post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields to manage patch operations */}
      <button type="submit">Partially Update Post</button>
    </form>
  );
};

export default PartialUpdatePost;
