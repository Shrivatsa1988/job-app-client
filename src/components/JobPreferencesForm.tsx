// src/components/JobPreferencesForm.tsx
import React, { useState } from 'react';

const JobPreferencesForm = () => {
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = () => {
    // Logic to save preferences
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-700">Set Job Preferences</h3>
      <input
        type="text"
        placeholder="Keywords"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className="block mt-4 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="block mt-4 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="text"
        placeholder="Job Type"
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        className="block mt-4 p-2 border border-gray-300 rounded w-full"
      />
      <input
        type="text"
        placeholder="Experience Level"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className="block mt-4 p-2 border border-gray-300 rounded w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-6 hover:bg-blue-600 transition"
      >
        Save Preferences
      </button>
    </div>
  );
};

export default JobPreferencesForm;
