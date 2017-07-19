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

const setListener = () => {
  const topLogo = document.getElementsByClassName('logo')[0];
  const sideLogo = document.getElementsByClassName('logo')[1];

  topLogo.removeEventListener('click', handleTop);
  sideLogo.removeEventListener('click', handleSide);

  topLogo.addEventListener('click', handleTop);
  sideLogo.addEventListener('click', handleSide);
};

setListener();
