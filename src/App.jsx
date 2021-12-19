import React, { Component } from "react";
import "./App.css";

import Button from "./components/button/Button";
import ImageGallery from "./components/imageGallery/ImageGallery";
import LoaderFetch from "./components/loader/LoaderFetch"
import Modal from "./components/modal/Modal";
import Searchbar from "./components/searchbar/Searchbar";
import fetchData from "./utils/fetchData";


 

class App extends Component {
  state = {
    images: [],
    searchKeyword: "",
    page: 1,
    isLoading: false,
    isOpenModal: false,
    modalImage: "",
  };

 

  fetchFirstPage = () => {
    fetch(
        `https://pixabay.com/api/?&q=&page=1&key=23724640-a43547237d07add70f9bfd33b&image_type=photo&orientation=horizontal&per_page=12`
    )
     .then((data) => data.json())
      .then((searchKeyword) => {
        this.setState(({ images}) => ({
          images: searchKeyword.hits,
      
        }));
      })
      .catch((error) => console.log(error));
  }

   handleChange = (e) => {
    const value = e.target.value;
    this.setState({ searchKeyword: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.fetchImages();
  };

  loadMoreImages = (e) => {
    e.preventDefault();
    this.fetchImages(this.state.searchKeyword, this.state.page);
  };

  openModal = (e) => {
    if (e.target.nodeName !== "IMG") {
      return;
    }
    this.setState({
      modalImage: e.target.dataset.img,
      isOpenModal: true,
    });
  };

  closeModalWithEsc = (e) => {
    if (e.code === "Escape") {
      this.setState({ isOpenModal: false });
    }
  };

  closeModal = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    this.setState({ isOpenModal: false });
  };



  fetchImages = async () => {
    if (this.state.searchKeyword.trim() === "") {
      return console.log("Please enter a text");
    }
    this.showLoader();

    try {
      const request = await fetchData(this.state.searchKeyword, this.state.page);
      this.setState(({ images, page, showButton }) => ({
        images: [...images, ...request],
        page: page + 1,
        showButton: false,
      }));

      if (request.length === 0) {
        this.setState({
          error: `No results were found.`,
        });
      }
    } catch (error) {
      this.setState({ error: "Try again, value not found" });
    } finally {
      this.showLoader();
    }
  };

    componentDidMount() {
      this.fetchFirstPage();
    }
  
  componentDidUpdate(_prevProps, prevState) {
    if (prevState.searchKeyword !== this.state.searchKeyword) {
      this.setState({ images: [], page: 1, error: null });
    }
  }
    

      showLoader = () => {
    this.setState(({ isLoading }) => ({
      isLoading: !isLoading,
    }));
  };



  render() {
    window.addEventListener("keydown", this.closeModalWithEsc);
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} handleChange={this.handleChange} />
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {this.state.isLoading && <LoaderFetch />}
        
      
        <Button loadMoreImages={this.loadMoreImages} />
        {this.state.isOpenModal === true ? (
          <Modal
            closeModal={this.closeModal}
            modalImage={this.state.modalImage}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;

