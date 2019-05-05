import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Welcome Screen correctly renders`, () => {
  const tree = renderer
    .create(<App
      filmList={[`MMM`]}
      onClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
