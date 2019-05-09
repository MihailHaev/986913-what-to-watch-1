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
  filmList: PropTypes.array.isRequired,
};

export default App;
