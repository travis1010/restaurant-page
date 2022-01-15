export default function loadMenu() {
  const middle = document.getElementById('middle');

  while (middle.firstChild) {
    middle.removeChild(middle.firstChild);
  }

  const menu = document.createElement('div');
  menu.id = 'menu';

  const h2 = document.createElement('h2');
  h2.textContent = 'Menu';

  const column1 = document.createElement('div');
  column1.classList.add('menu-column');
  const column2 = document.createElement('div');
  column2.classList.add('menu-column');
  const column3 = document.createElement('div');
  column3.classList.add('menu-column');

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
  

  menu.appendChild(column1);
  menu.appendChild(column2);
  menu.appendChild(column3);
  middle.appendChild(h2);
  middle.appendChild(menu);
}