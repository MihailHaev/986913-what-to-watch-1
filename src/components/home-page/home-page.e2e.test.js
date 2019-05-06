import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HomePage from "./home-page";

Enzyme.configure({adapter: new Adapter()});

it(`Click on Film title is currectly work`, () => {
  const clickHandler = jest.fn();
  const filmList = [`MMM`, `dds`];

  const homePage = shallow(<HomePage
    filmList = {filmList}
    onFilmCLick = {clickHandler}
  />);

  const filmTitles = homePage.find(`.small-movie-card__link`);
  filmTitles.map((filmTitle) => {
    filmTitle.simulate(`click`, {preventDefault() {}});
  });

  expect(clickHandler).toHaveBeenCalledTimes(filmList.length);
});
