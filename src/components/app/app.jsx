import React from "react";
import PropTypes from "prop-types";

import HomePage from "../home-page/home-page";

const App = (props) => {
  const {filmList, onFilmCLick} = props;
  return <HomePage
    filmList = {filmList}
    onFilmCLick = {onFilmCLick}
  />;
};

App.propTypes = {
  filmList: PropTypes.array,
  onFilmCLick: PropTypes.func,
};

export default App;
