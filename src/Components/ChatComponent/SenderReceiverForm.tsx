// SenderReceiverForm.tsx
import React, { useState, FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchUser } from '../../hooks/usersHooks';

const SenderReceiverForm: FC = () => {
    const [senderName, setSenderName] = useState<string>('');
    const [receiverName, setReceiverName] = useState<string>('');
    const navigate = useNavigate();
    const location = useLocation();
    const { senderUserId, receiverUserId } = location.state;
    console.log(senderUserId, receiverUserId);

    const { data: senderUser } = useFetchUser(senderUserId);
    const { data: receiverUser } = useFetchUser(receiverUserId);

    useEffect(() => {
        if (senderUserId === receiverUserId) {
            alert("You can't message yourself");
        } else {
            if (senderUser) {
                setSenderName(senderUser.userName ?? '');
            }
            if (receiverUser) {
                setReceiverName(receiverUser.userName ?? '');
            }
        }
    }, [senderUserId, receiverUserId, senderUser, receiverUser]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/chat?sender=${senderName}&receiver=${receiverName}`);
    };


    return (

        <button onClick={() => navigate(`/chat?sender=${senderName}&receiver=${receiverName}`)}>
            Go to chat
        </button>
    );
};

export default SenderReceiverForm;