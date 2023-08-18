import { Component } from "react";

import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'
import styles from './App.module.css'


export default class App extends Component {
  state = {
    photoName: '',


    photo: [] 
  }
 
  handleSearchbarSubmit = photoName => {
    this.setState({ photoName });
  };

  updatePhotos = (newPhotos, newPage) => {
    this.setState((prevState) => ({
      photo: [...prevState.photo, ...newPhotos],
      currentPage: newPage,
    }));
  };
  
  
  render() {
    const { photoName, photo } = this.state;
    
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImageGallery photoName={photoName} photo={photo}>
  <ImageGalleryItem />
</ImageGallery>
        
      </div>
    )
  }
}
//35297902-06b0f2f0980941222f0bd9a52