import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player";

configure({adapter: new Adapter()});

const mock = {
  film: {
    title: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
    src: ``,
  },
};

const {film} = mock;

it(`on hover video player not currently works`, () => {

  const videoPlayer = mount(<VideoPlayer
    film={film}
    isPlaying={false}
  />);

  expect(videoPlayer.state(`isPlaying`)).toEqual(false);

  const button = videoPlayer.find(`video`);
  button.simulate(`mouseOver`, {
    preventDefault: videoPlayer.setState({isPlaying: !videoPlayer.state(`isPlaying`)}),
  });
  videoPlayer.update();

  setTimeout(() => {
    expect(videoPlayer.state(`isPlaying`)).toEqual(true);
  }, 2000);
});
