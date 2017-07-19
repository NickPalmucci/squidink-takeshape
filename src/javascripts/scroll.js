import ScrollMagic from 'scrollmagic';

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({duration: 0, offset: 120})
  .setPin('.sideMenu')
  .addTo(controller);

new ScrollMagic.Scene({triggerElement: '.eight', offset: 300})
  .setClassToggle('.sideMenu', 'displayMenu')
  .addTo(controller);

new ScrollMagic.Scene({triggerElement: '.eight', offset: 300})
  .setClassToggle('.sideLogoContainer', 'sideLogoActive')
  .addTo(controller);

new ScrollMagic.Scene({triggerElement: '.eight', offset: 300})
  .setClassToggle('.sideLogoMenu', 'superSide')
  .addTo(controller);

new ScrollMagic.Scene({triggerElement: '.eight', offset: 300})
  .setClassToggle('.scrollmagic-pin-spacer', 'freePin')
  .addTo(controller);
