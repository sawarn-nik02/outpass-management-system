import React from 'react';

const StatusCards = ({ punchInStatus, offenceWarnings }) => {
    return (
        <div className="status-cards">
            <div className="punch-in-status">
                <h2>Punch-In Status</h2>
                <p>{punchInStatus ? 'Punched In' : 'Not Punched In'}</p>
            </div>
            {offenceWarnings.length > 0 && (
                <div className="offence-warnings">
                    <h2>Offence Warnings</h2>
                    <ul>
                        {offenceWarnings.map((warning, index) => (
                            <li key={index}>{warning}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default StatusCards;