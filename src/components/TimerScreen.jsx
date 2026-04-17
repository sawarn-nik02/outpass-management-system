import React, { useEffect, useState } from 'react';

const TimerScreen = ({ startedAt, onClose }) => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const tick = () => {
      const diff = Math.floor((Date.now() - startedAt) / 1000);
      setElapsed(diff < 0 ? 0 : diff);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [startedAt]);

  const h = String(Math.floor(elapsed / 3600)).padStart(2, '0');
  const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
  const s = String(elapsed % 60).padStart(2, '0');

  const Unit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span style={{ fontSize: '6rem', lineHeight: 1, fontWeight: 700 }} className="text-white">
        {value}
      </span>
      <span className="text-red-200 text-sm tracking-widest uppercase mt-1">{label}</span>
    </div>
  );

  return (
    <div
      className="fixed inset-0 bg-red-600 flex flex-col items-center justify-center z-50 cursor-pointer gap-6"
      onClick={onClose}
    >
      <Unit value={h} label="Hours" />
      <Unit value={m} label="Minutes" />
      <Unit value={s} label="Seconds" />
    </div>
  );
};

export default TimerScreen;
