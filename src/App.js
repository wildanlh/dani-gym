import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Facility from "./pages/Facility";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Facility />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
