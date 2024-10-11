import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IssuedReport = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8 text-blue-600">Issued Reports</h1>
      {reports.length > 0 ? (
        reports.map(report => (
          <div key={report._id} className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 transition transform hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Waste Type: <span className="text-blue-500">{report.wasteType}</span></h2>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Description:</span> {report.description}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Location:</span> {report.address.city}, {report.address.state}, {report.address.pincode}</p>

              {/* Google Maps Link */}
              {report.locationLink && (
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Google Maps Link:</span>
                  <a
                    href={report.locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                  >
                    View on Google Maps
                  </a>
                </p>
              )}

              <p className="text-gray-700 mb-2"><span className="font-semibold">Status:</span> <span className="text-green-500">{report.status}</span></p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Harmful Level:</span> {report.harmfulLevel}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Issued Date:</span> {new Date(report.issuedDate).toLocaleString()}</p>

              <h3 className="text-xl font-semibold mt-4 text-gray-800">User Info:</h3>
              <p className="text-gray-600 mb-1"><span className="font-semibold">Name:</span> {report.user.name}</p>
              <p className="text-gray-600"><span className="font-semibold">Email:</span> {report.user.email}</p>

              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-800">Images:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                  {report.images.map(image => (
                    <div key={image.public_id} className="relative">
                      <img
                        src={image.url}
                        alt="Report"
                        className="w-full h-40 object-cover rounded-lg shadow-md hover:opacity-90 transition duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition duration-300">
                        <p className="text-white text-sm">View Image</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No reports found.</p>
      )}
    </div>
  );
}

export default IssuedReport;
