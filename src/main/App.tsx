import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatForm from '../Components/Chat/chatEntriy';
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { Col, Container, Row } from "react-bootstrap";
import WaitingRoom from "../Components/ChatComponents/waitingroom";
import UsersList from '../Components/UsersComponent/getAllUsers';
import { QueryClient, QueryClientProvider } from "react-query";
import FetchUserNotifications from "../Components/NotificationsComponent/getNotification";
import CreatePost from "../Components/postComponent/AddNewPost";
import FetchPostDetails from "../Components/postComponent/getAllPosts";
import AddPost from "../Components/postComponent/AddPost";
import DeletePost from "../Components/postComponent/DeletePost";
import SenderReceiverForm from '../Components/ChatComponent/SenderReceiverForm';
import ChatPage from '../Components/ChatComponent/ChatPage';
import NotificationComponent from '../Components/NotificationComponent/getNotificationNew';
import ImageList from '../Components/PicturesComponent/getPictures';
import Header from './Header';




function App() {




  return (
    <>
      <div className='container'>
        <Header subtitle='Chat Application' />
        <UsersList/>



        <Router>

          <Routes>
            <Route path="/" Component={SenderReceiverForm} />
            <Route path="/chat" Component={ChatPage} />
            <Route path='/Notifiactions' Component={NotificationComponent} />
            <Route path='/images' Component={ImageList} />
          </Routes>

        </Router>
      </div>
    </>
  );
}

export default App;
