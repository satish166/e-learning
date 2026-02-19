import { Routes, Route } from "react-router-dom";
import HomePage from './pages/home/Home';
import AboutUs from './pages/about-us/about-us';
import NotFound from './pages/not-found/not-found';
import MainLayout from './pages/layouts/MainLayout';
import Classes from './pages/classes/classes';
import Services from './pages/services/services';
import OurTeam from './pages/our-team/our-team';
import ContactUs from './pages/contact-us/contact-us';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        {/* All pages that should show Header + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Add more routes here that need Header/Footer */}
        </Route>

        {/* 404 without Header/Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;