import React, { useState, useEffect } from "react";
import "./style.css";

const App = () => {
  const [elasticHeader, setElasticHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    let scrollTop = window.scrollY;

    if (scrollTop === 0 && elasticHeader) {
      setElasticHeader(false);
    } else if (scrollTop !== 0 && !elasticHeader) {
      setElasticHeader(true);
    }
  };

  return (
    <div className="app">
      <Header elastic={elasticHeader} />

      <main className="main">
        <div className="container">
          <h2>Elastic header</h2>
          <p>
            Dicta dolorum est itaque aliquam molestias commodi aliquid minima
            sint non. Quos sed tempore aliquid expedita quis. Nostrum,
            asperiores sunt voluptatem eos distinctio similique impedit sequi
            ipsam magni, non reprehenderit.
          </p>
        </div>
      </main>

      {elasticHeader || <div className="sign">Scroll Down</div>}

      <footer className="footer">@TheEnd</footer>
    </div>
  );
};

const Header = props => (
  <header className={props.elastic ? "header scrolled" : "header"}>
    Header {props.elastic ? "➖" : "➕"}
  </header>
);

export default App;
