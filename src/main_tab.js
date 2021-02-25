const homeSection = () => {
  const divHome = document.createElement('div');
  divHome.setAttribute('id', 'nav-homeTab');
  divHome.classList.add('home__nav');

  const headingHome = document.createElement('h1');
  headingHome.innerText = 'Welcome to Div\'s Kitchen';
  divHome.appendChild(headingHome);

  return divHome;
}

export default homeSection;