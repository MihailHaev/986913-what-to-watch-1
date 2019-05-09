import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {film, onPrevClick, onTitleClick, id, onMouseOver} = props;
  return <article className="small-movie-card catalog__movies-card" onMouseOver={onMouseOver}>
    <button className="small-movie-card__play-btn" type="button" onClick={onPrevClick}>Play</button>
    <div className="small-movie-card__image">
      <img src={film.img} alt={film.title} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html" onClick={onTitleClick} id={id}>{film.title}</a>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
  onPrevClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onMouseOver: PropTypes.func.isRequired,
};

export default FilmCard;
