import React, { useState, useEffect } from 'react';
import { PostForCreationDto } from '../../Types';
import axios from 'axios';
import config from '../../config';



interface Props {
    userId: number;
    postId: number;
}

const FetchPostDetails: React.FC<Props> = ({ userId, postId }) => {
    const [postDetails, setPostDetails] = useState<PostForCreationDto | null>(null);

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const response = await axios.get(`${config.baseURL}/api/users/${userId}/posts/${postId}`);
                setPostDetails(response.data);
            } catch (error) {
                console.error('Failed to fetch post details:', error);
            }
        };

        fetchPostDetails();
    }, [userId, postId]);

    if (!postDetails) return <div>Loading...</div>;

    return (
        <div>
            <h2>{postDetails.postTitle}</h2>
            <p>{postDetails.postCity}</p>
            {/* Display other relevant details */}
        </div>
    );
};

export default FetchPostDetails;
