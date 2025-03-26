import React from 'react';
import './Analytics.css';

function Analytics() {
  const performanceData = {
    totalListeners: 25000,
    monthlyGrowth: '+15%',
    averageRating: 4.8,
    topEpisodes: [
      { title: 'Tech Innovation Future', plays: 3500, rating: 4.9 },
      { title: 'Digital Marketing Trends', plays: 3200, rating: 4.8 }
    ],
    demographics: {
      age: [
        { group: '18-24', percentage: 20 },
        { group: '25-34', percentage: 45 },
        { group: '35-44', percentage: 25 },
        { group: '45+', percentage: 10 }
      ],
      platforms: [
        { name: 'Spotify', percentage: 40 },
        { name: 'Apple Podcasts', percentage: 35 },
        { name: 'Google Podcasts', percentage: 25 }
      ]
    }
  };

  return (
    <div className="analytics">
      <div className="analytics-header">
        <h2>Analytics Dashboard</h2>
        <div className="date-filter">
          <button className="active">Last 30 Days</button>
          <button>Last 3 Months</button>
          <button>Last Year</button>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card total-listeners">
          <h3>Total Listeners</h3>
          <div className="metric-value">{performanceData.totalListeners.toLocaleString()}</div>
          <div className="growth">{performanceData.monthlyGrowth}</div>
        </div>
        
        <div className="metric-card average-rating">
          <h3>Average Rating</h3>
          <div className="metric-value">{performanceData.averageRating}</div>
          <div className="rating-stars">★★★★★</div>
        </div>

        <div className="metric-card engagement">
          <h3>Listener Engagement</h3>
          <div className="engagement-bars">
            {performanceData.demographics.age.map(age => (
              <div key={age.group} className="engagement-bar">
                <div className="bar" style={{ width: `${age.percentage}%` }}></div>
                <span className="label">{age.group}</span>
                <span className="value">{age.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="analytics-sections">
        <div className="top-episodes">
          <h3>Top Performing Episodes</h3>
          <div className="episodes-list">
            {performanceData.topEpisodes.map((episode, index) => (
              <div key={index} className="episode-stats">
                <div className="episode-title">{episode.title}</div>
                <div className="stats">
                  <span className="plays">{episode.plays.toLocaleString()} plays</span>
                  <span className="rating">★ {episode.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="platform-distribution">
          <h3>Platform Distribution</h3>
          <div className="platform-stats">
            {performanceData.demographics.platforms.map(platform => (
              <div key={platform.name} className="platform-item">
                <div className="platform-info">
                  <span className="platform-name">{platform.name}</span>
                  <span className="platform-percentage">{platform.percentage}%</span>
                </div>
                <div className="platform-bar">
                  <div className="bar" style={{ width: `${platform.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;