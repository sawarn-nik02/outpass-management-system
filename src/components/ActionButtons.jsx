import React from 'react';
import PropTypes from 'prop-types';

const ActionButtons = ({ onCreate, onLog, onSettings, onLogout }) => {
  return (
    <div className="action-buttons">
      <button onClick={onCreate}>Create</button>
      <button onClick={onLog}>Log</button>
      <button onClick={onSettings}>Settings</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

ActionButtons.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onLog: PropTypes.func.isRequired,
  onSettings: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default ActionButtons;