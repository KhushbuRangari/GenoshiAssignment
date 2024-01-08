import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileDashboard from './components/ProfileDashboard';
import CreateGraphPage from './components/CreateGraphPage';
import GraphDetailsPage from './components/GraphDetailsPage';
import AccountSettingsPage from './components/AccountSettingsPage';
import PricingPage from './components/PricingPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<ProfileDashboard />} />
          <Route path="/create" element={<CreateGraphPage />} />
          <Route path="/graph/:id" element={<GraphDetailsPage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
