import React from 'react';

const LogModal = ({ logs, isOpen, onClose }) => {
    return (
        <div className={`modal ${isOpen ? 'is-open' : ''}`}> 
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>Activity Log</h2>
                <ul>
                    {logs.map((log, index) => (
                        <li key={index}>{log}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LogModal;
