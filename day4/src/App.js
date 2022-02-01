import { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1/:id" element={<Page1 />} />
        {/* We need to use nested routing for optional param */}
        {/* <Route path="/page1" element={<Page1 />}>
          <Route path="/page1/:id" element={<Page1 />} />
        </Route> */}
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
