import ThemeManager from "./ThemeManager";

export default function Services() {
  const themeManager = ThemeManager.getInstance();

  const handleSwitchTheme = () => {
    const currentTheme = themeManager.getTheme();
    const newTheme = {
      backgroundColor:
        currentTheme.backgroundColor === "white" ? "black" : "white",
      color: currentTheme.color === "black" ? "white" : "black",
    };
    themeManager.setTheme(newTheme);
  };

  return (
    <section id="services">
      <h2>Our Services</h2>
      <p>
        Donec aliquet urna sed tellus pharetra, id malesuada turpis sodales.
        Proin ut mi nec lectus volutpat sagittis.
      </p>
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </section>
  );
}
