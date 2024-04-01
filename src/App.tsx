import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatForm from './Components/Chat/chatEntriy';
import {HubConnection, HubConnectionBuilder} from "@microsoft/signalr";
import {Col, Container, Row} from "react-bootstrap";
import WaitingRoom from "./Components/ChatComponents/waitingroom";
import UsersList from './Components/UsersComponent/getAllUsers';
import {QueryClient, QueryClientProvider} from "react-query";
import FetchUserNotifications from "./Components/NotificationsComponent/getNotification";
import CreatePost from "./Components/postComponent/AddNewPost";
import FetchPostDetails from "./Components/postComponent/getAllPosts";
import AddPost from "./Components/postComponent/AddPost";
import DeletePost from "./Components/postComponent/DeletePost";
import SenderReceiverForm from './Components/ChatComponent/SenderReceiverForm';
import ChatPage from './Components/ChatComponent/ChatPage';
import NotificationComponent from './Components/NotificationComponent/getNotificationNew';
import ImageList from './Components/PicturesComponent/getPictures';




function App() {
   // const [connetion , setConn] = useState(HubConnection | undefined>(undefined);

    // const [connection, setConn] = useState<HubConnection | undefined>(undefined);
    // const joinChatRoom = async (userFrom: string, userTo: string) => {

    //     try {
    //         //initiate the connection
    //         const conn = new HubConnectionBuilder()
    //             .withUrl('https://localhost:7080/chat')
    //             .configureLogging('information')
    //             .build();

    //         conn.on('JoinSpecificChatRoom', (user, message) => {
    //             console.log("msg:",message);
    //         });

    //         await conn.start();
    //         await conn.invoke('JoinSpecificChatRoom', { userFrom: userFrom, userTo: userTo });


    //         setConn(conn);
    //     }
    //     catch (e) {
    //         console.error(e);
    //     }

    // }


     const queryClient = new QueryClient();


    // const [sender, setSender] = useState('');


    // const handleSenderSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // Navigate to the chat route after setting the sender's name

    // };



  // @ts-ignore
    return (
      // <div>
      //    {/* <main>
      //         <Container>
      //             <Row class='px-5 my-5'>
      //                 <Col sm='12'>
      //                     <h1 className='font-weight-light'> welcome to chat</h1>
      //                 </Col>
      //             </Row>
      //             <WaitingRoom joinChatRoom={joinChatRoom} />
      //
      //         </Container>
      //     </main>*/}
      //
      //
      //
      //
      // </div>

      <Router>
        <QueryClientProvider client={queryClient}>3
          <Routes>
            <Route path="/" Component={SenderReceiverForm} />
            <Route path="/chat" Component={ChatPage} />
            <Route path='/Notifiactions' Component={NotificationComponent} />
            <Route path='/images' Component={ImageList} />
          </Routes>
        </QueryClientProvider>
      </Router>




        // <Router>
        // <QueryClientProvider client={queryClient}>
        //     <>
        //         <div className="App">
        //             <UsersList/>
        //             <FetchUserNotifications userId={2}/>
        //             <CreatePost userId={2}/>
        //             <FetchPostDetails userId={2} postId={2}/>
        //             <AddPost/>
        //             <DeletePost userId={2} postId={2}/>
        //         </div>
        //         <div>
        //             <h1>Chat App</h1>
        //             <form onSubmit={handleSenderSubmit}>
        //                 <input type="text" placeholder="Your name" value={sender}
        //                        onChange={e => setSender(e.target.value)}/>
        //                 <button type="submit">Set Name</button>
        //             </form>
        //             <Routes>
        //                 <Route path="/chat" element={<ChatForm sender={sender} />} />
        //             </Routes>
        //         </div>
        //     </>
        // </QueryClientProvider>
        // </Router>
    );
}

export default App;
