import React from "react";
import "./style.css";

export default class App extends React.Component {
  state = { elasticHeader: false };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let scrollTop = window.scrollY;
    // ეს არის ყველაზე "efficient"

    if (scrollTop === 0 && this.state.elasticHeader) {
      this.setState({ elasticHeader: false });
    } else if (scrollTop !== 0 && !this.state.elasticHeader) {
      this.setState({ elasticHeader: true });
    }
  };
  render() {
    const { elasticHeader } = this.state;
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
            <p>
              Corporis itaque vitae quae dolorum dolore eius ipsam corrupti
              dolor ducimus, labore cumque eligendi iste voluptates
              exercitationem sed iusto officia eveniet eaque provident quisquam
              unde fugiat? Nulla aperiam expedita eligendi.
            </p>
            <p>
              Nisi quasi quod eius vero. Impedit necessitatibus delectus
              reiciendis consequatur voluptatem provident, enim optio aut ullam.
              Labore, cumque adipisci explicabo dolorum, aut expedita minima
              quam maxime unde harum delectus ratione?
            </p>
          </div>
        </main>
        {elasticHeader || <div className="sign">Scroll Down</div>}
        <Footer />
      </div>
    );
  }
}

const Header = props => {
  // console.log("rendered, elastic:", elastic);
  return (
    <header className={props.elastic ? "header scrolled" : "header"}>
      Header {props.elastic ? "➖" : "➕"}
    </header>
  );
};

const Footer = () => {
  // არ ღირს pureComponent-ის გამოყენება
  // console.log("rendered footer");
  return <footer className="footer">@TheEnd</footer>;
};
