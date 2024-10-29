import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Contexts/Contexts'; // Adjust the import based on your context file structure

const IssuedReport = () => {
  const { user } = useContext(AuthContext); // Access user from AuthContext
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

  const handleImageClick = (reportId, imageUrl) => {
    setSelectedImages(prevState => ({
      ...prevState,
      [reportId]: imageUrl
    }));
  };

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

  const handleAccept = async (reportId) => {
    try {
      await axios.post(`http://localhost:3001/report/acceptReport/${reportId}`, {
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
     
      // Optionally, you might want to update the state to remove the accepted report or refresh the list
      setReports(reports.filter(report => report._id !== reportId));
    } catch (err) {
      setError(err.message); // Handle any errors that occur
    }
  };

  if (loading) return <div className="text-center mt-10 text-xl text-blue-500 animate-pulse">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10 text-xl">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-4 sm:mb-6">
        <span className="bg-emerald-950 text-white px-2 py-1 rounded-md">Issued</span>
        <span className="bg-green-400 text-emerald-950 ml-2 px-2 py-1 rounded-md">Reports!</span>
      </h1>

      {reports.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 lg:grid-cols-3 gap-4 sm:gap-6">
          {reports.map(report => (
            <div
              key={report._id}
              className={`bg-white shadow-lg rounded-xl overflow-hidden ${getBorderColor(report.harmfulLevel)} border-4`}
            >
              <div className="relative">
                <img
                  src={selectedImages[report._id] || report.images[0].url}
                  alt="Report"
                  className="w-full h-40 sm:h-60 object-cover"
                />

                <div className="absolute bottom-4 left-4 flex space-x-1 sm:space-x-2">
                  {report.images.slice(0, 5).map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt={`Report Image ${index + 2}`}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg border-2 border-white shadow-md cursor-pointer"
                      onClick={() => handleImageClick(report._id, image.url)}
                    />
                  ))}
                </div>

                <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white p-2 rounded-lg">
                  <h2 className="text-lg sm:text-xl font-bold">{report.wasteType}</h2>
                  <p className="text-sm">
                    {report.address.city}, {report.address.state}, {report.address.pincode}
                  </p>
                </div>
              </div>

              <div className="p-2 sm:p-4">
                <p className={`text-gray-700 text-sm sm:text-md ${report.description.length < 150 ? 'mb-2 sm:mb-4' : ''}`}>
                  <span className="font-semibold">Description:</span>
                  {showFullDescription[report._id] ? report.description : `${report.description.slice(0, 150)}...`}
                </p>
                {report.description.length > 150 && (
                  <button
                    className="text-blue-500 mb-2 sm:mb-4 underline hover:text-blue-700 transition"
                    onClick={() => toggleDescription(report._id)}
                  >
                    {showFullDescription[report._id] ? 'Show Less' : 'Show More'}
                  </button>
                )}

                {report.locationLink && (
                  <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-md">
                    <span className="font-semibold">Google Maps Link:</span>
                    <a
                      href={report.locationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline ml-1 hover:text-blue-700 transition"
                    >
                      View on Google Maps
                    </a>
                  </p>
                )}

                <p className="text-green-600 font-semibold text-sm sm:text-md mb-2">
                  <span>Status:</span> {report.status}
                </p>
                <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-md">
                  <span className="font-semibold">Harmful Level:</span>
                  <span className={`ml-2 px-2 py-1 ${getBorderColor(report.harmfulLevel)} border-2 rounded-lg`}>
                    {report.harmfulLevel}
                  </span>
                </p>

                <p className="text-gray-700 mb-2 sm:mb-6 text-sm sm:text-md">
                  <span className="font-semibold">Issued Date:</span> {new Date(report.issuedDate).toLocaleString()}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-1">User Info:</h3>
                <p className="text-gray-600 mb-1 text-sm sm:text-md">
                  <span className="font-semibold">Name:</span> {report.user.name}
                </p>
                <p className="text-gray-600 text-sm sm:text-md">
                  <span className="font-semibold">Email:</span> {report.user.email}
                </p>
              
                {/* Conditionally render the Accept button */}
                {user && user.typeOfUser && ['Foundation & Organisation', 'Municipal Corporation'].includes(user.typeOfUser) && user.status === 'Verified' && (
  <button
    onClick={() => handleAccept(report._id)} // Implement handleAccept as needed
    className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
  >
    Accept
  </button>
)}

              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl">No reports found.</p>
      )}
    </div>
  );
};

export default IssuedReport;
