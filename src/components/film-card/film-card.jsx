import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import VideoPlayer from "../video-player/video-player";

class FilmCard extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const {film, checkActiveCard, onMouseOver, id, onMouseOut} = this.props;
    return <article className="small-movie-card catalog__movies-card" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <VideoPlayer
        isPlaying={id === checkActiveCard()}
        film={film}
      />
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </article>;
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
  checkActiveCard: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default FilmCard;
