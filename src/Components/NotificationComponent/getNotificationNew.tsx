import React, { useEffect } from 'react';
import * as signalR from '@microsoft/signalr';
import { useParams } from 'react-router-dom';

const NotificationComponent: React.FC = () => {
    
    useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl(`https://localhost:7080/notification`)
        .build();

    connection.on("ReceiveNotification", function (message ) {
        console.log(message);
        alert(message);
    });

    connection.start()
        .catch(function (err) {
            return console.error(err.toString());
        });

    return () => {
        connection.stop();
    };
}, []);

    return (
        <div>
            {/* Your component layout here */}
            <p>All Notifications</p>
        </div>
    );
}

export default NotificationComponent;
export { };