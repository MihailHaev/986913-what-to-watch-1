import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`Welcome Screen correctly renders`, () => {
  const tree = renderer
    .create(<App
      filmList = {[`MMM`]}
      onFilmCLick = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
