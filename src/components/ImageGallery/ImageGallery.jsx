
import { Component } from "react";
import { ThreeDots } from 'react-loader-spinner'
import Button from '../Button/Button'
import styles from './ImageGallery.module.css'




const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};


export default class ImageGallery extends Component{
    state = {
        photo: [],
        loading: false,
        currentPage: 1,
        photoName: ''
    }
    loadMore = () => {
     
    this.setState(
      (prevState) => ({
        currentPage: prevState.currentPage + 1,
        status: STATUS.PENDING,
      }),
        () => {
            this.fetchPhotos();
        }
    );
    };
    fetchPhotos = () => {
  if (this.props.photoName) {
    this.setState({ loading: true }); // Keep the loading state as true while fetching
    fetch(`https://pixabay.com/api/?q=${this.props.photoName}&page=${this.state.currentPage}&key=35297902-06b0f2f0980941222f0bd9a52&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then((data) => {
        this.setState((prevState) => ({
          photo: [...prevState.photo, ...data.hits], // Append new photos to the existing list
          loading: false,
        }));
      })
      .catch(error => {
        console.error("Error loading data:", error);
        this.setState({ loading: false });
      });
  }
};

    componentDidUpdate(prevProps) {
  if (this.props.photoName && prevProps.photoName !== this.props.photoName) {
        this.setState({ loading: true, photo: [] }); // Clear the photo list before loading new photos
        fetch(`https://pixabay.com/api/?q=${this.props.photoName}&page=${this.state.currentPage}&key=35297902-06b0f2f0980941222f0bd9a52&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ photo: data.hits, loading: false });
            })
            .catch(error => {
                console.error("Error loading data:", error);
                this.setState({ loading: false });
            });
    }
}
        

    render() {
        const { loading, photo } = this.state;
    const showLoadMoreButton = photo.length > 0;
        return (
                <div>
                <ul className={styles.gallery}>
                    {this.state.loading && <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />}
                    {this.state.photo && this.state.photo.map((photo) => (
            <li key={photo.id}>
                            <img src={photo.previewURL} alt={photo.tags} />
                            
            </li>
            
          ))}
                </ul>
                {showLoadMoreButton && <Button onClick={this.loadMore} loading={loading} />}
                 
   </div>
    )
};
};           