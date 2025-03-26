import React, { useState } from 'react';
import './Distribution.css';

function Distribution() {
  const [platforms] = useState([
    {
      id: 1,
      name: 'Spotify',
      status: 'Connected',
      lastSync: '2023-07-10',
      subscribers: 2500,
      autoPublish: true
    },
    {
      id: 2,
      name: 'Apple Podcasts',
      status: 'Connected',
      lastSync: '2023-07-10',
      subscribers: 1800,
      autoPublish: true
    },
    {
      id: 3,
      name: 'Google Podcasts',
      status: 'Pending',
      lastSync: '-',
      subscribers: 0,
      autoPublish: false
    }
  ]);

  return (
    <div className="distribution">
      <div className="distribution-header">
        <h2>Distribution Channels</h2>
        <button className="connect-platform-btn">+ Connect New Platform</button>
      </div>

      <div className="distribution-container">
        <div className="platform-stats">
          <div className="stat-card">
            <h3>Total Reach</h3>
            <div className="stat-value">4,300</div>
            <div className="stat-label">Subscribers</div>
          </div>
          <div className="stat-card">
            <h3>Connected Platforms</h3>
            <div className="stat-value">2/3</div>
            <div className="stat-label">Active Connections</div>
          </div>
        </div>

        <div className="platforms-grid">
          {platforms.map(platform => (
            <div key={platform.id} className="platform-card">
              <div className="platform-header">
                <h3>{platform.name}</h3>
                <span className={`status-badge ${platform.status.toLowerCase()}`}>
                  {platform.status}
                </span>
              </div>

              <div className="platform-metrics">
                <div className="metric">
                  <span className="label">Subscribers</span>
                  <span className="value">{platform.subscribers.toLocaleString()}</span>
                </div>
                <div className="metric">
                  <span className="label">Last Sync</span>
                  <span className="value">{platform.lastSync}</span>
                </div>
                <div className="metric">
                  <span className="label">Auto Publish</span>
                  <span className={`value ${platform.autoPublish ? 'enabled' : 'disabled'}`}>
                    {platform.autoPublish ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>

              <div className="platform-actions">
                <button className="settings-btn">Settings</button>
                <button className="sync-btn">Sync Now</button>
                <button className="analytics-btn">View Analytics</button>
              </div>
            </div>
          ))}
        </div>

        <div className="publish-section">
          <h3>Quick Publish</h3>
          <div className="publish-form">
            <select className="episode-select">
              <option value="">Select Episode</option>
              <option value="1">Latest Episode</option>
              <option value="2">Previous Episode</option>
            </select>
            <div className="platform-checkboxes">
              {platforms.map(platform => (
                <label key={platform.id} className="platform-checkbox">
                  <input type="checkbox" checked={platform.status === 'Connected'} readOnly />
                  <span>{platform.name}</span>
                </label>
              ))}
            </div>
            <button className="publish-btn">Publish Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Distribution;