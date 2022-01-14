export default function loadContact() {
  const middle = document.getElementById('middle');

  while (middle.firstChild) {
    middle.removeChild(middle.firstChild);
  }

  const contact = document.createElement('div');
  contact.textContent = 'this will be the contact page!!!';

  middle.appendChild(contact);
}