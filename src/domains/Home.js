import React from "react";
import PropTypes from "prop-types";

import DisplayLimit from "./components/DisplayLimit";
import {DisplayAPhoto} from "./components/DisplayAPhoto";

export const Home = ({ limit, setLimit, photos }) => {
  return (
    <div>
        {photos.slice(0, limit).map(({ url, title, id }) => (
          <div key={id}>
            <DisplayAPhoto photoUrl={url} title={title} />
          </div>
        ))}
      <DisplayLimit setLimit={setLimit} limit={limit} />
    </div>
  );
};

Home.propTypes = {
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.func.isRequired,
};