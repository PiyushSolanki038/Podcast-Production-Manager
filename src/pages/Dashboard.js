import { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [podcastData] = useState([
    { 
      id: 1, 
      title: 'Tech Talk', 
      episodes: 10, 
      listeners: 1000,
      growth: '+15%',
      thumbnail: 'https://via.placeholder.com/150',
      nextEpisode: '2023-07-01'
    },
    { 
      id: 2, 
      title: 'Science Weekly', 
      episodes: 8, 
      listeners: 800,
      growth: '+10%',
      thumbnail: 'https://via.placeholder.com/150',
      nextEpisode: '2023-07-03'
    },
  ]);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Podcast Dashboard</h2>
        <button className="new-podcast-btn">+ New Podcast</button>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Episodes</h3>
          <p className="stat-number">18</p>
          <span className="trend positive">↑ 12%</span>
        </div>
        <div className="stat-card">
          <h3>Total Listeners</h3>
          <p className="stat-number">1,800</p>
          <span className="trend positive">↑ 25%</span>
        </div>
        <div className="stat-card">
          <h3>Average Duration</h3>
          <p className="stat-number">45m</p>
          <span className="trend neutral">→</span>
        </div>
      </div>

      <div className="podcast-section">
        <h3>Your Podcasts</h3>
        <div className="podcast-grid">
          {podcastData.map(podcast => (
            <div key={podcast.id} className="podcast-card">
              <div className="podcast-thumbnail">
                <img src={podcast.thumbnail} alt={podcast.title} />
              </div>
              <div className="podcast-info">
                <h4>{podcast.title}</h4>
                <div className="podcast-stats">
                  <span>Episodes: {podcast.episodes}</span>
                  <span>Listeners: {podcast.listeners}</span>
                  <span className="growth">{podcast.growth}</span>
                </div>
                <div className="next-episode">
                  Next Episode: {podcast.nextEpisode}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;