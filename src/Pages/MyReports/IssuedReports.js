import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IssuedReportsById = () => {
  const [issuedReports, setIssuedReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedReportIds, setExpandedReportIds] = useState({});

  useEffect(() => {
    const fetchIssuedReports = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3001/report/fetchIssuedReports', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming token is stored in localStorage
          },
        });
        setIssuedReports(response.data.issuedReports);
      } catch (error) {
        console.error('Error fetching issued reports:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIssuedReports();
  }, []);

  const toggleDescription = (reportId) => {
    setExpandedReportIds((prev) => ({
      ...prev,
      [reportId]: !prev[reportId],
    }));
  };

  const handleCancelReport = async (reportId) => {
    try {
      const response = await axios.delete(`http://localhost:3001/report/cancelIssuedReport/${reportId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert(response.data.message); // Notify user of success
      setIssuedReports((prev) => prev.filter(report => report._id !== reportId)); // Remove canceled report from the list
    } catch (error) {
      console.error('Error canceling report:', error);
      alert('Failed to cancel the report. Please try again.'); // Notify user of failure
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Issued Reports</h1>

      {loading ? (
        <p className="text-gray-500 text-center">Loading issued reports...</p>
      ) : issuedReports.length === 0 ? (
        <p className="text-gray-500 text-center">No issued reports found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {issuedReports.map((report) => (
            <div key={report._id} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 w-full md:w-80 lg:w-96">
              <h2 className="text-xl font-bold text-green-600 mb-3">{report.wasteType}</h2>

              <p className={`text-gray-700 overflow-hidden ${expandedReportIds[report._id] ? '' : 'line-clamp-3'}`}>
                {report.description}
              </p>

              <button
                className="text-blue-500 hover:underline mb-4"
                onClick={() => toggleDescription(report._id)}
              >
                {expandedReportIds[report._id] ? 'Show Less' : 'Show More'}
              </button>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-800">Address:</h3>
                <p className="text-gray-600">{report.address.city}, {report.address.state}, {report.address.pincode}</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-800">Harmful Level:</h3>
                <p className={`text-gray-600 font-semibold ${report.harmfulLevel === 'High' ? 'text-red-600' : report.harmfulLevel === 'Moderate' ? 'text-yellow-600' : 'text-green-600'}`}>
                  {report.harmfulLevel}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {report.images.map((image) => (
                  <img
                    key={image._id}
                    src={image.url}
                    alt="Report Image"
                    className="w-24 h-24 object-cover rounded-lg shadow-sm"
                  />
                ))}
              </div>

              <a
                href={report.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Location
              </a>

              <p className="text-gray-500 text-sm mt-2">Issued on: {new Date(report.issuedDate).toLocaleDateString()}</p>

              <div className="flex justify-between mt-4">
                <button
                  className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
                  onClick={() => handleCancelReport(report._id)}
                >
                  Cancel Report
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IssuedReportsById;
