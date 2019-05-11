import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import films from "./mocks/films";

const init = (filmList) => {
  ReactDOM.render(
      <App
        filmList = {filmList}
      />,
      document.querySelector(`#root`)
  );
};

init(films);
