import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Construction from './Pages/Construction';
import './App.css';

function App() {
  return (
    <Router>
      <div id="App">
        <div id="content">
          <Routes>
            <Route exact path="/" element={<Construction />} />
            <Route path="Clubfinity" element={<Construction />} />
            <Route path="VolunTurbo" element={<Construction />} />
            <Route path="Ceptron" element={<Construction />} />
            <Route path="NYC-SuperBNB" element={<Construction />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
