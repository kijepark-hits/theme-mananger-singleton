interface Theme {
  backgroundColor: string;
  color: string;
}

class ThemeManager {
  private static instance: ThemeManager;
  private theme: Theme = {
    backgroundColor: "white",
    color: "black",
  };

  private constructor() {
    console.log("ThemeManager instance created");
  }

  public static getInstance(): ThemeManager {
    console.log("ThemeManager getInstance called");

    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  public setTheme(newTheme: Theme): void {
    this.theme = { ...this.theme, ...newTheme };
    document.body.style.backgroundColor = this.theme.backgroundColor;
    document.body.style.color = this.theme.color;
  }

  public getTheme(): Theme {
    return this.theme;
  }
}

export default ThemeManager;
