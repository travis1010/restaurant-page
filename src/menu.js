export default function loadMenu() {
  const middle = document.getElementById('middle');

  while (middle.firstChild) {
    middle.removeChild(middle.firstChild);
  }

  const menu = document.createElement('div');
  menu.id = 'menu';

  const h2 = document.createElement('h2');
  h2.id = 'menu-header';
  h2.textContent = 'Menu';

  const column1 = document.createElement('div');
  column1.classList.add('menu-column');
  const column2 = document.createElement('div');
  column2.classList.add('menu-column');
  const column3 = document.createElement('div');
  column3.classList.add('menu-column');

  //column 1

  //appetizers
  const apps = document.createElement('div');
  apps.classList.add('menu-section');

  const appsh3 = document.createElement('h3');
  appsh3.textContent = 'Appetizers';
  
  const appsList = document.createElement('ul');
  for (let i = 1; i <= 7; i++) {
    const app = document.createElement('li');
    app.textContent = `Appetizer Number ${i}... $8.99`
    app.classList.add('menu-item');
    appsList.appendChild(app);
  }

  apps.appendChild(appsh3);
  apps.appendChild(appsList);
  
  //salads
  const salads = document.createElement('div');
  salads.classList.add('menu-section');

  const saladsh3 = document.createElement('h3');
  saladsh3.textContent = 'Salads';
  
  const saladsList = document.createElement('ul');
  for (let i = 1; i <= 5; i++) {
    const salad = document.createElement('li');
    salad.textContent = `Salad Number ${i}... $7.99`
    salad.classList.add('menu-item');
    saladsList.appendChild(salad);
  }

  salads.appendChild(saladsh3);
  salads.appendChild(saladsList);

  //sandwiches
  const sandwiches = document.createElement('div');
  sandwiches.classList.add('menu-section');

  const sandwichesh3 = document.createElement('h3');
  sandwichesh3.textContent = 'Sandwiches';

  const sandwichPara = document.createElement('p');
  sandwichPara.textContent = "Served with a side of french fries.  Substitute a side of salad for $1.99."

  
  const sandwichesList = document.createElement('ul');
  for (let i = 1; i <= 6; i++) {
    const sandwich = document.createElement('li');
    sandwich.textContent = `Sandwich Number ${i}... $10.99`
    sandwich.classList.add('menu-item');
    sandwichesList.appendChild(sandwich);
  }

  sandwiches.appendChild(sandwichesh3);
  sandwiches.appendChild(sandwichPara);
  sandwiches.appendChild(sandwichesList);

  column1.appendChild(apps);
  column1.appendChild(salads);
  column1.appendChild(sandwiches);

  //column 2

  //lunches
  const lunch = document.createElement('div');
  lunch.classList.add('menu-section');

  const lunchh3 = document.createElement('h3');
  lunchh3.textContent = 'Lunches';

  const lunchPara = document.createElement('p');
  lunchPara.textContent = "Served with a ceasar salad and a side of french fries.  Substitute any side for $1.99."

  
  const lunchList = document.createElement('ul');
  for (let i = 1; i <= 8; i++) {
    const lunch = document.createElement('li');
    lunch.textContent = `Lunch Number ${i}... $11.99`
    lunch.classList.add('menu-item');
    lunchList.appendChild(lunch);
  }

  lunch.appendChild(lunchh3);
  lunch.appendChild(lunchPara);
  lunch.appendChild(lunchList);

  //dinners
  const dinner = document.createElement('div');
  dinner.classList.add('menu-section');

  const dinnerh3 = document.createElement('h3');
  dinnerh3.textContent = 'Dinners';

  const dinnerPara = document.createElement('p');
  dinnerPara.textContent = "Served with a ceasar salad and any side."

  
  const dinnerList = document.createElement('ul');
  for (let i = 1; i <= 10; i++) {
    const dinner = document.createElement('li');
    dinner.textContent = `Dinner Number ${i}... $7.99`
    dinner.classList.add('menu-item');
    dinnerList.appendChild(dinner);
  }

  dinner.appendChild(dinnerh3);
  dinner.appendChild(dinnerPara);
  dinner.appendChild(dinnerList);


  column2.appendChild(lunch);
  column2.appendChild(dinner);

  //column 3

  //desserts
  const dessert = document.createElement('div');
  dessert.classList.add('menu-section');

  const desserth3 = document.createElement('h3');
  desserth3.textContent = 'Desserts';

  const dessertList = document.createElement('ul');
  for (let i = 1; i <= 4; i++) {
    const dessert = document.createElement('li');
    dessert.textContent = `Dessert Number ${i}... $11.99`
    dessert.classList.add('menu-item');
    dessertList.appendChild(dessert);
  }

  dessert.appendChild(desserth3);
  dessert.appendChild(dessertList);

  //soft drinks

  const softDrinks = document.createElement('div');
  softDrinks.classList.add('menu-section');

  const softDrinksh3 = document.createElement('h3');
  softDrinksh3.textContent = 'Soft Drinks';

  const softDrinkspara = document.createElement('p');
  softDrinkspara.textContent = 'All Coca-Cola products available... $2.49 w/ free refills.'

  softDrinks.appendChild(softDrinksh3);
  softDrinks.appendChild(softDrinkspara);

  //adult beverages
  const adultBev = document.createElement('div');
  adultBev.classList.add('menu-section');

  const adultBevh3 = document.createElement('h3');
  adultBevh3.textContent = 'Adult Beverages';

  const adultBevPara = document.createElement('p');
  adultBevPara.textContent = "Must show ID and be over 21 to order."

  
  const adultBevList = document.createElement('ul');
  for (let i = 1; i <= 7; i++) {
    const adultBev = document.createElement('li');
    adultBev.textContent = `Adult Beverage Number ${i}... $4.99`
    adultBev.classList.add('menu-item');
    adultBevList.appendChild(adultBev);
  }

  adultBev.appendChild(adultBevh3);
  adultBev.appendChild(adultBevPara);
  adultBev.appendChild(adultBevList);

  //sides
  const sides = document.createElement('div');
  sides.classList.add('menu-section');

  const sidesh3 = document.createElement('h3');
  sidesh3.textContent = 'Sides';

  const sidesPara = document.createElement('p');
  sidesPara.textContent = "Available to order for $4.99.";

  
  const sidesList = document.createElement('ul');
  for (let i = 1; i <= 5; i++) {
    const sides = document.createElement('li');
    sides.textContent = `Side dish number ${i}`
    sides.classList.add('menu-item');
    sidesList.appendChild(sides);
  }

  sides.appendChild(sidesh3);
  sides.appendChild(sidesPara);
  sides.appendChild(sidesList);


  
  column3.appendChild(dessert);
  column3.appendChild(softDrinks);
  column3.appendChild(adultBev);
  column3.appendChild(sides);


  menu.appendChild(column1);
  menu.appendChild(column2);
  menu.appendChild(column3);

  middle.appendChild(h2);
  middle.appendChild(menu);
}