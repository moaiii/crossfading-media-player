// @flow

class AudioPlayer {
  
  constructor(name: string) {
    name = name;
  };

  elapsed: number = 0;
  maxPlaybackDuration: number = 30; 
  fadeTime: number = 3;
  isPlaying: boolean = false;
  previewUrl: string = '';
  volume: number = 0;

  get isPlaying(): boolean {
    return this.isPlaying;
  };

  setIsPlaying(playing: boolean) {
    this.isPlaying = playing;
  };

  setUrl(url: string) {
    this.previewUrl = url;
  };

  setVolume(level: number) {
    this.volume = level;
  };
};

export default AudioPlayer;