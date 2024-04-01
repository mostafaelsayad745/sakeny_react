// ChatPage.tsx
import React, { useState, useEffect, FC } from 'react';
import {HubConnectionBuilder} from '@microsoft/signalr';
import { useLocation } from 'react-router-dom';

interface UserChatTbl {
    UserChatId: number;
    UserChatDate: Date | null;
    UserChatTime: string | null;
    UserChatType: string | null;
    UserChatText: string;
    UserChatImage: string | null;
    UserChatFrom: string | null;
    UserChatTo: string | null;
}


const ChatPage: FC = () => {
    const [message, setMessage] = useState<string>('');
    const [chatHistory, setChatHistory] = useState<UserChatTbl[]>([]);
    const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const senderName = params.get('sender');
    const receiverName = params.get('receiver');

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl("https://localhost:7080/chat") 
            .build();

        setConnection(newConnection);
    }, []);
    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => {
                    console.log('Connected!');

                    connection.invoke('SendChatHistory', senderName, receiverName , connection.connectionId);

                    connection.on('ReceiveChatHistory', messages => {
                        setChatHistory(messages);
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection, senderName, receiverName]);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => connection.invoke('SendChatHistory', senderName, receiverName))
                .catch(err => console.log(err));
    
            connection.on('ErrorMessage', (message: string) => {
                console.error('Error:', message);
            });
            connection.on('ReceiveChatHistory', (history: UserChatTbl[]) => {
                console.log('ReceiveChatHistory event triggered. Received history:', history);
                setChatHistory(history);
                const lastMessage = history[history.length - 1];
            });
    
            connection.on('ReceiveMessage', (sender: string, message: string) => {
                if (receiverName) {
                    setChatHistory(prevHistory => [...prevHistory, { UserChatFrom: sender, UserChatTo: receiverName, UserChatText: message, UserChatDate: new Date(), UserChatId: prevHistory.length + 1, UserChatTime: null, UserChatType: null, UserChatImage: null }]);
                }
            });
    
            return () => {
                connection.stop();
            };
        }
    }, [connection, receiverName]);

    const sendMessage = async () => {
        if (connection) {
            await connection.invoke('SendMessage', senderName, receiverName, message);
            setMessage('');
        }
    };

    return (
        <div>
             <div>
                {chatHistory.map((message, index) => (
                    
                    <div key={index}>
                        
                        <p>Message: {message.UserChatText}</p>
                        
                    </div>
                ))}
            </div>
            <form onSubmit={e => { e.preventDefault(); sendMessage(); }}>
                <label>
                    Message:
                    <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
                </label>
                <input type="submit" value="Send Message" />
            </form>
            
        </div>
    );
};

export default ChatPage;