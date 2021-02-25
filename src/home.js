import loadMenu from './menu';

const homeSection = () =>  {
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

  // Menu Item  
 const menuBar = document.createElement('button');
 menuBar.classList.add('nav_button');
 menuBar.setAttribute('id', 'nav-menu');
 menuBar.innerText = "Menu";
//  menuBar.addEventListener("click", (e) => {
//    if(e.target.classList.contains('active')) return;
//    loadMenu();
//  });

  //  Contact Item
 const contactBar = document.createElement('button');
 contactBar.classList.add('nav_button');
 contactBar.innerText = "Contact";


 navBar.appendChild(menuBar);
 navBar.appendChild(contactBar);

 return navBar;
}

const initialHomePage = () => {
  const content = document.getElementById('content');
  content.appendChild(homeSection());
  content.appendChild(navSection());
}

export default initialHomePage;