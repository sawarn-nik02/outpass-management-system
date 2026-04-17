import React from 'react';

const cardStyle = { borderRadius: '1.5rem' };

const ActionButtons = ({ onCreate, onLog, onSettings, onLogout }) => {
  return (
    <div className="flex flex-col gap-5">
      {/* Log + Settings */}
      <div className="flex gap-5">
        <button
          onClick={onLog}
          style={cardStyle}
          className="flex-1 bg-white border border-gray-200 flex flex-col items-center justify-center py-6 hover:bg-gray-50 transition shadow-md"
        >
          <i className="fa-solid fa-circle-info text-4xl text-gray-800"></i>
          <span className="mt-2 text-gray-800 font-semibold text-base">Log</span>
        </button>
        <button
          onClick={onSettings}
          style={cardStyle}
          className="flex-1 bg-white border border-gray-200 flex flex-col items-center justify-center py-6 hover:bg-gray-50 transition shadow-md"
        >
          <i className="fa-solid fa-gear text-4xl text-gray-800"></i>
          <span className="mt-2 text-gray-800 font-semibold text-base">Settings</span>
        </button>
      </div>

      {/* Log out */}
      <div className="flex gap-5">
        <button
          onClick={onLogout}
          style={{ ...cardStyle, maxWidth: 'calc(50% - 6px)' }}
          className="flex-1 bg-white border border-gray-200 flex flex-col items-center justify-center py-6 hover:bg-red-50 transition shadow-md"
        >
          <i className="fa-solid fa-arrow-right-from-bracket text-4xl text-red-500"></i>
          <span className="mt-2 text-red-500 font-semibold text-base">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
