import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

const mock = {
  film: {
    title: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
    src: ``,
  },
};

it(`Video Player correctly renders`, () => {
  const {film} = mock;
  const tree = renderer
    .create(<VideoPlayer
      film={film}
      isPlaying={false}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
