import React from 'react';

const PricingPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Pricing Page</h2>
      <div className="card-deck">
        {/* Basic Plan */}
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h3>Basic Plan</h3>
          </div>
          <div className="card-body">
            <h4 className="card-title">$4/month/user</h4>
            <ul className="list-group">
              <li className="list-group-item">Up to 10 graphs</li>
              <li className="list-group-item">Up to 500 chatbot queries</li>
            </ul>
            <button type="button" className="btn btn-primary mt-3">
              Select Plan
            </button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h3>Pro Plan</h3>
          </div>
          <div className="card-body">
            <h4 className="card-title">$8/month/user</h4>
            <ul className="list-group">
              <li className="list-group-item">Up to 50 graphs</li>
              <li className="list-group-item">Up to 1000 chatbot queries</li>
              <li className="list-group-item">Email + live chat support</li>
            </ul>
            <button type="button" className="btn btn-primary mt-3">
              Select Plan
            </button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h3>Enterprise Plan</h3>
          </div>
          <div className="card-body">
            <h4 className="card-title">Contact for price</h4>
            <ul className="list-group">
              <li className="list-group-item">Unlimited graphs</li>
              <li className="list-group-item">Ability to upload custom PDFs</li>
              <li className="list-group-item">24/7 phone + email support</li>
            </ul>
            <button type="button" className="btn btn-primary mt-3">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
