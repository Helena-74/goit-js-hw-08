import Player from '@vimeo/player';
import throttle from '../../node_modules/lodash.throttle';

class VideoHandler {
  constructor() {
    this.player = null;
    this.currentTimeKey = 'videoplayer-current-time';
  }

  init() {
    this.player = new Player('vimeo-player');
    this.addTimeUpdateListener();
    this.setSavedTime();
  }

  addTimeUpdateListener() {
    this.player.on('timeupdate', throttle(this.handleTimeUpdate, 1000));
  }

  handleTimeUpdate = (data) => {
    const currentTime = data.seconds;
    this.saveCurrentTime(currentTime);
  }

  saveCurrentTime(time) {
    localStorage.setItem(this.currentTimeKey, time);
  }

  getSavedTime() {
    return localStorage.getItem(this.currentTimeKey);
  }

  setSavedTime() {
    const savedTime = this.getSavedTime();
    if (savedTime) {
      this.player.setCurrentTime(savedTime);
    }
  }
}

const videoHandler = new VideoHandler();
videoHandler.init();
// console.log(Player);