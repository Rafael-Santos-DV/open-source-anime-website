import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalContext } from './context/context';
import { Animes } from './pages/Animes/Animes';
import { Episodes } from './pages/Episodes/Espisodes';
import { Home } from './pages/Home/Home';
import { InfoAnime } from './pages/InfoAnime/InfoAnime';
import { Play } from './pages/Play/Play';

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animes" element={<Animes />} />
          <Route path="/episodios" element={<Episodes />} />
          <Route path="/animes/:id" element={<InfoAnime />} />
          <Route path="/animes/:id/:ep" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
