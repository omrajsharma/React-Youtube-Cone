import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Recommended from './components/Recommended/Recommended';
import SearchPage from './components/SearchPage/SearchPage';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

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
                <Recommended />
              </div>
            </>
          } />

          <Route path='/search/:searchQuery' element={
            <>
              <Header />
              <div className="app__mainpage">
                <Sidebar />
                <SearchPage />
              </div>
            </>
          } />

          <Route path='/video/:videoId' element={
            <>
              <Header />
              <div className="app__mainpage">
                <Sidebar />
                <VideoPlayer />
              </div>
            </>
          } />
        </Routes>
      </BrowserRouter>

      // showing open source demo in the class - please merge this to your repo
    </div>
  );
}

export default App;
