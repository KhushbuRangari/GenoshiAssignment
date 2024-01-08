import React from 'react';

const GraphDetailsPage = ({ match }) => {
  // Sample data for a graph
  const sampleGraph = {
    id: match.params.id,
    title: 'Sample Graph Title',
    description: 'This is a sample graph description.',
    dateCreated: '2022-01-08', // Replace with actual date
    thumbnail: 'https://placekitten.com/200/200', // Replace with actual thumbnail URL
    papers: [
      { id: 1, title: 'Paper 1', author: 'Author 1', abstract: 'Abstract for Paper 1' },
      { id: 2, title: 'Paper 2', author: 'Author 2', abstract: 'Abstract for Paper 2' },
      // Add more papers as needed
    ],
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Graph Details Page</h2>
      <div className="card">
        <div className="card-body">
          <p className="card-text">Graph ID: {sampleGraph.id}</p>
          <h3 className="card-title">{sampleGraph.title}</h3>
          <p className="card-text">{sampleGraph.description}</p>
          <p className="card-text">
            <small className="text-muted">Date Created: {sampleGraph.dateCreated}</small>
          </p>

          {/* Thumbnail Section */}
          <div className="thumbnail-section">
            <img src={sampleGraph.thumbnail} alt="Graph Thumbnail" className="img-thumbnail" />
          </div>

          {/* Papers Section */}
          <div>
            <h4 className="mt-4">Papers in the Graph:</h4>
            <ul className="list-group">
              {sampleGraph.papers.map((paper) => (
                <li key={paper.id} className="list-group-item">
                  <strong>{paper.title}</strong> - {paper.author}
                  <p>{paper.abstract}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional details and edit button */}
          <div className="additional-details mt-4">
            <h4>Additional Details:</h4>
            {/* Add more details as needed */}
          </div>

          {/* Edit Button */}
          <button className="btn btn-primary mt-3">Edit Graph</button>
        </div>
      </div>
    </div>
  );
};

export default GraphDetailsPage;
