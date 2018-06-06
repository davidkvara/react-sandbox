import React from "react";
import "./style.css";
import { ThemeContext, themes } from "./theme-context";
import ThemedButton from "./components/ThemedButton";
import Toolbar from "./components/Toolbar";

class App extends React.Component {
  state = { theme: themes.light, counter: 0 };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  handleInc = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  handleDec = () => {
    this.setState(({ counter }) => ({ counter: counter - 1 }));
  };

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div className="container">
        <ThemeContext.Provider value={this.state.theme}>
          <h2>Context Example</h2>
          <Toolbar changeTheme={this.toggleTheme} />
          <section className="container">
            <h3>all the buttons from here use the default dark theme</h3>
            <p>Sunt numquam natus quisquam! Inventore eum iusto doloribus?</p>

            <p>{this.state.counter}</p>
            <ThemedButton onClick={this.handleInc}>Increment</ThemedButton>
            <ThemedButton onClick={this.handleDec}>Decrement</ThemedButton>
          </section>
        </ThemeContext.Provider>
        <div>
          <p>
            Itaque saepe, quis iure mollitia harum eligendi optio eveniet
            corporis ea assumenda. Consectetur omnis, aliquid neque fugit odio
            adipisci facilis, libero ducimus, consequatur enim dolore totam
            animi. Fugiat, consectetur nobis?
          </p>
          <ol>
            <li>
              Eos et molestias hic debitis alias, dolore repudiandae officiis
              illum veniam quidem ut? Quisquam nam hic neque.
            </li>
            <li>
              Quasi illo fuga, deleniti excepturi neque quae cumque eaque
              placeat fugit ad tempora exercitationem corporis, alias nihil.
            </li>
            <li>
              Soluta, facilis minus libero ad ab qui, id debitis totam
              exercitationem corporis autem, iste dolor veritatis similique?
            </li>
            <li>
              Laboriosam, perferendis laudantium? Consequatur perspiciatis
              perferendis error molestiae itaque maxime sequi corrupti
              consequuntur nesciunt, optio accusamus harum.
            </li>
            <li>
              Cum quae doloribus iste eaque consequuntur possimus blanditiis.
              Adipisci, quisquam error. Odio omnis fugit voluptate est iste.
            </li>
          </ol>
          <hr />
          <h3>Out of Provider</h3>
          <ThemedButton>default theme button</ThemedButton>
        </div>
      </div>
    );
  }
}

export default App;
