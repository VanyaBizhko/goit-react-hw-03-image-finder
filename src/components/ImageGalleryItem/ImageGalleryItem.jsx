import { Component } from "react";

export default class ImageGalleryItem extends Component{
    
    render() {
        return (
            <div>
                <p>фото тут</p>
                <p>{this.props.photoName}</p>
            </div>
        )
    }
}