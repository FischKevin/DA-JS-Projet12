import React from 'react';
import PropTypes from 'prop-types';

function Card({ backgroundColor, imageUrl, data, category }) {
  const imgWrapperStyle = {
    background: backgroundColor,
  };

  return (
    <div className="card">
      <div>
        <div className='imgBackground' style={imgWrapperStyle}></div>
        <img src={imageUrl} alt={category} />
      </div>
      <div className='cardText'>
        <p className="data">{data}</p>
        <p className="category">{category}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Card;
