import React, { useState } from 'react';

function SettingsModal({ onClose, user }) {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    twoFactor: false
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-6">
        <div className="flex justify-between rounded-3xl items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
        </div>
        
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-gray-800 mb-2">Account Information</p>
            <p className="text-gray-600">Name: {user.name}</p>
            <p className="text-gray-600">ID: {user.id}</p>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>

          <hr className="my-4" />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-gray-700 font-semibold">Push Notifications</label>
              <button
                onClick={() => handleToggle('notifications')}
                className={`w-12 h-6 rounded-full transition ${
                  settings.notifications ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-white transition transform ${
                  settings.notifications ? 'translate-x-6' : 'translate-x-0.5'
                }`}></div>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-gray-700 font-semibold">Email Alerts</label>
              <button
                onClick={() => handleToggle('emailAlerts')}
                className={`w-12 h-6 rounded-full transition ${
                  settings.emailAlerts ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-white transition transform ${
                  settings.emailAlerts ? 'translate-x-6' : 'translate-x-0.5'
                }`}></div>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-gray-700 font-semibold">Two-Factor Auth</label>
              <button
                onClick={() => handleToggle('twoFactor')}
                className={`w-12 h-6 rounded-full transition ${
                  settings.twoFactor ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-white transition transform ${
                  settings.twoFactor ? 'translate-x-6' : 'translate-x-0.5'
                }`}></div>
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Save & Close
        </button>
      </div>
    </div>
  );
}

export default SettingsModal;