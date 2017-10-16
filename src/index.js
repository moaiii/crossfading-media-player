// @flow

import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import AudioPlayer from './modules/AudioPlayer';
 

type Props = {};

type State = {
  queue?: Array<string>,
  players?: { string: AudioPlayer }
};


class CrossfadingMediaPlayer extends Component<Props, State> {

  constructor() {
    super();

    this.state = {
      queue: null,
      players: null
    };
  };

  componentWillReceiveProps(nextProps: Object) {
    this.setState({
      queue: nextProps.queue
    });
  };

  componentWillMount() {
    let players: { any: AudioPlayer } = {};

    let player_a: AudioPlayer = new AudioPlayer("a");
    let player_b: AudioPlayer = new AudioPlayer("a");

    let players.a: AudioPlayer = player_a;
    let players.b: AudioPlayer = player_b;

    this.setState({
      players: players
    });
  };
  
  render () {

    const {queue, players} = this.state;

    let player_a = 
      <ReactPlayer 
        url={players["a"].url}
        playing={players["a"].isPlaying}
        loop={false}
        controls={false}
        volume={1}
        muted={false}
        playbackRate={1}
        onReady={this.playerReady("a")}
        onStart={this.playerStart("a")}
        onPlay={this.playerPlaying("a")}
        onProgress={this.playerProgress("a")}
        onDuration={this.playerDuration("a")}
        onPause={this.playerPaused("a")}
        onBuffer={this.playerBuffering("a")}
        onEnded={this.playerEnded("a")}
        onError={this.playerError("a")} />;

    return (
      <div>
        {player_a}
        {player_b}
      </div>
    );
  }
}

export default CrossfadingMediaPlayer;