import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// const throttle = require('lodash.throttle');
// console.dir(throttle);

player.on('timeupdate', throttle(onPlay), 1000);

function onPlay(data) {
  const playTime = JSON.stringify(data.seconds);
  localStorage.setItem('videoplayer-current-time', playTime);
}

const seconds = localStorage.getItem('videoplayer-current-time');
const parsedSeconds = JSON.parse(seconds);
console.log(typeof parsedSeconds);

player.setCurrentTime(parsedSeconds);
