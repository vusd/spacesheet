import videojs from 'video.js';
require('videojs-playlist');
require('videojs-playlist-ui');

// Import videos
import '../media/videos/1-overview.mp4';
import '../media/videos/2-lerp.mp4';
import '../media/videos/3-grid-lerp.mp4';
import '../media/videos/4-random.mp4';
import '../media/videos/5-slider.mp4';

// Import posters
import '../media/videos/posters/poster.png';

const player = videojs(document.getElementById('player'), {
  autoplay: true,
});

player.playlist([
  {
    sources: [{
      src: './assets/media/1-overview.mp4',
      type: 'video/mp4',
    }],
    poster: './assets/media/poster.png',
    // thumbnail: './assets/media/poster.png',
    name: 'Overview',
  },
  {
    sources: [{
      src: './assets/media/2-lerp.mp4',
      type: 'video/mp4',
    }],
    poster: '',
    name: 'Linear Interpolation',
  },
  {
    sources: [{
      src: './assets/media/3-grid-lerp.mp4',
      type: 'video/mp4',
    }],
    poster: '',
    name: 'Grid Interpolation',
  },
  {
    sources: [{
      src: './assets/media/4-random.mp4',
      type: 'video/mp4',
    }],
    poster: '',
    name: 'Random Variables',
  },
  {
    sources: [{
      src: './assets/media/5-slider.mp4',
      type: 'video/mp4',
    }],
    poster: '',
    name: 'Slider Cells',
  },
]);
player.playlist.autoadvance(0);
player.playlistUi();
// player.playlist([{
//   sources: [{
//     src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
//     type: 'video/mp4'
//   }],
//   poster: 'http://media.w3.org/2010/05/sintel/poster.png'
// }, {
//   sources: [{
//     src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
//     type: 'video/mp4'
//   }],
//   poster: 'http://media.w3.org/2010/05/bunny/poster.png'
// }, {
//   sources: [{
//     src: 'http://vjs.zencdn.net/v/oceans.mp4',
//     type: 'video/mp4'
//   }],
//   poster: 'http://www.videojs.com/img/poster.jpg'
// }, {
//   sources: [{
//     src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
//     type: 'video/mp4'
//   }],
//   poster: 'http://media.w3.org/2010/05/bunny/poster.png'
// }, {
//   sources: [{
//     src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
//     type: 'video/mp4'
//   }],
//   poster: 'http://media.w3.org/2010/05/video/poster.png'
// }]);





// .playlistUi();
