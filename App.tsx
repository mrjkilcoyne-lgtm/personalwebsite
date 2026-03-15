import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Media from './pages/Media';
import ThinkTanks from './pages/ThinkTanks';
import AIWebsites from './pages/AIWebsites';
import CANZUK from './pages/CANZUK';
import Olfactory from './pages/Olfactory';
import Navbar from './components/Navbar';
import CelticBackground from './components/CelticBackground';

function App() {
  return (
    <>
      <div className="geometric-grid" />
      {/* Static abstract Celtic background sits continuously behind everything */}
      <CelticBackground />
      
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/think-tanks" element={<ThinkTanks />} />
          <Route path="/ai-websites" element={<AIWebsites />} />
          <Route path="/olfactory" element={<Olfactory />} />
          <Route path="/canzuk" element={<CANZUK />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
