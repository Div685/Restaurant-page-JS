import loadMenu from './menu';
import homeSection from './main_tab';

const content = document.getElementById('content');


const bannerSection = () =>  {
  const banner = document.createElement('div');
  banner.classList.add('banner');

  // Left side banner
  const bannerLeft = document.createElement('div');
  bannerLeft.classList.add('banner_left');
  const logo = document.createElement('span');
  logo.classList.add('span');
  logo.innerText = "Div's kitchen";
  const hText = document.createElement('h2');
  hText.innerText = 'Enjoy the delicious food experience';
  
  bannerLeft.appendChild(logo);
  bannerLeft.appendChild(hText);
  
  // right banner
  const bannerRight = document.createElement('div');
  bannerRight.classList.add('banner_right');
  const rightImg = document.createElement('img');
  rightImg.setAttribute('src', "https://www.tasteofhome.com/wp-content/uploads/2019/08/group-bombay-chat-food-includes-golgappapanipuri-shutterstock_1422412163.jpg");
  rightImg.classList.add('img-fluid');
  bannerRight.appendChild(rightImg);

  banner.appendChild(bannerLeft);
  banner.appendChild(bannerRight);
  return banner;
}

const navSection = () => {
 const navBar = document.createElement('nav');
 navBar.classList.add('nav');
 navBar.setAttribute('id', 'nav')

  // Home Item
  const homeBar = document.createElement('button');
  homeBar.classList.add('nav_button');
  homeBar.setAttribute('id', 'nav-homeTab1');
  homeBar.innerText = 'Home';

  // Menu Item  
 const menuBar = document.createElement('button');
 menuBar.classList.add('nav_button');
 menuBar.setAttribute('id', 'nav-menu');
 menuBar.innerText = "Menu";

  //  Contact Item
 const contactBar = document.createElement('button');
 contactBar.classList.add('nav_button');
 contactBar.setAttribute('id', 'nav-contact');
 contactBar.innerText = "Contact";

 navBar.appendChild(homeBar);
 navBar.appendChild(menuBar);
 navBar.appendChild(contactBar);

 return navBar;
}


const tabSection = () => {
  const mainTab = document.createElement('div');
  mainTab.classList.add('main_tab');
  mainTab.setAttribute('id', 'sections')
  
  return mainTab;
}

const setActiveButton = (button) => {
  const buttons = document.querySelectorAll('.nav_button');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
}

const initialHomePage = () => {
  content.appendChild(bannerSection());
  content.appendChild(navSection());
  content.appendChild(tabSection());
  
  setActiveButton(document.querySelector(".nav_button"));
}

export default initialHomePage;