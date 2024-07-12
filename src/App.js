import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import SubMain1 from './components/SubMain1';
import Email from './components/Email';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
       {/* HEADER */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/sub-main1" element={<SubMain1 />} />
          <Route path="/Email" element={<Email />} />
        </Routes>
         {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;