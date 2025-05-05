import React, { useState } from 'react';
import './TopicSearch.css';

const TopicSearch = () => {
  // Sample topic data
  const topicsData = [
    { id: 1, name: "Thermodynamics", category: "Physics" },
    { id: 2, name: "Organic Chemistry", category: "Chemistry" },
    { id: 3, name: "Calculus", category: "Mathematics" },
    { id: 4, name: "Artificial Intelligence", category: "Computer Science" },
    { id: 5, name: "Molecular Biology", category: "Biology" },
    { id: 6, name: "Quantum Mechanics", category: "Physics" },
    { id: 7, name: "Data Structures", category: "Computer Science" }
  ];

  // State for search input
  const [searchTerm, setSearchTerm] = useState('');

  // Filter topics based on search term
  const filteredTopics = topicsData.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="topic-search-container">
      <h1>TOTLE Topic Catalogue</h1>
      
      <div className="search-box">
        <input
          type="text"
          placeholder="Search topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="topics-list">
        {filteredTopics.length > 0 ? (
          filteredTopics.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.name}</h3>
              <p>Category: {topic.category}</p>
            </div>
          ))
        ) : (
          <div className="no-topics">No topics found</div>
        )}
      </div>
    </div>
  );
};

export default TopicSearch;
