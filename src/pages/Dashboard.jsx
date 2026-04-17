import React, { useState } from 'react';
import Header from '../components/Header';
import UserCard from '../components/UserCard';
import StatusCards from '../components/StatusCards';
import ActionButtons from '../components/ActionButtons';
import LogModal from '../components/LogModal';
import SettingsModal from '../components/SettingsModal';
import TimerScreen from '../components/TimerScreen';

const Dashboard = () => {
  const userData = JSON.parse(sessionStorage.getItem('outpassUser') || '{}');
  const user = {
    name: userData.name || 'NIKHIL KUMAR',
    rollNo: userData.rollNo || '2023BCS0045',
    email: userData.email || 'nikhil23bcs45@iitkottayam.ac.in',
    id: userData.rollNo || '2023BCS0045',
    punchTime: userData.punchTime || '--:--:--',
    startedAt: userData.startedAt || Date.now(),
  };

  const [showLog, setShowLog] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [logs] = useState([]);

  const handleLogout = () => {
    sessionStorage.removeItem('outpassUser');
    window.location.href = '/#/login';
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 flex justify-center px-5 pt-6 pb-8">
        <div className="w-full" style={{ maxWidth: 740 }}>
          <div className="flex flex-col md:flex-row gap-4">

            <div className="w-full md:w-48 md:flex-shrink-0 md:self-start">
              <UserCard
                name={user.name}
                rollNo={user.rollNo}
                email={user.email}
              />
            </div>

            <div className="flex-1 flex flex-col gap-5">
              <StatusCards punchTime={user.punchTime} warnings={0} onPunchClick={() => setShowTimer(true)} />
              <ActionButtons
                onCreate={() => {}}
                onLog={() => setShowLog(true)}
                onSettings={() => setShowSettings(true)}
                onLogout={handleLogout}
              />
            </div>

          </div>
        </div>
      </main>

      {showTimer && (
        <TimerScreen startedAt={user.startedAt} onClose={() => setShowTimer(false)} />
      )}
      {showLog && (
        <LogModal logs={logs} isOpen={showLog} onClose={() => setShowLog(false)} />
      )}
      {showSettings && (
        <SettingsModal user={user} onClose={() => setShowSettings(false)} />
      )}
    </div>
  );
};

export default Dashboard;
