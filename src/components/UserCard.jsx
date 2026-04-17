import React from 'react';

const UserCard = ({ name, rollNo, email, outpassStatus }) => {
  return (
    <div
      className="text-white p-5  rounded-3xl inline-flex flex-col w-full"
      style={{ backgroundColor: '#1f1f1f' }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: '1.8rem' }} className="uppercase mt-1">
        {name}
      </h2>
      <p style={{ fontSize: '1rem', fontWeight: 300, color: '#b8b8b8ff' }} >{rollNo}</p>
      <p style={{ fontSize: '1rem', fontWeight: 400, color: '#fff' }} >{email}</p>
      <div className="mt-4 rounded-xl p-2  text-m font-medium text-left"
        style={{ backgroundColor: '#3a3a3aff' }}>
          <p className='ml-2'>
        {'No outpass requests found'}</p>
      </div>
    </div>
  );
};

export default UserCard;
