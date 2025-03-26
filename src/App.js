import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ScriptEditor from './pages/ScriptEditor';
import RecordingSchedule from './pages/RecordingSchedule';
import GuestManagement from './pages/GuestManagement';
import Analytics from './pages/Analytics';
import Equipment from './pages/Equipment';
import Distribution from './pages/Distribution';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/script-editor" element={<ScriptEditor />} />
            <Route path="/schedule" element={<RecordingSchedule />} />
            <Route path="/guests" element={<GuestManagement />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/distribution" element={<Distribution />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
