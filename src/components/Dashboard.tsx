// src/pages/Dashboard.tsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800">User Dashboard</h2>

      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700">Profile Summary</h3>
        <p className="mt-2 text-gray-600">Name: [User Name]</p>
        <p className="text-gray-600">Email: [User Email]</p>
        <a href="/upload" className="text-blue-500 hover:underline mt-2 block">Update Resume</a>
      </div>

      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700">Job Preferences</h3>
        <p className="mt-2 text-gray-600">Keywords: [Keywords]</p>
        <p className="text-gray-600">Location: [Location]</p>
        <p className="text-gray-600">Job Type: [Full-time/Part-time]</p>
      </div>
    </div>
  );
};

export default Dashboard;
