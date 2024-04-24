let myLibrary = [];
const library = document.getElementById("library-grid");

function Book(title, author, pagesNumber, read) {
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.read = read;
};

function addBookToLibrary() {
    var title = document.getElementById("book-name").value;
    var author = document.getElementById("book-author").value;
    var number = document.getElementById("book-pages-number").value;
    var read = document.getElementById("book-read").checked;

    if (!title || !author || !number) {
        alert('Please fill out all fields!');
        return;
    };

    var book = new Book(title, author, number, read);
    myLibrary.push(book);
    updateLibraryDisplay(book);
};

function updateLibraryDisplay(book) {
    const node = document.createElement("div");
    node.classList.add("node");
    node.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.pagesNumber}</p>
        <p>${book.read ? "Read" : "Not Read Yet"} </p>
    `;

    library.appendChild(node);


    const isReadButton = document.createElement("button");
    const removeButton = document.createElement("button");
    node.appendChild(isReadButton);
    node.appendChild(removeButton);

};