import About from "./components/About";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col h-svh " id="home">
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
