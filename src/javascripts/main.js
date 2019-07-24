import lazySizes from 'lazysizes';
import imagesLoaded from 'imagesloaded';

lazySizes.init();

const shopCallback = () => {
  const shopViz = document.getElementsByClassName('shopViz').item(0);

  if (shopViz) {
    shopViz.style.visibility = 'visible';
  }
};

imagesLoaded('.shopImg', shopCallback);

window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.loadMode = 1;

import './scroll';
import './nav';

