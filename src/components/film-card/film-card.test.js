import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card";

const mock = {
  film: {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    src: ``,
  }
};

it(`Film Card correctly renders`, () => {
  const {film} = mock;
  const tree = renderer
    .create(<FilmCard
      film={film}
      checkActiveCard={jest.fn()}
      onMouseOut={jest.fn()}
      onMouseOver={jest.fn()}
      key={0}
      id={0}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
