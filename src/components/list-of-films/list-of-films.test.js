import React from "react";
import renderer from "react-test-renderer";
import ListOfFilms from "./list-of-films";

const mock = {
  films: [{
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    src: ``,
  }, {
    title: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
    src: ``,
  }]
};

it(`Home Page correctly renders`, () => {
  const {films} = mock;
  const tree = renderer
    .create(<ListOfFilms
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
