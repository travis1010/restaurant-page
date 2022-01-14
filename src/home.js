export default function loadHome() {
  const middle = document.getElementById('middle');

  while (middle.firstChild) {
    middle.removeChild(middle.firstChild);
  }
  
  const para = document.createElement('p');
  para.textContent = `Welcome to the Homepage of this Chain Restaurant!  Our menu is about the same as other chain resturants in your area, 
  and the food quality is similar too!  We hope you spend some money here soon!`;

  middle.appendChild(para);
  
}