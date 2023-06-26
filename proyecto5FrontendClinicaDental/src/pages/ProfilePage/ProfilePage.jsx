import React from 'react';
import ProfileForm from '../../common/ProfileForm/ProfileForm';
import CustomNavbar from '../../common/Navbar/Navbar';

const ProfilePage = () => {
    return (
    <div className="profile-page">
        <h1>Perfil de usuario</h1>
        <CustomNavbar />
        <ProfileForm />
    </div>
    );
};

export default ProfilePage;
