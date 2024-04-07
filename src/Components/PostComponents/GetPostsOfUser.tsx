import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {UserForCreationDto, UserForReturnDto, UserForUpdateDto , PostForReturnDto} from "../../Types";
import config from '../../config';

function UserList() {


const [users, setUsers] = useState<UserForReturnDto[]>([]);
const [posts, setPosts] = useState<PostForReturnDto[]>([]);

useEffect(() => {
    // Fetch the list of users when the component mounts
    axios.get(`${config.baseURL}/api/users`)
        .then(response => {
            setUsers(response.data);
        });
}, []);

const handleUserClick = (userId: number) => {
    // Fetch the posts for the clicked user
    const = 
    axios.get(`${config.baseURL}/api/users/${userId}/posts`)
        .then(response => {
            setPosts(response.data);
        });
};

  return (
    <div>
      <h1>Users</h1>
    {users.map(user => (
        <p key={user.userId} onClick={() => handleUserClick(user.userId!)}> 
            {user.userFullName}
        </p>
    ))}

      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.PostId}>
          <h2>{post.PostTitle}</h2>
          <p>{post.PostAddress}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
export {};