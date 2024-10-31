// src/components/JobListings.tsx
import React from 'react';

const JobListings = () => {
  const jobs = [
    { title: 'Software Developer', company: 'TechCorp', location: 'Remote', url: '#' },
    // More job data...
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-700">Matching Job Listings</h3>
      <ul className="mt-4">
        {jobs.map((job, index) => (
          <li key={index} className="border-b border-gray-200 pb-4 mb-4">
            <h4 className="font-semibold text-gray-800">{job.title}</h4>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <a href={job.url} className="text-blue-500 hover:underline">View Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
