
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

const PartialUpdatePostForStatus: React.FC<Props> = ({ userId, postId }) => {
  const [operations, setOperations] = useState<PatchOperation[]>([
    { op: "replace", path: "/status", value: "" } // Example operation
  ]);

  // Add methods to manage operations

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.patch(`${config.baseURL}/api/users/${userId}/posts/${postId}/status`, operations);
      alert('Post status updated successfully');
    } catch (error) {
      console.error('Failed to update post status:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields to manage patch operations for status */}
      <button type="submit">Update Post Status</button>
    </form>
  );
};

export default PartialUpdatePostForStatus;
