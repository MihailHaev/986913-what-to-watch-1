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
    const {films} = this.props;
    return films.map((film, id) => <FilmCard
      film={film}
      checkActiveCard={this.checkActiveCard.bind(this)}
      key={id}
      onMouseOver={(evt) => {
        if (evt.target.tagName === `VIDEO`) {
          this.setState({
            hoverFilm: id
          });
        }
      }}
      onMouseOut={(evt) => {
        if (evt.target.tagName === `VIDEO`) {
          this.setState({
            hoverFilm: -1
          });
        }
      }}
      id={id}
    />);
  }

  onMouseOver(id) {
    if (this.state.hoverFilm !== id) {
      this.setState({
        hoverFilm: id
      });
    }
  }

  onMouseOut(id) {
    if (this.state.hoverFilm === id) {
      this.setState({
        hoverFilm: -1,
      });
    }
  }

  checkActiveCard() {
    const previewingFilm = this.state.hoverFilm;
    return previewingFilm;
  }
}

ListOfFilms.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })),
};

export default ListOfFilms;
