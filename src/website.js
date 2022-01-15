import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";

export default function initializeWebsite() {
  const content = document.getElementById('content');

  const header = document.createElement('div');
  header.id = 'header';

  const middle = document.createElement('div');
  middle.id = 'middle';

  const footer = document.createElement('div');
  footer.id = 'footer';

  //header content --------------------------------------
  const h1 = document.createElement('h1');
  h1.textContent = 'Chain Restaurant';
  header.appendChild(h1);

  const navBar = document.createElement('ul');
  navBar.id = 'nav-bar';

  const homeLink = document.createElement('li');
  homeLink.textContent = 'Home';
  homeLink.onclick = loadHome;
  const menuLink = document.createElement('li');
  menuLink.textContent = 'Menu';
  menuLink.onclick = loadMenu;
  const contactLink = document.createElement('li');
  contactLink.textContent = 'Contact';
  contactLink.onclick = loadContact;

  navBar.appendChild(homeLink);
  navBar.appendChild(menuLink);
  navBar.appendChild(contactLink);
  header.appendChild(navBar);

  //footer content------------------------------
  const stockPhotosLink = document.createElement('a');
  stockPhotosLink.href = "https://www.vecteezy.com/free-photos";
  stockPhotosLink.textContent = 'Free Stock photos by Vecteezy';
  footer.appendChild(stockPhotosLink);

  content.appendChild(header);
  content.appendChild(middle);
  content.appendChild(footer);

  

  //middle content-------------------------------
  loadHome();
}