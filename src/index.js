// @flow

import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import AudioPlayer from './modules/AudioPlayer';
 

type Props = {};

type State = {
  queue?: Array<string>,
  players?: { a: any, b: any }
};


class CrossfadingMediaPlayer extends Component<Props, State> {

  constructor() {
    super();

    this.state = {
      queue: [],
      players: {
        "a": {},
        "b": {}
      }
    };
  };

  componentWillReceiveProps(nextProps: Object) {
    this.setState({
      queue: nextProps.queue
    });
  };

  componentWillMount() {
    let players = {};

    let player_a: AudioPlayer = new AudioPlayer("a");
    let player_b: AudioPlayer = new AudioPlayer("b");

    players.a = player_a;
    players.b = player_b;

    this.setState({
      players: players
    });
  };

  /**
   * Check that the player is nearing the end of the preview 
   * if so, fade the volume down and bring in the other player
   * @param {string} playerName 
   */
  handlePlayerDuration(playerName: string) {};

  handlePlayerReady(playerName: string) {};

  handlePlayerStart(playerName: string) {};

  handlePlayerPlaying(playerName: string) {};

  handlePlayerProgress(playerName: string) {};

  handlePlayerPaused(playerName: string) {};

  handlePlayerBuffering(playerName: string) {};

  handlePlayerEnded(playerName: string) {};

  handlePlayerError(playerName: string) {};
  
  render () {

    const {queue, players} = this.state;

    debugger;

    let player_a = 
      <ReactPlayer 
        loop={false}
        controls={false}
        volume={1}
        muted={false}
        playbackRate={1}
        onReady={this.handlePlayerReady.bind(this, "a")}
        onStart={this.handlePlayerStart.bind(this, "a")}
        onPlay={this.handlePlayerPlaying.bind(this, "a")}
        onProgress={this.handlePlayerProgress.bind(this, "a")}
        onDuration={this.handlePlayerDuration.bind(this, "a")}
        onPause={this.handlePlayerPaused.bind(this, "a")}
        onBuffer={this.handlePlayerBuffering.bind(this, "a")}
        onEnded={this.handlePlayerEnded.bind(this, "a")}
        onError={this.handlePlayerError.bind(this, "a")} />;

    return (
      <div>
        {player_a}
      </div>
    );
  }
}

export default CrossfadingMediaPlayer;