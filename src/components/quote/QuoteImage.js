import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';

// https://github.com/Aljullu/react-lazy-load-image-component#lazyloadimage-usage

const QuoteImage = (props) => {

  const quote = props.quote;

  return (
    <React.Fragment>
      <LazyLoadImage
        alt={quote.movie}
        effect="blur"
        src={quote.image_large_url}
        placeholderSrc={quote.image_thumb_url}
        className="card-img-top"
      />
    </React.Fragment>
  )
}

QuoteImage.propTypes = {
  quote: PropTypes.object
};

export default QuoteImage;
