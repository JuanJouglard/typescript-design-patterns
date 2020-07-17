import {Image} from './images-list';
import {Iterator} from './iterator';

export class Carousel {
    
    currentImage: Image;
    imageIterator: Iterator<Image>;

    constructor(props) {
	super(props);
	this.imageIterator = props.images.iterator();
	this.state = {
	    currentImage: this.imageIterator.next()
	}
    }

    render() {
	return (
	    <div>
		<img src={this.currentImage.source}></img>
		<button onClick={this.getNextImage}>Next Image</button>
	    </div>
	);
    }

    getNextImage() {
	if (!this.imageIterator.complete()) {
	    const nextImage = this.imageIterator.next();
	    this.setState({currentImage: nextImage});
	}
    }
}

Carousel.propTypes = {
    images: Image[]
}
