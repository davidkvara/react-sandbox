import React, { Component } from "react";
import GridItem from "./subcomponent/GridItem";
import picture from "../images/0c0c.jpeg";
import picture2 from "../images/c1c1.jpeg";
import picture3 from "../images/c4c4.jpeg";
import picture7 from "../images/v5v5.png";
import picture8 from "../images/c5c44.png";
import picture9 from "../images/v4v43.png";
import Test from "./Test";

class Main extends Component {
  render() {
    let desc = `React is a JavaScript library for building user interfaces, since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
    Webpack is a module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles - often only one - to be loaded by the browser.`;
    console.log(desc);

    return (
      <main>
        <div className="wrapper sec-title">
          <div className="">texttext</div>
        </div>
        <div className="grid-container">
          <GridItem
            pic={picture}
            header="this header"
            news="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, in ratione laboriosam corporis maxime possimus explicabo sed rem culpa ducimus."
          />
          <GridItem
            pic={picture2}
            header="this header"
            news="Vit amet, consectetur adipisicing elit. Doloremque, in ratione laboriosam corporis maxime possimus explicabo sed rem culpa ducimus."
          />
          <GridItem
            pic={picture3}
            header="this header"
            news="Doloremque, in ratione laboriosam corporis maxime possimus explicabo sed rem culpa ducimus."
          />
          <GridItem
            pic={picture7}
            header="this header"
            news="Consectetur adipisicing elit. Doloremque, in ratione laboriosam corporis maxime possimus explicabo sed rem culpa ducimus."
          />
          <GridItem
            pic={picture8}
            header="this header"
            news="Dolor sit amet, consectetur adipisicing elit. corporis maxime possimus explicabo sed rem culpa ducimus."
          />
          <GridItem
            pic={picture9}
            header="this header"
            news="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, in ratione laboriosam corporis."
          />
        </div>
        <Test who={desc} />
      </main>
    );
  }
}

export default Main;
