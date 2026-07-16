import ProfileClient from '@/components/ProfileClient';
import React from 'react';

export const metadata = {
    title: "Profile",
};

const page = () => {
    return (
        <div>
            <ProfileClient />
        </div>
    );
};

export default page;