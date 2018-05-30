import React, { Component } from "react";
import "./style.css";
import Modal from "./components/Modal";
import ImageGrid from "./components/ImageGrid";
import ImageSearch from "./components/ImageSearch";
import Header from "./components/Header";

class App extends Component {
  state = { hits: [], searchWord: "", amount: 25, currentImg: "" };

  handleChangeFetch = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.fetchImages();
    });
  };

  fetchImages = () => {
    if (!this.state.searchWord) {
      this.setState({ hits: [] });
      return;
    }
    var API_KEY = "9136762-37dc534e9fe7490756c9c0235";
    var URL = `https://pixabay.com/api/?key=${API_KEY}&q=${
      this.state.searchWord
    }&safesearch=true&per_page=${this.state.amount}`;

    fetch(URL)
      .then(res => res.json())
      .then(data => this.setState({ hits: data.hits }));
  };

  previewPic = currentImg => {
    this.setState({ currentImg });
  };

  closeModal = () => {
    this.setState({ currentImg: "" });
  };

  render() {
    const { currentImg, searchWord, hits, amount } = this.state;
    return (
      <div>
        <Header title="Pixabay Api" />
        <ImageSearch
          word={searchWord}
          amount={amount}
          onChange={this.handleChangeFetch}
        />
        <ImageGrid images={hits} onImageClick={this.previewPic} />

        <Modal onClose={this.closeModal} visibleImg={currentImg} />
      </div>
    );
  }
}

export default App;
