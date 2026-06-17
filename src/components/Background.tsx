import React from 'react';

const Background: React.FC = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-surface-950">
    <div className="absolute inset-0 bg-gradient-to-br from-surface-950 via-surface-900 to-surface-950" />
    <div
      className="absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 40%)',
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    />
  </div>
);

export default Background;
