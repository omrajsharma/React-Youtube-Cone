import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Recommended from './components/Recommended/Recommended';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <div className="app__mainpage">
                <Sidebar />
                <Recommended/>
              </div>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
