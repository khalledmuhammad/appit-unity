import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
// import Footer from './components/Footer/Footer';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
