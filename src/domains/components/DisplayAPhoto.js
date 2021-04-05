import React from "react";
import PropTypes from "prop-types";

export  const DisplayAPhoto = ({ photoUrl, title }) => (
  <div>{photoUrl ? <img width="50" src={photoUrl} alt={title} /> : null}</div>
);

DisplayAPhoto.propTypes = {
  photoUrl: PropTypes.string,
  title: PropTypes.string,
};