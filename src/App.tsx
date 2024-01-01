import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="p-4">
        <NavBar />
        <Home />
      </div>

      <Footer />
    </>
  );
}

export default App;
