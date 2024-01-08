import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const CreateGraphForm = () => {
  const [graphData, setGraphData] = useState({
    title: '',
    description: '',
    selectedPapers: [],
    graphSettings: {
      layout: 'default',
      colors: 'blue',
      chartType: 'bar', // Default chart type is bar
      // Add more settings as needed
    },
  });

  const dummyGraphData = [
    { id: 1, title: 'Class 9', description: 'School', layout: 'grid', colors: 'green', chartType: 'bar' },
    { id: 2, title: 'Class 8', description: 'School', layout: 'default', colors: 'red', chartType: 'line' },
    { id: 3, title: 'Class 7', description: 'School', layout: 'pie', colors: 'blue', chartType: 'radar' },
    { id: 4, title: 'Class 6', description: 'School', layout: 'pie', colors: 'blue', chartType: 'radar' },
    // Add more dummy data with different settings
  ];

  const chartRef = React.createRef();

  useEffect(() => {
    // Create a chart using Chart.js
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: graphData.graphSettings.chartType,
      data: {
        labels: dummyGraphData.map((graph) => graph.title),
        datasets: [{
          label: 'Attendence(year)',
          data: dummyGraphData.map((graph) => Math.floor(Math.random() * 100)), // Use random data for demo
          backgroundColor: graphData.graphSettings.colors,
        }],
      },
    });

    // Cleanup chart on component unmount
    return () => {
      myChart.destroy();
    };
  }, [dummyGraphData, graphData.graphSettings.colors, graphData.graphSettings.chartType]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send data to the server
    console.log('Form submitted:', graphData);

    // Reset the form after submission (clear the data)
    setGraphData({
      title: '',
      description: '',
      selectedPapers: [],
      graphSettings: {
        layout: 'default',
        colors: 'lightblue',
        chartType: 'bar',
      },
    });
  };

  const handleInputChange = (field, value) => {
    if (field === 'title' || field === 'description') {
      setGraphData({
        ...graphData,
        [field]: value,
      });
    } else {
      setGraphData({
        ...graphData,
        graphSettings: {
          ...graphData.graphSettings,
          [field]: value,
        },
      });
    }
  };
  

  const handleFileInputChange = (e) => {
    // Handle file input change and update selectedPapers
    const files = e.target.files;
    setGraphData({
      ...graphData,
      selectedPapers: Array.from(files),
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-white">Create New Graph</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Graph Title and Description */}
        <div className="form-group">
          <label htmlFor="graphTitle">Graph Title</label>
          <input
            type="text"
            className="form-control"
            id="graphTitle"
            placeholder="Enter graph title"
            value={graphData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="graphDescription">Graph Description</label>
          <textarea
            className="form-control"
            id="graphDescription"
            rows="3"
            placeholder="Enter graph description"
            value={graphData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          ></textarea>
        </div>

        {/* Upload Papers or Select from Favorites/Collections */}
        <div className="form-group">
          <label>Upload Papers</label>
          <input
            type="file"
            className="form-control-file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileInputChange}
            multiple
          />
        </div>

        {/* Configure Graph Settings */}
        <div className="form-group">
          <label>Configure Graph Settings</label>
          <div>
            <label>Layout:</label>
            <select
              className="form-control"
              value={graphData.graphSettings.layout}
              onChange={(e) => handleInputChange('layout', e.target.value)}
            >
              <option value="default">Default</option>
              <option value="grid">Grid</option>
              {/* Add more layout options as needed */}
            </select>
          </div>
          <div>
            <label>Colors:</label>
            <input
              type="text"
              className="form-control"
              value={graphData.graphSettings.colors}
              onChange={(e) => handleInputChange('colors', e.target.value)}
            />
          </div>
          <div>
            <label>Chart Type:</label>
            <select
              className="form-control"
              value={graphData.graphSettings.chartType}
              onChange={(e) => handleInputChange('chartType', e.target.value)}
            >
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
              <option value="radar">Radar Chart</option>
              <option value="pie">Pie Chart</option>
              {/* Add more chart types as needed */}
            </select>
          </div>
        </div>

        {/* Graph Visualization Preview (Optional) */}
        <div className="mb-4" style={{backgroundColor:" rgb(40, 40, 46)",width:"70%",height:"70%"}}>
          <canvas ref={chartRef}></canvas>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Create Graph
        </button>

        {/* Dummy Data Display */}
        {/* <div className="mt-4">
          <h3>Dummy Data:</h3>
          {dummyGraphData.map((graph) => (
            <div key={graph.id} className="mb-3">
              <p>Title: {graph.title}</p>
              <p>Description: {graph.description}</p>
              <p>Layout: {graph.layout}</p>
              <p>Colors: {graph.colors}</p>
              <p>Chart Type: {graph.chartType}</p>
            </div>
          ))}
        </div> */}
      </form>
    </div>
  );
};

export default CreateGraphForm;
