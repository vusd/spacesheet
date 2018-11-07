import videojs from 'video.js';
require('videojs-playlist');
require('videojs-playlist-ui');

// Import videos
// import '../media/videos/1-overview.mp4';
import '../media/videos/2-workspace.mp4';
import '../media/videos/3-interpolation.mp4';
import '../media/videos/4-analogy.mp4';
import '../media/videos/5-random-variables.mp4';
import '../media/videos/6-slider-cells.mp4';
import '../media/videos/7-mod-cells.mp4';

// Import posters
import '../media/videos/posters/still.png';

const player = videojs(document.getElementById('player'), {
  autoplay: true,
});

player.playlist([
  // {
  //   sources: [{
  //     src: './assets/media/1-overview.mp4',
  //     type: 'video/mp4',
  //   }],
  //   poster: './assets/media/still.png',
  //   name: 'Overview',
    // thumbnail: './assets/media/still.png',
  // },
  {
    sources: [{
      src: './assets/media/2-workspace.mp4',
      type: 'video/mp4',
    }],
    poster: './assets/media/still.png',
    name: 'Workspace',
  },
  {
    sources: [{
      src: './assets/media/3-interpolation.mp4',
      type: 'video/mp4',
    }],
    poster: '',
    name: 'Interpolation',
  },
  {
    sources: [{
      src: './assets/media/4-analogy.mp4',
      type: 'video/mp4',
    }],
    poster: '',
    name: 'Analogy',
  },
  {
    sources: [{
      src: './assets/media/5-random-variables.mp4',
      type: 'video/mp4',
    }],
    poster: '',
    name: 'Random Variables',
  },
  {
    sources: [{
      src: './assets/media/6-slider-cells.mp4',
      type: 'video/mp4',
    }],
    poster: '',
    name: 'Slider Cells',
  },
  {
    sources: [{
      src: './assets/media/7-mod-cells.mp4',
      type: 'video/mp4',
    }],
    poster: '',
    name: 'Mod Cells',
  },
]);

player.playlist.autoadvance(0);
player.playlist.repeat(true);
player.playlistUi();
