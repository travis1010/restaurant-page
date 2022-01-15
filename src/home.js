export default function loadHome() {
  const middle = document.getElementById('middle');

  while (middle.firstChild) {
    middle.removeChild(middle.firstChild);
  }

  
  

  const h2 = document.createElement('h2');
  h2.textContent = 'Welcome!';

  const aboutPara = document.createElement('p');
  aboutPara.textContent = `Welcome to the Homepage of this Chain Restaurant!  Our menu is about the same as other chain resturants in your area, 
  and the food quality is similar too!  We hope you spend some money here soon! Sed eu placerat tellus, eu sollicitudin erat. Phasellus augue lorem, 
  varius tincidunt rutrum eget, sollicitudin rhoncus enim. Duis eget venenatis quam. Donec convallis diam et enim molestie lacinia. Phasellus eu 
  nisi non metus ultrices molestie non non augue. Aenean turpis neque, mattis at tincidunt vitae, dignissim sed augue.`;
  
  const about = document.createElement('div');
  about.id = 'about';
  about.appendChild(h2);
  about.appendChild(aboutPara);

  const kidsEatFree = document.createElement('div');
  kidsEatFree.textContent = 'Kids Eat Free!';
  kidsEatFree.classList.add('info-blip');

  const seniorDiscounts = document.createElement('div');
  seniorDiscounts.textContent = 'Senior Discounts';
  seniorDiscounts.classList.add('info-blip');

  const margaritaMondays = document.createElement('div');
  margaritaMondays.textContent = 'Margarita Mondays!';
  margaritaMondays.classList.add('info-blip');

  const drink = document.createElement('img');
  drink.src = './assets/drink.jpg';
  drink.classList.add('round-img');

  const hamburger = document.createElement('img');
  hamburger.src = './assets/hamburger.jpg';
  hamburger.classList.add('round-img');

  const salad = document.createElement('img');
  salad.src = './assets/salad.jpg';
  salad.classList.add('round-img');

  const home = document.createElement('div');
  home.id = 'home';

  const topBlips = document.createElement('div');
  topBlips.classList.add('home-blips');

  const middleBlips = document.createElement('div');
  middleBlips.classList.add('home-blips');

  const bottomBlips = document.createElement('div');
  bottomBlips.classList.add('home-blips')

  topBlips.appendChild(kidsEatFree);
  topBlips.appendChild(salad);
  middleBlips.appendChild(hamburger);
  middleBlips.appendChild(about);
  middleBlips.appendChild(margaritaMondays);
  bottomBlips.appendChild(seniorDiscounts);
  bottomBlips.appendChild(drink);

  home.appendChild(topBlips);
  home.appendChild(middleBlips);
  home.appendChild(bottomBlips);

  middle.appendChild(home);
}