import ThemeProvider from "./ThemeProvider";
import ThemeSwitcher from "./ThemeSwitcher";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>Themed App</h1>
          <ThemeSwitcher />
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
          <section id="home">
            <h2>Welcome to Our Themed App</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae eros vel eros elementum venenatis.
            </p>
          </section>

          <section id="about">
            <h2>About Us</h2>
            <p>
              Quisque volutpat purus a eros faucibus, ut fermentum turpis
              varius. Cras malesuada feugiat ante, et accumsan eros.
            </p>
          </section>

          <section id="services">
            <h2>Our Services</h2>
            <p>
              Donec aliquet urna sed tellus pharetra, id malesuada turpis
              sodales. Proin ut mi nec lectus volutpat sagittis.
            </p>
          </section>

          <section id="contact">
            <h2>Contact Us</h2>
            <p>
              Curabitur euismod, odio vel varius lacinia, lorem sapien ultrices
              mi, eu laoreet ligula mauris sit amet libero.
            </p>
          </section>
        </main>

        <footer className="App-footer">
          <p>&copy; 2024 Themed App. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
