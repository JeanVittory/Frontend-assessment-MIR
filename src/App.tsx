import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@components/layout';
import { Home } from '@pages/home';
import { Detail } from '@pages/detail';
import { About } from '@pages/about';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
