import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalContext } from './context/context';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
