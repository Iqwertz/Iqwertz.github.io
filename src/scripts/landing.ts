import Typed from 'typed.js';

var typedIntro = new Typed('.intro-typed', {
  strings: ['Hey, my name is'],
  typeSpeed: 30,
  cursorChar: '_',
  backSpeed: 60,
  backDelay: 2000,
  showCursor: true,
  loop: false,
  onComplete: (self) => {
    typedIntro.cursor.remove();
    var typedHighlight = new Typed('.highlight-typed', {
      strings: ['Julius Hussl.'],
      typeSpeed: 60,
      cursorChar: '_',
      backSpeed: 60,
      backDelay: 2000,
      showCursor: true,
      loop: false,
      onComplete: (self) => {
        typedHighlight.cursor.remove();
        var typedSubIntro = new Typed('.sub-intro-typed', {
          strings: [
            'I´m a software developer.',
            'I´m a physics student.',
            'I´m a 3D printing enthusiast.',
            'I´m a tinkerer.',
          ],
          typeSpeed: 30,
          cursorChar: '_',
          backSpeed: 60,
          backDelay: 1000,
          startDelay: 100,
          showCursor: true,
          loop: true,
        });
      },
    });
  },
});

//tsParticles
import { type Container, type Engine, tsParticles } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

// the function name is the parameter passed to the init attribute
// required
// add the function to window is mandatory, it will be searched there
window.particlesInit = async function (engine: Engine) {
  await loadFull(engine);
};

// the function name is the parameter passed to the loaded attribute
// optional
// add the function to window is mandatory, it will be searched there
window.particlesLoaded = function (container: Container) {
  console.log('particlesLoaded callback');
};
