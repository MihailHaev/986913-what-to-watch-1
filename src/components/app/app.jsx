import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import HomePage from "../home-page/home-page";

class App extends PureComponent {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {filmList} = this.props;
    return <HomePage
      filmList = {filmList}
    />;
  }
}

App.propTypes = {
  filmList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    reating: PropTypes.number.isRequired,
    genre: PropTypes
      .arrayOf(PropTypes
      .oneOf([`comdeies`, `crime`, `documentary`, `dramas`, `horror`, `kids & family`, `romance`, `sci-fi`, `thrillers`
      ])),
    src: PropTypes.string.isRequired
  })).isRequired,
};

export default App;
