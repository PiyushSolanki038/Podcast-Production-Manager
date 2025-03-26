import React, { useState } from 'react';
import './GuestManagement.css';

function GuestManagement() {
  const [guests] = useState([
    {
      id: 1,
      name: 'John Doe',
      expertise: 'Tech Innovation',
      email: 'john@example.com',
      status: 'Confirmed',
      nextAppearance: '2023-07-15',
      pastEpisodes: 2
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      expertise: 'Digital Marketing',
      email: 'sarah@example.com',
      status: 'Pending',
      nextAppearance: '2023-07-20',
      pastEpisodes: 1
    }
  ]);

  return (
    <div className="guest-management">
      <div className="guest-header">
        <h2>Guest Management</h2>
        <button className="invite-guest-btn">+ Invite Guest</button>
      </div>

      <div className="guest-container">
        <div className="guest-filters">
          <input type="text" placeholder="Search guests..." className="search-input" />
          <div className="filter-buttons">
            <button className="active">All</button>
            <button>Confirmed</button>
            <button>Pending</button>
            <button>Past Guests</button>
          </div>
        </div>

        <div className="guests-grid">
          {guests.map(guest => (
            <div key={guest.id} className="guest-card">
              <div className="guest-info">
                <div className="guest-avatar">
                  {guest.name.charAt(0)}
                </div>
                <div className="guest-details">
                  <h3>{guest.name}</h3>
                  <span className="expertise">{guest.expertise}</span>
                </div>
                <span className={`status-badge ${guest.status.toLowerCase()}`}>
                  {guest.status}
                </span>
              </div>
              
              <div className="contact-info">
                <div className="info-item">
                  <span className="label">Email:</span>
                  <span>{guest.email}</span>
                </div>
                <div className="info-item">
                  <span className="label">Next Appearance:</span>
                  <span>{guest.nextAppearance}</span>
                </div>
                <div className="info-item">
                  <span className="label">Past Episodes:</span>
                  <span>{guest.pastEpisodes}</span>
                </div>
              </div>

              <div className="guest-actions">
                <button className="view-btn">View Profile</button>
                <button className="schedule-btn">Schedule</button>
                <button className="message-btn">Message</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GuestManagement;