import  config  from '../../config';
import React, { useEffect, useState } from 'react';

function ImageList() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`${config.baseURL}/api/posts/2/pictures`)
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Post 2 - ${index}`} />
            ))}
        </div>
    );
}

export default ImageList;