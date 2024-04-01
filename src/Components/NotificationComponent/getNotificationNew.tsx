import React, { useEffect } from 'react';
import * as signalR from '@microsoft/signalr';
import { useParams } from 'react-router-dom';

const NotificationComponent: React.FC = () => {
    
    useEffect(() => {
         // Replace 'your_user_id' with the actual user ID

        const connection = new signalR.HubConnectionBuilder()
            .withUrl(`https://localhost:7080/notification`)
            .build();

       

        connection.on("ReceiveNotification", function (message ) {
            // Display the notification message
            console.log(message);
            alert(message);
        });

      
        // Clean up on unmount
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