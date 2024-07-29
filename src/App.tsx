import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Themed App</h1>
        <nav className="App-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Themed App. All rights reserved.</p>
      </footer>
    </div>
  );
}
