
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  config  from '../../config';

interface Post {
    // Define the structure based on your API response
    id: number;
    title: string;
    body: string;
}

export const GetPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`${config.baseURL}/api/posts`);
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};
