// SenderReceiverForm.tsx
import React, { useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';

const SenderReceiverForm: FC = () => {
    const [senderName, setSenderName] = useState<string>('');
    const [receiverName, setReceiverName] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/chat?sender=${senderName}&receiver=${receiverName}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Sender Name:
                <input type="text" value={senderName} onChange={e => setSenderName(e.target.value)} />
            </label>
            <label>
                Receiver Name:
                <input type="text" value={receiverName} onChange={e => setReceiverName(e.target.value)} />
            </label>
            <input type="submit" value="Next" />
        </form>
    );
};

export default SenderReceiverForm;