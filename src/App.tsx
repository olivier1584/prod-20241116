import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Dematerialisation from './pages/services/Dematerialisation';
import Excel from './pages/services/Excel';
import IA from './pages/services/IA';
import Blog from './pages/Blog';
import BlogAdmin from './pages/BlogAdmin';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/dematerialisation" element={<Dematerialisation />} />
            <Route path="/services/excel" element={<Excel />} />
            <Route path="/services/ia" element={<IA />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/admin" element={<BlogAdmin />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}