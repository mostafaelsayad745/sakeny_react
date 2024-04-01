import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from "../../config";

interface Notification {
    message: string;
    // Add other relevant notification properties
}

interface Props {
    userId: number;
}

const FetchUserNotifications: React.FC<Props> = ({ userId }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`${config.baseURL}/api/users/${userId}/notifications`);
                setNotifications(response.data);
            } catch (error) {
                console.error('Failed to fetch notifications:', error);
            }
        };

        fetchNotifications();
    }, [userId]);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default FetchUserNotifications;
