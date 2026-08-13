import React from 'react';

export const SkeletonPost = () => (
  <div className="glass-panel p-4 mb-4">
    <div className="d-flex align-items-center gap-3 mb-3">
      <div className="skeleton skeleton-avatar"></div>
      <div style={{ flex: 1 }}>
        <div className="skeleton skeleton-text" style={{ width: '40%' }}></div>
        <div className="skeleton skeleton-text" style={{ width: '20%' }}></div>
      </div>
    </div>
    <div className="skeleton skeleton-text"></div>
    <div className="skeleton skeleton-text"></div>
    <div className="skeleton skeleton-img mt-3"></div>
  </div>
);