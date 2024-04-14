import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useFetchPost } from '../../hooks/postsHooks';
import { Link } from 'react-router-dom';
import { useFetchPictures } from '../../hooks/picturesHooks';
import { useFetchPostFeedbacks, useAddPostFeedback } from '../../hooks/PostFeedbackHooks';

export default function PostDetails() {
  const params = useParams<{ userId: string, postId: string }>();
  const location = useLocation();
  const navigate = useNavigate();




  const GetPost = useFetchPost(Number(params.userId), Number(params.postId));
  if (!GetPost.data) {
    return <div>this post is no longer avaiable !</div>;
  }
  console.log(GetPost);

  // const { data: pictures, isLoading: picturesLoading } = useFetchPictures(Number(params.postId));

  // if ( picturesLoading) {
  //   return <div>Loading...</div>;
  // }





  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>{GetPost.data?.postTitle}</h2>
          <p>{GetPost.data?.postBody}</p>
          <p>Category: {GetPost.data?.postCategory}</p>
          <p>Area: {GetPost.data?.postArea} sqft</p>
          <p>Kitchens: {GetPost.data?.postKitchens}</p>
          <p>Bedrooms: {GetPost.data?.postBedrooms}</p>
          <p>Bathrooms: {GetPost.data?.postBathrooms}</p>
          <p>Sea view: {GetPost.data?.postLookSea ? 'Yes' : 'No'}</p>
          <p>Pets allowed: {GetPost.data?.postPetsAllow ? 'Yes' : 'No'}</p>
          <p>Price: {GetPost.data?.postPriceDisplay} {GetPost.data?.postCurrency}</p>
          <p>Address: {GetPost.data?.postAddress}, {GetPost.data?.postCity}, {GetPost.data?.postState}</p>
          <p>Floor: {GetPost.data?.postFloor}</p>
          {/* <div>
            {pictures.map((picture, index) => (
              <img key={index} src={picture} alt={`Picture ${index + 1}`} />
            ))}
          </div> */}

          <button onClick={() => navigate('/SenderReceiverForm', { state: { senderUserId: params.userId, receiverUserId: localStorage.getItem('userid') } })}>
            chat
          </button>
        </div>
      </div>
    </div>
  )
}
