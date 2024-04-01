
import React, { useState } from 'react';
import axios from 'axios';
import config from "../../config";
import {PostForCreationDto} from "../../Types";

 const AddPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [postCreation, setPost] = useState<PostForCreationDto>({
        postDate: undefined,
        postTime: undefined,
        postCategory: undefined,
        postTitle: undefined,
        postBody: undefined,
        postArea: undefined,
        postKitchens: undefined,
        postBedrooms: undefined,
        postBathrooms: undefined,
        postLookSea: undefined,
        postPetsAllow: undefined,
        postCurrency: undefined,
        postPriceAi: undefined,
        postPriceDisplay: undefined,
        postPriceType: undefined,
        postAddress: undefined,
        postCity: undefined,
        postState: undefined,
        postFloor: undefined,
        postLatitude: undefined,
        postLongitude: undefined,
        postStatue: undefined,
        postUserId: undefined,
        postPicTbls: undefined,
    });



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
       // const post = { title, body };
        const post ={postCreation}
        await axios.post(`${config.baseURL}/api/posts`, post);
        // Handle response or redirect
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Render your form inputs here */}
            <input
                type="text"
                value={postCreation.postAddress || ''}
                onChange={(e) => setPost({...postCreation, postAddress: e.target.value})}
                placeholder="Address"
            />
            <input
                type="text"
                value={postCreation.postTitle || ''}
                onChange={(e) => setPost({...postCreation, postTitle: e.target.value})}
                placeholder="Title"
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Body"
            />
            <button type="submit">Add Post</button>
        </form>
    );
};

 export default AddPost;
