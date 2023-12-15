import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);
  
  if (!user) return <div>USer not found</div>
  return (

    <div>
      <h1>In the Profile Section</h1>
      <h2>Welcome: {user.Username}</h2>
       
    </div>
  );
};

export default Profile;
