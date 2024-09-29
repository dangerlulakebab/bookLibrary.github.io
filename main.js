const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button')
const closeButton = document.querySelector('button[type="submit"]');
const bookForm = document.querySelector('form');
const library = document.querySelector('.library');

showButton.addEventListener('click', () => {
    dialog.showModal();
})

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#isRead').checked

    addBookToLibrary(title, author, pages, isRead)
    
    dialog.close();
});


function addBookToLibrary(title, author, pages, isRead) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
    <div class="title">${title}</div>
        <div class="author">${author}</div>
        <div class="pages">${pages}</div>
        <form class='read'>
            <label for="">Read</label>
            <input type="checkbox" ${isRead ? 'checked' : ''}>
        </form>
        <button class="remove">Remove</button>
    `;

    library.appendChild(bookDiv)

    bookDiv.querySelector('.remove').addEventListener('click', () => {
        library.removeChild(bookDiv)
    })
}

addBookToLibrary('name', 'author', 'pages', true);