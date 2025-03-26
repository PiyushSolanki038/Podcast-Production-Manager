import React, { useState } from 'react';
import './ScriptEditor.css';

function ScriptEditor() {
  const [episodes, setEpisodes] = useState([
    { id: 1, title: 'Episode 1: Introduction', content: '', status: 'Draft' },
    { id: 2, title: 'Episode 2: Getting Started', content: '', status: 'In Progress' }
  ]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="script-editor">
      <div className="editor-header">
        <h2>Script Editor</h2>
        <button className="new-episode-btn">+ New Episode</button>
      </div>

      <div className="editor-container">
        <div className="episodes-sidebar">
          <h3>Episodes</h3>
          <div className="episode-list">
            {episodes.map(episode => (
              <div 
                key={episode.id} 
                className={`episode-item ${selectedEpisode?.id === episode.id ? 'active' : ''}`}
                onClick={() => setSelectedEpisode(episode)}
              >
                <div className="episode-title">{episode.title}</div>
                <span className="episode-status">{episode.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="editor-main">
          <div className="editor-toolbar">
            <input 
              type="text" 
              placeholder="Episode Title"
              value={selectedEpisode?.title || ''}
              disabled={!selectedEpisode}
              className="episode-title-input"
            />
            <div className="toolbar-actions">
              <button className="save-btn">Save</button>
              <button className="export-btn">Export</button>
            </div>
          </div>

          <textarea
            className="script-textarea"
            placeholder="Start writing your script here..."
            value={selectedEpisode?.content || ''}
            disabled={!selectedEpisode}
          />
        </div>
      </div>
    </div>
  );
}

export default ScriptEditor;