
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  config  from '../../config';

interface Post {
    // Define the structure based on your API response
    id: number;
    title: string;
    body: string;
}

export const GetPost = ({ postId }: { postId: number }) => {
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`${config.baseURL}/api/posts/${postId}`);
            setPost(response.data);
        };
        fetchPost();
    }, [postId]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};
