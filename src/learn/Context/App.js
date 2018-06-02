import React from "react";
import "./style.css";
import { ThemeContext, themes } from "./theme-context";
import ThemedButton from "./ThemedButton";
import Toolbar from "./Toolbar";

class App extends React.Component {
  state = { theme: themes.light };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div className="container">
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section className="container">
          <h3>all the buttons from here use the default dark theme</h3>
          <p>Sunt numquam natus quisquam! Inventore eum iusto doloribus?</p>
          <p>
            Itaque saepe, quis iure mollitia harum eligendi optio eveniet
            corporis ea assumenda. Consectetur omnis, aliquid neque fugit odio
            adipisci facilis, libero ducimus, consequatur enim dolore totam
            animi. Fugiat, consectetur nobis?
          </p>
          <ThemedButton>Default Theme</ThemedButton>
          <ol>
            <li>
              Sequi libero hic omnis perferendis ratione? Officiis, repellat
              doloremque. Impedit, accusamus.
            </li>
            <li>
              Fugiat molestiae architecto, iusto doloribus amet minus tempore
              eos ipsam in.
            </li>
            <li>
              Laborum animi odio ipsam laudantium, architecto iste qui deserunt
              blanditiis quis.
            </li>
          </ol>
          <ThemedButton>do nothing</ThemedButton>
        </section>
      </div>
    );
  }
}

export default App;
