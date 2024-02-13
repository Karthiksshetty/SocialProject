import React, { useState } from 'react';

const UploadDocument = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    // Handle file selection
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Add your file upload logic here
    } else {
      console.error('No file selected');
    }
  };

  const handlePay = () => {
    // Handle payment logic
    console.log('Paying for the document');
    // Add your payment logic here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload Document</h2>

      <div className="mb-4">
        <label htmlFor="file" className="block text-sm font-medium text-gray-700">
          Choose a file
        </label>
        <input
          type="file"
          id="file"
          className="mt-1 p-2 border rounded-md w-full"
          onChange={handleFileChange}
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleUpload}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Upload
        </button>

        <button
          onClick={handlePay}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default UploadDocument;
