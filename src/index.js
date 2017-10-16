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
    let player_b: AudioPlayer = new AudioPlayer("b");

    let players.a: AudioPlayer = player_a;
    let players.b: AudioPlayer = player_b;

    this.setState({
      players: players
    });
  };

  /**
   * Check that the player is nearing the end of the preview 
   * if so, fade the volume down and bring in the other player
   * @param {string} playerId 
   */
  handlePlayerDuration(playerId: string) {

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
        onReady={this.handlePlayerReady("a")}
        onStart={this.handlePlayerStart("a")}
        onPlay={this.handlePlayerPlaying("a")}
        onProgress={this.handlePlayerProgress("a")}
        onDuration={this.handlePlayerDuration("a")}
        onPause={this.handlePlayerPaused("a")}
        onBuffer={this.handlePlayerBuffering("a")}
        onEnded={this.handlePlayerEnded("a")}
        onError={this.handlePlayerError("a")} />;

    return (
      <div>
        {player_a}
        {player_b}
      </div>
    );
  }
}

export default CrossfadingMediaPlayer;