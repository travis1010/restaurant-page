export default function loadMenu() {
  const middle = document.getElementById('middle');

  while (middle.firstChild) {
    middle.removeChild(middle.firstChild);
  }

  const menu = document.createElement('div');
  menu.textContent = 'this will be the menu!!!';

  middle.appendChild(menu);
}