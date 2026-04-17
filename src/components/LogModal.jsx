import React from 'react';

const LogModal = ({ logs, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Activity Log</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
        </div>
        {logs.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-6">No activity yet.</p>
        ) : (
          <ul className="space-y-2 max-h-64 overflow-y-auto">
            {logs.map((log, index) => (
              <li key={index} className="text-sm text-gray-700 border-b border-gray-100 pb-2">{log}</li>
            ))}
          </ul>
        )}
        <button
          onClick={onClose}
          className="mt-5 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LogModal;
