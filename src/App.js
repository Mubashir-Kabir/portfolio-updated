import "./App.css";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import HomeBanner from "./Components/HomeBanner";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomeBanner></HomeBanner>
      <Projects></Projects>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
