import './style.css';

console.log("Hello There!");

// left banner div
const bannerLeft = document.createElement('div');
bannerLeft.classList.add('banner_left');
const leftH2 = document.createElement('h2');
const h2Text = document.createTextNode('Enjoy the delicious food experience');
leftH2.appendChild(h2Text);
bannerLeft.appendChild(leftH2);

// right banner div
const bannerRight = document.createElement('div');
bannerRight.classList.add('banner_right');
const rightImg = document.createElement('img');
rightImg.setAttribute('src', "https://www.tasteofhome.com/wp-content/uploads/2019/08/group-bombay-chat-food-includes-golgappapanipuri-shutterstock_1422412163.jpg");
rightImg.classList.add('img-fluid');
bannerRight.appendChild(rightImg);

// Main banner div
const bannerDiv = document.createElement('div');
bannerDiv.classList.add('banner');

bannerDiv.appendChild(bannerLeft);
bannerDiv.appendChild(bannerRight);


// main body div with id content
const element = document.getElementById('content');
element.appendChild(bannerDiv);