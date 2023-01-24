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
            <Route exact path="/projects" element={<Construction />}>
              <Route path="Clubfinity" element={<Home />} />
              <Route path="VolunTurbo" element={<Construction />} />
              <Route path="Ceptron" element={<Construction />} />
              <Route path="NYC-SuperBNB" element={<Construction />} />
            </Route>
            <Route path="*" element={<Construction />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
