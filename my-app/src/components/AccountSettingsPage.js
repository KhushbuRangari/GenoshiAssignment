import React, { useState } from 'react';

const AccountSettingsPage = () => {
  // Sample data for user profile
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePhoto: 'https://placekitten.com/200/200', // Sample profile photo URL
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });

  // Sample data for subscription plan
  const [subscriptionPlan, setSubscriptionPlan] = useState({
    currentPlan: 'Pro',
    planStatus: 'Active',
  });

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Add logic to handle profile update
    console.log('Profile updated:', userProfile);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Add logic to handle password change
    console.log('Password changed');
  };

  const handleSubscriptionUpdate = (e) => {
    e.preventDefault();
    // Add logic to handle subscription update
    console.log('Subscription updated:', subscriptionPlan);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-white">Account Settings Page</h2>
      <div className="card">
        <div className="card-body">
          {/* User Profile Section */}
          <div className="mb-4">
            <h3>User Profile</h3>
            <form onSubmit={handleProfileUpdate}>
              <div className="form-group">
                <label htmlFor="userName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  value={userProfile.name}
                  onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  value={userProfile.email}
                  onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userBio">Bio</label>
                <textarea
                  className="form-control"
                  id="userBio"
                  rows="3"
                  value={userProfile.bio}
                  onChange={(e) => setUserProfile({ ...userProfile, bio: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Update Profile
              </button>
            </form>
          </div>
    <div className="d-flex justify-content-between align-items-center mb-4" style={{width:"54%"}}>
         {/* Password Change Section */}
         <div className="mb-4">
            <h3>Password Change</h3>
            <form onSubmit={handlePasswordChange}>
              {/* Add form elements for password change */}
              <button type="submit" className="btn btn-primary">
                Change Password
              </button>
            </form>
          </div>

          {/* Subscription Section */}
          <div className=" mb-4">
            <h3>Subscription</h3>
            <form onSubmit={handleSubscriptionUpdate}>
              {/* Display current subscription plan and status */}
              <p>
                Current Plan: {subscriptionPlan.currentPlan} | Status: {subscriptionPlan.planStatus}
              </p>
              {/* Add form elements for subscription update */}
              <button type="submit" className="btn btn-primary">
                Update Subscription
              </button>
            </form>
          </div>
    </div>
         
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
