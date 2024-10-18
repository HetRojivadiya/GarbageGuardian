import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IssuedReport = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImages, setSelectedImages] = useState({});
  const [showFullDescription, setShowFullDescription] = useState({});

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:3001/report/issued');
        setReports(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  // Function to handle the image click
  const handleImageClick = (reportId, imageUrl) => {
    setSelectedImages(prevState => ({
      ...prevState,
      [reportId]: imageUrl
    }));
  };

  // Function to toggle description display
  const toggleDescription = (reportId) => {
    setShowFullDescription(prevState => ({
      ...prevState,
      [reportId]: !prevState[reportId]
    }));
  };

  const getBorderColor = (level) => {
    switch (level) {
      case 'High':
        return 'border-red-500';
      case 'Moderate':
        return 'border-yellow-500';
      case 'Less':
        return 'border-green-500';
      default:
        return 'border-gray-300';
    }
  };

  if (loading) return <div className="text-center mt-10 text-xl text-blue-500 animate-pulse">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10 text-xl">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">

      <h1 className="text-5xl font-bold text-center mb-6">
        <span className="bg-emerald-950 text-white px-2 py-1 rounded-md">Issued</span>
         <span className="bg-green-400 text-emerald-950 ml-2 px-2 py-1 rounded-md">Reports!</span>
    </h1>

      {reports.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 lg:grid-cols-3 gap-6">
          {reports.map(report => (
            <div
              key={report._id}
              className={`bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl ${getBorderColor(report.harmfulLevel)} border-4`} // Border based on harmful level
            >
              {/* Large Image Container */}
              <div className="relative">
                <img
                  src={selectedImages[report._id] || report.images[0].url} // Large image or selected image
                  alt="Report"
                  className="w-full h-60 object-cover"
                />

                {/* Small Images Overlaid at Bottom Left */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {report.images.slice(0, 5).map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt={`Report Image ${index + 2}`}
                      className="w-12 h-12 object-cover rounded-lg border-2 border-white shadow-md cursor-pointer"
                      onClick={() => handleImageClick(report._id, image.url)} // Handle image click
                    />
                  ))}
                </div>

                {/* Details at Bottom Right */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white p-2 rounded-lg">
                  <h2 className="text-xl font-bold">{report.wasteType}</h2>
                  <p className="text-sm">
                    {report.address.city}, {report.address.state}, {report.address.pincode}
                  </p>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4">
              <p className={`text-gray-700 text-md ${report.description.length < 150 ? 'mb-4' : ''}`}>
                  <span className="font-semibold">Description:</span> 
                  {showFullDescription[report._id] ? report.description : `${report.description.slice(0, 150)}...`}
                </p>
                {report.description.length > 150 && (
                  <button
                    className="text-blue-500 mb-4 underline hover:text-blue-700 transition"
                    onClick={() => toggleDescription(report._id)}
                  >
                    {showFullDescription[report._id] ? 'Show Less' : 'Show More'}
                  </button>
                )}

                {/* Google Maps Link */}
                {report.locationLink && (
                  <p className="text-gray-700 mb-4 text-md">
                    <span className="font-semibold">Google Maps Link:</span>
                    <a
                      href={report.locationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline ml-2 hover:text-blue-700 transition"
                    >
                      View on Google Maps
                    </a>
                  </p>
                )}

                <p className="text-green-600 font-semibold text-md mb-4">
                  <span>Status:</span> {report.status}
                </p>
                <p className="text-gray-700 mb-4 text-md">
  <span className="font-semibold">Harmful Level:</span>
  <span className={`ml-2 px-2 py-1 ${getBorderColor(report.harmfulLevel)} border-2 rounded-lg`}>
    {report.harmfulLevel}
  </span>
</p>

                <p className="text-gray-700 mb-6 text-md">
                  <span className="font-semibold">Issued Date:</span> {new Date(report.issuedDate).toLocaleString()}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">User Info:</h3>
                <p className="text-gray-600 mb-1 text-md">
                  <span className="font-semibold">Name:</span> {report.user.name}
                </p>
                <p className="text-gray-600 text-md">
                  <span className="font-semibold">Email:</span> {report.user.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-2xl">No reports found.</p>
      )}
    </div>
  );
};

export default IssuedReport;
