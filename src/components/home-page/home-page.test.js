import React from "react";
import renderer from "react-test-renderer";
import HomePage from "./home-page";

it(`Home Page correctly renders`, () => {
  const tree = renderer
    .create(<HomePage
      filmList = {[`MMM`]}
      onFilmCLick = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
