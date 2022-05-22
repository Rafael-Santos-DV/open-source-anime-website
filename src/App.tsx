import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalContext } from './context/context';
import { Animes } from './pages/Animes/Animes';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animes" element={<Animes />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
