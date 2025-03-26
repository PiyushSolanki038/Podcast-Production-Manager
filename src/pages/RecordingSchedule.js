import React, { useState } from 'react';
import './RecordingSchedule.css';

function RecordingSchedule() {
  const [recordings] = useState([
    {
      id: 1,
      title: 'Tech Talk Episode 5',
      date: '2023-07-15',
      time: '14:00',
      duration: '60',
      guests: ['John Doe', 'Jane Smith'],
      status: 'Scheduled'
    },
    {
      id: 2,
      title: 'Industry Interview',
      date: '2023-07-18',
      time: '15:30',
      duration: '45',
      guests: ['Mike Johnson'],
      status: 'Pending'
    }
  ]);

  return (
    <div className="recording-schedule">
      <div className="schedule-header">
        <h2>Recording Schedule</h2>
        <button className="new-recording-btn">+ New Recording</button>
      </div>

      <div className="schedule-container">
        <div className="calendar-section">
          <div className="calendar-header">
            <h3>Calendar</h3>
            <div className="calendar-nav">
              <button>Previous</button>
              <span>July 2023</span>
              <button>Next</button>
            </div>
          </div>
          <div className="calendar-grid">
            {/* Calendar grid will go here */}
          </div>
        </div>

        <div className="upcoming-recordings">
          <h3>Upcoming Recordings</h3>
          <div className="recordings-list">
            {recordings.map(recording => (
              <div key={recording.id} className="recording-card">
                <div className="recording-header">
                  <h4>{recording.title}</h4>
                  <span className={`status ${recording.status.toLowerCase()}`}>
                    {recording.status}
                  </span>
                </div>
                <div className="recording-details">
                  <div className="detail-item">
                    <span className="label">Date:</span>
                    <span>{recording.date}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Time:</span>
                    <span>{recording.time}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Duration:</span>
                    <span>{recording.duration} minutes</span>
                  </div>
                </div>
                <div className="guests-list">
                  <span className="label">Guests:</span>
                  {recording.guests.map(guest => (
                    <span key={guest} className="guest-tag">{guest}</span>
                  ))}
                </div>
                <div className="recording-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="cancel-btn">Cancel</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordingSchedule;