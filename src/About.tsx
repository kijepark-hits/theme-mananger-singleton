import ThemeManager from "./ThemeManager";

export default function AboutUs() {
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
    <section id="about">
      <h2>About Us</h2>
      <p>
        Quisque volutpat purus a eros faucibus, ut fermentum turpis varius. Cras
        malesuada feugiat ante, et accumsan eros.
      </p>
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </section>
  );
}
