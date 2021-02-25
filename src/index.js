import './style.css';
import initialHomePage from './home';

console.log("Hello There!");

initialHomePage();

document.addEventListener('click', (e) => {
  if(e.target && e.target.id === 'nav-menu'){
    // do something
  }else if (e.target && e.target.id == 'nav-contact') {
    // do something for contact page
  }
});