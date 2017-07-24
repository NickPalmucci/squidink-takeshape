import ScrollMagic from 'scrollmagic';

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({duration: 0})
  .setPin('.sideMenu')
  .addTo(controller);

new ScrollMagic.Scene({duration: 0})
  .setPin('.mbSide')
  .addTo(controller);

const sceneOne = new ScrollMagic.Scene({triggerElement: '#trigger'})
  .setClassToggle('.sideMenu', 'displayMenu')
  .addTo(controller);

sceneOne.on('enter', () => {
  const sideMenu = document.getElementsByClassName('sideMenu')[0];
  sideMenu.style.top = '2rem';
});

const sceneTwo = new ScrollMagic.Scene({triggerElement: '#trigger'})
  .setClassToggle('.mbLogo', 'mbLogoActive')
  .addTo(controller);

sceneTwo.on('enter', () => {
  const mbMenu = document.getElementsByClassName('mbSide')[0];
  mbMenu.style.top = '2rem';
});

new ScrollMagic.Scene({triggerElement: '#trigger'})
  .setClassToggle('.sideLogoContainer', 'sideLogoActive')
  .addTo(controller);

new ScrollMagic.Scene({triggerElement: '#trigger'})
  .setClassToggle('.sideLogoMenu', 'superSide')
  .addTo(controller);

new ScrollMagic.Scene({triggerElement: '#trigger'})
  .setClassToggle('.scrollmagic-pin-spacer', 'freePin')
  .addTo(controller);
