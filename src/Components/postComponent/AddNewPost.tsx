import React, { useState } from 'react';
import axios from 'axios';

interface Post {
    postTitle: string;
    postBody: string;
    // Include other necessary post properties
}

interface Props {
    userId: number;
}

const CreatePost: React.FC<Props> = ({ userId }) => {
    const [post, setPost] = useState<Post>({
        postTitle: '',
        postBody: '',
        // Initialize other fields as needed
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post(`/api/users/${userId}/posts`, post);
            alert('Post created successfully');
            // Reset form or redirect
        } catch (error) {
            console.error('Failed to create post:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="postTitle" value={post.postTitle} onChange={handleChange} />
            </label>
            <label>
                Body:
                <textarea name="postBody" value={post.postBody} onChange={handleChange}></textarea>
            </label>
            {/* Include other fields as necessary */}
            <button type="submit">Create Post</button>
        </form>
    );
};

export default CreatePost;
