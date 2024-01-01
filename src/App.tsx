import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col justify-between h-svh">
      <div className="p-4">
        <NavBar />
        <Home />
      </div>

      <Footer />
    </div>
  );
}

export default App;
