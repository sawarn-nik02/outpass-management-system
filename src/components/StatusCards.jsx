import React from 'react';

const cardStyle = { borderRadius: '1.5rem' };

const StatusCards = ({ punchTime, warnings, onPunchClick }) => {
  return (
    <div className="flex gap-5">
      <div
        style={cardStyle}
        className="flex-1 bg-red-600 text-white px-4 py-4 shadow-md cursor-pointer active:opacity-80"
        onClick={onPunchClick}
      >
        <p className="font-bold text-xl ml-1">Punched Out</p>
        <p className="text-base ml-1 mt-1">at {punchTime || '--:--:--'}</p>
      </div>
      <div style={cardStyle} className="flex-1 bg-white border border-gray-200 px-4 py-4 shadow-md">
        <p className="font-bold text-base text-gray-800">Offence</p>
        <p className="text-sm mt-1 text-orange-400">{warnings ?? 0} warnings</p>
      </div>
    </div>
  );
};

export default StatusCards;
