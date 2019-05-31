import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._timerId = null;
    this.state = {
      isPlaying: props.isPlaying,
      isLoading: true,
      currentTime: 0,
    };
  }

  render() {
    const {img, src} = this.props.film;
    return <video
      ref={this._videoRef}
      src={src}
      poster={img}
      width="280"
      height="175"
      muted
    />;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      this._timerId = setTimeout(() => {
        video.play();
        this._timerId = null;
        this.setState({
          isPlaying: true,
        });
      }, 1000);
    } else {
      if (this._timerId) {
        clearTimeout(this._timerId);
      }
      video.load();
      this.setState({
        isPlaying: false,
      });
    }
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
