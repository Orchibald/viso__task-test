import { Header } from './components/Header';
import { Home } from './components/Home';
import MapContainer from './components/MapContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/viso__task-test/" element={<Home />} />
        <Route path="/viso__task-test/map" element={<MapContainer />} />
      </Routes>
    </Router>
  )
}

