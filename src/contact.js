export default function loadContact() {
  const middle = document.getElementById('middle');

  while (middle.firstChild) {
    middle.removeChild(middle.firstChild);
  }

  const h2 = document.createElement('h2');
  h2.classList.add('page-header');
  h2.textContent = 'Contact';

  const contact = document.createElement('div');
  contact.id = 'contact';

  

  const restaurantList = document.createElement('ul');
  restaurantList.classList.add('contact-box');

  const location = document.createElement('li');
  location.textContent = 'We have no location because this restaurant is not real.'
  location.id = 'contact-location';

  const order = document.createElement('li');
  order.textContent = 'Call 555-555-FAKE to order, now with curbside pickup!'
  order.id = 'contact-order';

  const nowHiring = document.createElement('li');
  nowHiring.textContent = 'Send your application to hiring@fakechainrestaurant.com.'
  nowHiring.id = 'contact-nowHiring';

  restaurantList.appendChild(location);
  restaurantList.appendChild(order);
  restaurantList.appendChild(nowHiring);
  

  const devContact = document.createElement('ul');
  devContact.classList.add('contact-box');

  const about = document.createElement('li');
  about.textContent = 'This webpage was created to practice DOM manipulation for The Odin Project.'

  const github = document.createElement('li');
  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/travis1010/restaurant-page';
  githubLink.target = '_blank'
  githubLink.textContent = 'GitHub';
  github.appendChild(githubLink);

  const top = document.createElement('li');
  const topLink = document.createElement('a');
  topLink.href = 'https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page';
  topLink.target = '_blank'
  topLink.textContent = 'The Odin Project';
  top.appendChild(topLink);
  
  devContact.appendChild(about);
  devContact.appendChild(github);
  devContact.appendChild(top);
  
  contact.appendChild(restaurantList);
  contact.appendChild(devContact);

  middle.appendChild(h2);
  middle.appendChild(contact);
}