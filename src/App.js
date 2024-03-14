import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preview from "./Preview";
import Video from "./Video";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Preview />} />
          {/* <Route path="/Video" element={<Video/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
