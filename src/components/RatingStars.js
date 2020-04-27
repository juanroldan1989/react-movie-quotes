import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

// https://material-ui.com/components/rating/

const RatingStars = (props) => {
  return (
    <React.Fragment>
      <Box component="fieldset" mb={3} borderColor="transparent" className="box-rating-stars">
        <Rating
          name="read-only"
          value={props.rating}
          max={10}
          readOnly
        />
      </Box>
    </React.Fragment>
  );
}

export default RatingStars;
