import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './pages/home';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/about" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
