class Book {
    constructor(title, author, pages, isRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    createBookElement() {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
        <div class="title">${this.title}</div>
            <div class="author">${this.author}</div>
            <div class="pages">${this.pages}</div>
            <form class='read'>
                <label for="">Read</label>
                <input type="checkbox" ${this.isRead ? 'checked' : ''}>
            </form>
            <button class="remove">Remove</button>
        `;
        return bookDiv;
    }
}

class library {
    constructor() {
        this.library = document.querySelector('.library');
    }

    addBook(book) {
        const bookElement = book.createBookElement();
        this.library.appendChild(bookElement);

        bookElement.querySelector('.remove').addEventListener('click', () => {
            this.removeBook(bookElement);
        });
    }

    removeBook(bookElement){
        this.library.removeChild(bookElement)
    }
}

const myLibrary = new library();

const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button')
const closeButton = document.querySelector('button[type="submit"]');
const bookForm = document.querySelector('form');


bookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#isRead').checked

    const newBook = new Book(title, author, pages, isRead)
    myLibrary.addBook(newBook)
    
    dialog.close();
});


showButton.addEventListener('click', () => {
    dialog.showModal();
})


const initialBook = new Book('name', 'title', 'pages', true)

myLibrary.addBook(initialBook);