import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DisplayLimit from "./DisplayLimit";

const StyleDiv = styled.div`
  color: black;
`;

const PhotosByAlbum = ({ limit, setLimit, photos }) => {
  const [customPhotos, setCustomPhotos] = useState([]);

  useEffect(() => {
    if (!photos) return;
    const customizedPhotos = photos
      .sort((a, b) => {
        return a.title.length > b.title.length;
      })
      .filter(({ title }) => title.length <= limit)
      .map(({ title, ...photo }) => ({
        ...photo,
        title: title.toUpperCase(),
        titleNbLetters: title.length,
      }));

    const albums = [];
    customizedPhotos.forEach(({ albumId, ...photo }) => {
      if (albums[albumId]?.length >= 0) {
        albums[albumId].push(photo);
      } else {
        albums[albumId] = [photo];
      }
    });
    setCustomPhotos(albums);
  }, [limit, photos]);

  return (
    <StyleDiv>
      <DisplayLimit setLimit={setLimit} limit={limit} />
      {customPhotos.map((photo, key) => {
        return (
          <div key={key}>
            {photo.map(({ title, id }) => {
              return <div key={id}>{title}</div>;
            })}
            <hr />
          </div>
        );
      })}
    </StyleDiv>
  );
};

PhotosByAlbum.propTypes = {
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PhotosByAlbum;