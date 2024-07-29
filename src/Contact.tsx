import ThemeManager from "./ThemeManager";

export default function Contact() {
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
    <section id="contact">
      <h2>Contact Us</h2>
      <p>
        Curabitur euismod, odio vel varius lacinia, lorem sapien ultrices mi, eu
        laoreet ligula mauris sit amet libero.
      </p>
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </section>
  );
}
