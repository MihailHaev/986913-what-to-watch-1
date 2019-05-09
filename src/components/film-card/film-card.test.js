import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card";

const mock = {
  film: {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  }
};

it(`Film Card correctly renders`, () => {
  const {film} = mock;
  const tree = renderer
    .create(<FilmCard
      film={film}
      onPrevClick={jest.fn()}
      onTitleClick={jest.fn()}
      key={0}
      id={0}
      onMouseOver={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
