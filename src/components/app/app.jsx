import React from "react";
import PropTypes from "prop-types";

import HomePage from "../home-page/home-page.jsx";

const App = (props) => {
  const {filmList} = props;
  return <HomePage
    filmList = {filmList}
  />;
};

App.propTypes = {
  filmList: PropTypes.array,
};

export default App;
