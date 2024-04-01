import React, { useState } from 'react';
import * as signalR from '@microsoft/signalr';

const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

interface Props{
    sender:string
}
const ChatForm : React.FC<Props>= ({ sender }) => {
    const [recipient, setRecipient] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await connection.start();
            await connection.invoke("SendMessage", sender, recipient, message);
        } catch (err) {
            console.error((err as Error).toString());
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Recipient's name" value={recipient} onChange={e => setRecipient(e.target.value)} />
            <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
            <button type="submit">Send</button>
        </form>
    );
};

export default ChatForm;