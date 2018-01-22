import React, { Component } from "react";
import GridItem from "./parts/GridItem";
import picture from "./images/0c0c.jpeg";
import picture2 from "./images/c1c1.jpeg";
import picture3 from "./images/c4c4.jpeg";
import picture7 from "./images/v5v5.png";
import Aside from "./parts/part";

class Main extends Component {
  render() {
    return (
      <main>
        <div className="wrapper sec-title">
          <div style={{ fontWeight: 500 }}>Yesterdays Top News</div>
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
        </div>
        <Aside who={"the less you know the better you sleep"} />
      </main>
    );
  }
}

export default Main;
