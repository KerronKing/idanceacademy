import React from 'react';
import ImageGallery from 'react-image-gallery';
import imageLinks from '../data/imagelinks';

const Gallery = () => {
  return(
    <ImageGallery items={imageLinks} />
  );
}

export default Gallery;
