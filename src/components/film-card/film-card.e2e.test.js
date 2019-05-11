import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

Enzyme.configure({adapter: new Adapter()});
const mock = {
  film: {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  }
};

it(`Click on Film title is currectly work`, () => {
  const {film} = mock;
  const clickOnTitleHandler = jest.fn();
  const clickOnPlayHandler = jest.fn();
  const clickOnHoverHandler = jest.fn();

  const filmCard = shallow(<FilmCard
    film={film}
    onPrevClick={clickOnPlayHandler}
    onTitleClick={clickOnTitleHandler}
    key={0}
    id={0}
    onMouseOver={clickOnHoverHandler}
  />);

  const filmTitle = filmCard.find(`.small-movie-card__link`);
  const filmPlayButton = filmCard.find(`button`);

  filmPlayButton.simulate(`click`);
  filmTitle.simulate(`click`, {preventDefault() {}});
  filmCard.simulate(`mouseover`);

  expect(clickOnTitleHandler).toHaveBeenCalledTimes(1);
  expect(clickOnPlayHandler).toHaveBeenCalledTimes(1);
  expect(clickOnHoverHandler).toHaveBeenCalledTimes(1);
});
