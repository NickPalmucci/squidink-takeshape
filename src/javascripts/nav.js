const handleTop = () => {
  const topMenu = document.getElementsByClassName('logoMenu')[0];

  if (topMenu.classList.value.indexOf('active') !== -1) {
    return topMenu.classList.remove('activeTop');
  }
  topMenu.classList.add('activeTop');
};

const handleSide = () => {
  const sideMenu = document.getElementsByClassName('sideLogoMenu')[0];

  if (sideMenu.classList.value.indexOf('active') !== -1) {
    return sideMenu.classList.remove('activeSide');
  }
  sideMenu.classList.add('activeSide');
};

const handleMobile = () => {
  const mbMenu = document.getElementsByClassName('mbMenu')[0];
  const mbLogo = document.getElementsByClassName('mbLogo')[0];
  const mbSide = document.getElementsByClassName('mbSide')[0];

  if (mbMenu.classList.value.indexOf('Active') !== -1) {
    mbMenu.classList.remove('mbMenuActive');
  } else {
    mbMenu.classList.add('mbMenuActive');
  }

  if (mbLogo.classList.value.indexOf('Active') === -1) {
    mbLogo.classList.add('mbLogoActive');
    mbSide.style.top = '2rem';
  } else {
    mbLogo.classList.remove('mbLogoActive');
  }
};

const setListener = () => {
  const topLogo = document.getElementsByClassName('logo')[0];
  const sideLogo = document.getElementsByClassName('logo')[1];
  const mbLogo = document.getElementsByClassName('mbLogo')[0];
  const mbClose = document.getElementsByClassName('mbClose')[0];

  topLogo.removeEventListener('click', handleTop);
  sideLogo.removeEventListener('click', handleSide);
  mbLogo.removeEventListener('click', handleMobile);
  mbClose.removeEventListener('click', handleMobile);

  topLogo.addEventListener('click', handleTop);
  sideLogo.addEventListener('click', handleSide);
  mbLogo.addEventListener('click', handleMobile);
  mbClose.addEventListener('click', handleMobile);
};

setListener();
