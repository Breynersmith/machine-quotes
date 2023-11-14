import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/machine-quotes" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
