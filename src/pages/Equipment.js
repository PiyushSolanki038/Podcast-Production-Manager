import React, { useState } from 'react';
import './Equipment.css';

function Equipment() {
  const [equipment] = useState([
    {
      id: 1,
      name: 'Shure SM7B',
      category: 'Microphone',
      status: 'In Use',
      condition: 'Excellent',
      lastMaintenance: '2023-06-15',
      notes: 'Primary recording microphone'
    },
    {
      id: 2,
      name: 'Focusrite Scarlett 2i2',
      category: 'Audio Interface',
      status: 'In Use',
      condition: 'Good',
      lastMaintenance: '2023-05-20',
      notes: 'Main interface for recording'
    }
  ]);

  return (
    <div className="equipment">
      <div className="equipment-header">
        <h2>Equipment Management</h2>
        <button className="add-equipment-btn">+ Add Equipment</button>
      </div>

      <div className="equipment-container">
        <div className="equipment-filters">
          <div className="search-bar">
            <input type="text" placeholder="Search equipment..." />
            <select defaultValue="all">
              <option value="all">All Categories</option>
              <option value="microphone">Microphones</option>
              <option value="interface">Audio Interfaces</option>
              <option value="headphones">Headphones</option>
            </select>
          </div>
          <div className="status-filters">
            <button className="active">All</button>
            <button>In Use</button>
            <button>Available</button>
            <button>Maintenance</button>
          </div>
        </div>

        <div className="equipment-grid">
          {equipment.map(item => (
            <div key={item.id} className="equipment-card">
              <div className="equipment-header">
                <h3>{item.name}</h3>
                <span className={`status-badge ${item.status.toLowerCase().replace(' ', '-')}`}>
                  {item.status}
                </span>
              </div>
              
              <div className="equipment-details">
                <div className="detail-row">
                  <span className="label">Category:</span>
                  <span>{item.category}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Condition:</span>
                  <span className={`condition ${item.condition.toLowerCase()}`}>
                    {item.condition}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="label">Last Maintenance:</span>
                  <span>{item.lastMaintenance}</span>
                </div>
              </div>

              <div className="equipment-notes">
                <p>{item.notes}</p>
              </div>

              <div className="equipment-actions">
                <button className="edit-btn">Edit Details</button>
                <button className="maintenance-btn">Schedule Maintenance</button>
                <button className="history-btn">View History</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Equipment;