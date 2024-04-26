const addBook = document.querySelector('.add-book');
const popupForm = document.querySelector('.popup-form');
const form = document.querySelector('.form');
const cancel = document.querySelector('.cancel');
const submit = document.querySelector('.submit');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
const author = document.querySelector('#author');
const bookgrid = document.querySelector('.book-grid');

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.addCard = function(){
  let card = document.createElement('div');
  let cardDesc = document.createElement('div');
  let cardButtons = document.createElement('div');
  let cardTitle = document.createElement('div');
  let cardAuthor = document.createElement('div');
  let cardPages = document.createElement('div');
  let cardRead = document.createElement('div');
  let read = document.createElement('button');
  let del = document.createElement('button');
  let edit = document.createElement('button');
  card.classList.add('card');
  cardDesc.classList.add('card-desc');
  cardButtons.classList.add('card-buttons');
  cardTitle.classList.add('card-title');
  cardAuthor.classList.add('card-author');
  cardPages.classList.add('card-pages');
  cardRead.classList.add('card-read');
  read.classList.add('read');
  del.classList.add('delete');
  edit.classList.add('edit');

  cardTitle.textContent = this.title;
  cardAuthor.textContent = this.author;
  cardPages.textContent = this.pages;
  cardRead.textContent = this.read ? 'read': 'Not Read'

  read.textContent = 'Read';
  del.textContent = 'Delete';
  edit.textContent = 'Edit';

  cardDesc.appendChild(cardTitle);
  cardDesc.appendChild(cardAuthor);
  cardDesc.appendChild(cardPages);
  cardDesc.appendChild(cardRead);

  cardButtons.appendChild(read);
  cardButtons.appendChild(del);
  cardButtons.appendChild(edit);

  card.appendChild(cardDesc);
  card.appendChild(cardButtons);

  bookgrid.appendChild(card);
}

const theHobbit = new Book('The Hobbit', 'George R.R Martin', 576, true);

theHobbit.addCard()










// addBook.addEventListener('click', () => {
//   popupForm.style.display = 'flex';
// })

// cancel.addEventListener('click', () => {
//   popupForm.style.display = 'none';
// }) 

// submit.addEventListener('click', () => {
//   if(form.checkValidity()){
//     popupForm.style.display = 'none';
//     title.value = '';
//     pages.value = '';
//     author.value = '';

//   }
// })