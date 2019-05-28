import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import FilmCard from "../film-card/film-card";

class ListOfFilms extends PureComponent {
  constructor() {
    super();

    this.state = {
      hoverFilm: -1
    };
  }

  render() {
    const {films, onPrevClick, onTitleClick} = this.props;
    return films.map((film, id) => <FilmCard
      film={film}
      onPrevClick={onPrevClick}
      onTitleClick={onTitleClick}
      key={id}
      id={id}
      onMouseOver={() => {
        this.setState({
          hoverFilm: id
        });
      }}
    />);
  }
}

ListOfFilms.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })),
  onPrevClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default ListOfFilms;
