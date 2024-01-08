import React from 'react';
import { Link } from 'react-router-dom';

const ProfileDashboard = () => {
  const savedGraphsData = [
    { id: 1, title: 'Graph 1', date: '2022-01-10', preview: 'Preview Image 1' },
    { id: 2, title: 'Graph 2', date: '2022-01-11', preview: 'Preview Image 2' },
    // Add more graphs as needed
  ];

  const GraphListItem = ({ graph }) => (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{graph.title}</h5>
        <p className="card-text">Date: {graph.date}</p>
        <img src={graph.preview} alt={`Preview of ${graph.title}`} className="img-fluid" />
      </div>
    </div>
  );

  return (
    <div className="container mt-5 text-white p-4">
      <div className="user-details  text-white p-4 mb-4" style={{backgroundColor:" rgb(40, 40, 46)"}}>
        <h2 className='text-center' style={{}}>User Profile Details</h2>
        <div className="user-info d-flex align-items-center">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="Profile" className="rounded-circle mr-3" style={{ width: '100px', height: '130px'}} />
          <div className='text-start'>
            <p className="mb-1">Name: John Doe</p>
            <p className="mb-1">Email: john.doe@example.com</p>
            <p className="mb-1">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nisl pulvinar maximus.</p>
          </div>
        </div>
        <div className="account-details mt-3" >
          <p>Subscription Plan: Premium</p>
          <p>Status: Active</p>
        </div>
      </div>


      <div className="usage-metrics text-white p-4 mb-4"  style={{backgroundColor:" rgb(40, 40, 46)"}}>
        <h2>Usage Metrics</h2>
        <div className="metrics-info">
          <p>Graphs Created: 20</p>
          <p>Graphs Shared: 10</p>
          <p>Papers Collected: 30</p>
        </div>
      </div>

      <div className="recent-activity  text-white p-4 mb-4"  style={{backgroundColor:" rgb(40, 40, 46)"}}>
        <h2>Recent Activity Feed</h2>
        <div className="activity-feed">
          {/* Display recent graphs, collections, queries, etc. */}
        </div>
      </div>

      <div className="saved-graphs  text-white p-4 mb-4"  style={{backgroundColor:" rgb(40, 40, 46)"}}>
        <h2>Saved Graphs</h2>
        <div className="graph-list">
          {savedGraphsData.map((graph) => (
            <GraphListItem key={graph.id} graph={graph} />
          ))}
        </div>
      </div>

      <div className="action-buttons mb-4">
      <Link to="/create" className="btn btn-outline-primary text-white mx-2">
          Create New Graph
        </Link>
        <button className="btn btn-outline-primary text-white mx-2">Share Graphs</button>
        <button className="btn btn-outline-primary text-white mx-2">Upload Papers</button>
      </div>

      <div className="saved-graphs  text-white p-4 mb-4"  style={{backgroundColor:" rgb(40, 40, 46)"}}>
        <h2>Saved Graphs</h2>
        <div className="graph-list">
          {/* Display list of saved graphs with title, date, preview */}
        </div>
      </div>

      <div className="links  text-white p-4 mb-4"  style={{backgroundColor:" rgb(40, 40, 46)"}}>
        <p>
          <a href="#/" className="text-white">Favourites</a>
        </p>
        <p>
          <a href="#/" className="text-white">Collections</a>
        </p>
      </div>
    </div>
  );
};

export default ProfileDashboard;






// // ProfileDashboard.js

// import React from 'react';
// // import './ProfileDashboard.css'; // Import your Tailwind CSS here

// const ProfileDashboard = () => {
//   const savedGraphsData = [
//     { id: 1, title: 'Graph 1', date: '2022-01-10', preview: 'Preview Image 1' },
//     { id: 2, title: 'Graph 2', date: '2022-01-11', preview: 'Preview Image 2' },
//     // Add more graphs as needed
//   ];
  
//   const GraphListItem = ({ graph }) => (
//     <div className="card mb-3">
//       <div className="card-body">
//         <h5 className="card-title">{graph.title}</h5>
//         <p className="card-text">Date: {graph.date}</p>
//         <img src={graph.preview} alt={`Preview of ${graph.title}`} className="img-fluid" />
//       </div>
//     </div>
//   );
  
//   return (
//     <div className="profile-dashboard">

// {/* 
// <div>
//       <h2>User Profile Details</h2>
//       {/* Display user details, subscription plan, etc. */}
//       {/* <h2>Usage Metrics</h2> */}
//       {/* Display graphs created, graphs shared, papers collected, etc. */}
//       {/* Other sections for recent activity feed, saved graphs, etc. */}
//     {/* </div> */} 
      
//       <div className="user-details">
//         <h2>User Profile Details</h2>
//         <div className="user-info">
//           <img src="profile.jpg" alt="Profile" />
//           <div>
//             <p>Name: John Doe</p>
//             <p>Email: john.doe@example.com</p>
//           </div>
//         </div>
//         <div className="account-details">
//           <p>Subscription Plan: Premium</p>
//           <p>Status: Active</p>
//         </div>
//       </div>

//       <div className="usage-metrics">
//         <h2>Usage Metrics</h2>
//         <div className="metrics-info">
//           <p>Graphs Created: 20</p>
//           <p>Graphs Shared: 10</p>
//           <p>Papers Collected: 30</p>
//         </div>
//       </div>

//       <div className="recent-activity">
//         <h2>Recent Activity Feed</h2>
//         <div className="activity-feed">
//         <div className="saved-graphs">
//         <h2>Saved Graphs</h2>
//         <div className="graph-list">
//           {savedGraphsData.map((graph) => (
//             <GraphListItem key={graph.id} graph={graph} />
//           ))}
//         </div>
//       </div>
//       {/* ... (remaining sections) */}
//         </div>
//       </div>

//       <div className="action-buttons">
//         <button>Create New Graph</button>
//         <button>Share Graphs</button>
//         <button>Upload Papers</button>
//       </div>

//       <div className="saved-graphs">
//         <h2>Saved Graphs</h2>
//         <div className="graph-list">
//           {/* Display list of saved graphs with title, date, preview */}
//         </div>
//       </div>

//       <div className="links">
//         <p>
//           <a href="#/">Favourites</a>
//         </p>
//         <p>
//           <a href="#/">Collections</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProfileDashboard;
