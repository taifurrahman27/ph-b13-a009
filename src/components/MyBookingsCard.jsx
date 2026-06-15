import React from 'react';

const MyBookingsCard = ({ booking }) => {
    return (
        <div>
            <h1>My Bookings Card</h1>
            <h2>My bookings card</h2>
            <p>Booking ID: {booking.id}</p>
            <p>Service: {booking.service}</p>
            <p>Date: {booking.date}</p>
        </div>
    );
};

export default MyBookingsCard;