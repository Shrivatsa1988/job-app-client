// src/components/ResumeUpload.tsx
import React, { useState } from 'react';

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    // Logic to upload file to Azure Blob Storage
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-700">Upload Your Resume</h3>
      <input
        type="file"
        onChange={handleFileChange}
        className="mt-4 border border-gray-300 rounded p-2 w-full"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
      >
        Upload
      </button>
      {file && <p className="mt-2 text-gray-600">File ready to upload: {file.name}</p>}
    </div>
  );
};

export default ResumeUpload;
