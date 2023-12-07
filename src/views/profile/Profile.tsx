import { UserProfile } from '@clerk/clerk-react';
import { Helmet } from 'react-helmet-async';
import './Profile.css';

const UserProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Profile | Email Validation</title>
      </Helmet>
      <UserProfile />
    </>
  );
};

export default UserProfilePage;
