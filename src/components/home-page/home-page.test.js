import React from "react";
import renderer from "react-test-renderer";
import HomePage from "./home-page";

const mock = {
  films: [{
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    desc: ``,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    reating: -1,
    genre: [],
    src: ``
  }, {
    title: `Bohemian Rhapsody`,
    desc: ``,
    img: `img/bohemian-rhapsody.jpg`,
    reating: -1,
    genre: [],
    src: ``
  }]
};

it(`Home Page correctly renders`, () => {
  const {films} = mock;
  const tree = renderer
    .create(<HomePage
      filmList = {films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
