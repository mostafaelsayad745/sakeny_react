
import React, { useState } from 'react';
import axios from 'axios';
import  config  from '../../config';

export const UpdatePost = ({ postId }: { postId: number }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const post = { title, body };
        await axios.put(`${config.baseURL}/api/posts/${postId}`, post);
        // Handle response or redirect
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={body}
                onChange={e => setBody(e.target.value)}
                placeholder="Body"
            />
            <button type="submit">Update Post</button>
        </form>
    );
};
