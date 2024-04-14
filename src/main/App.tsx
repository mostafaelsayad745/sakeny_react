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
import AuthenticationComponent from '../Components/SignIn&SignUp/SignIn';
import SignUpOwner from '../Components/SignIn&SignUp/SignUpOwner';
import Splash1 from '../Components/SignIn&SignUp/Splash1';
import Splash3 from '../Components/SignIn&SignUp/Splash3';
import Splash2 from '../Components/SignIn&SignUp/Splash2';
import Entry from '../Components/SignIn&SignUp/Entry';
import OwnerOrTenantPage from '../Components/SignIn&SignUp/OwnerOrTenantPage';
import VerificationPage from '../Components/SignIn&SignUp/VerificationPage';
import OwnerHomepage from '../Components/HomePage/OwnerHomePage';
import TenantHomepage from '../Components/HomePage/TenantHomePage';
import SignUpTenant from '../Components/SignIn&SignUp/SignUpTenant';
import PostDetails from '../Components/PostPage/PostDetails';




function App() {




  return (
    <>
      <div className='container'>
        {/* <Header subtitle='Chat Application' />
        <UsersList/> */}



        <Router>

          <Routes>
          // SignIn && SignUp
            <Route path='/' Component={Entry}/>
            <Route path='/login' Component={AuthenticationComponent}/>
            <Route path='/signupowner' Component={SignUpOwner}/>
            <Route path='/signuptenant' Component={SignUpTenant}/>
            <Route path='/splash1' Component={Splash1}/>
            <Route path='/splash2' Component={Splash2}/>
            <Route path='/splash3' Component={Splash3}/>
            <Route path='/OwnerOrTenantPage' Component={OwnerOrTenantPage}/>
            <Route path='/VerificationPage' Component={VerificationPage}/> 
          // home homepage 
            <Route path="/ownerHomepage" Component={OwnerHomepage} />
            <Route path="/tenantHomepage" Component={TenantHomepage} />
            <Route path="/:userId/details/:postId" Component={PostDetails} />

            <Route path="/SenderReceiverForm" Component={SenderReceiverForm} />
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
