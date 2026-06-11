import AddRoomForm from '@/components/AddRoomForm';
import React from 'react';

const AddRoomPage = () => {
    return (
        <div>
            <h2>Add a New Room</h2>
            <p>Share your study room with others. You can edit or remove it any time.</p>

            <AddRoomForm />

        </div>
    );
};

export default AddRoomPage;