//
// export default (sm, controller) => {
//   console.log('hit one');
//   new sm.Scene({duration: 0})
//     .setPin('.mbSide')
//     .addTo(controller);
//
//   const sceneTwo = new sm.Scene({triggerElement: '#trigger'})
//     .setClassToggle('.mbLogo', 'mbLogoActive')
//     .addTo(controller);
//
//   sceneTwo.on('enter', () => {
//     console.log('hit two');
//     const mbMenu = document.getElementsByClassName('mbSide')[0];
//     mbMenu.style.top = '2rem';
//   });
// };
