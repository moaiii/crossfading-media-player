// @flow

class AudioPlayer {
  name: string;
  elapsed: number;
  maxPlaybackDuration: number;
  fadeTime: number;
  isPlaying: boolean;
  previewUrl: string;
  volume: number;
  fadeSmoothness: number;
  
  constructor(name: string) {
    this.name = name;
    this.elapsed = 0;
    this.maxPlaybackDuration = 30; 
    this.fadeTime = 3;
    this.isPlaying = false;
    this.previewUrl = '';
    this.volume = 0;
    this.fadeSmoothness = 4;
  };


  fadeVolume(direction: string) {

    let fadeTimeMilliseconds = this.fadeTime * 1000;                                // 3000
    let fadeSmoothnessMilliseconds = 1000 / this.fadeSmoothness;                    // 250
    let numOfVolumeIncrements = fadeTimeMilliseconds / fadeSmoothnessMilliseconds;  // 3000 / 250 = 12
    let volumeStepSize = Math.ceil10(1 / numOfVolumeIncrements, -2);                // 0.083 rounded up to 0.09
    let count = 0;

    setInterval(() => {
      if(direction === "up" && this.volume <= 0) 
        { this.volume += volumeStepSize; }
      else if (direction === "down" && this.volume >= 1) 
        { this.volume -= volumeStepSize; }
      else 
        { console.error("Volume change error. Vol = ", this.volume); }

      console.log(`Volume of ${this.name} is ${this.volume} @ inc ${count}`);

      count++;

    }, fadeSmoothnessMilliseconds);
  };

  
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