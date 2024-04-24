let myLibrary = [];
let globalIndex = 0;
const library = document.getElementById("library-grid");

function Book(title, author, pagesNumber, read, index) {
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.read = read;
    this.index = index;
};

function addBookToLibrary() {
    var title = document.getElementById("book-name").value;
    var author = document.getElementById("book-author").value;
    var number = document.getElementById("book-pages-number").value;
    var read = document.getElementById("book-read").checked;
    var index = globalIndex;

    if (!title || !author || !number) {
        alert('Please fill out all fields!');
        return;
    };

    var book = new Book(title, author, number, read, index);
    myLibrary.push(book);
    globalIndex++;
    updateLibraryDisplay(book);
};

function updateLibraryDisplay(book) {
    const node = document.createElement("div");
    node.classList.add("node");
    node.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.pagesNumber}</p>
    `;

    let text;
    book.read ? text = document.createTextNode("V") : text = document.createTextNode("X");
    const isReadText = document.createElement("p")
    const isReadButton = document.createElement("button");

    book.read ? isReadText.textContent = "Read" : isReadText.textContent = "Not Read Yet";
    book.read ? isReadButton.style.backgroundColor = "green" : isReadButton.style.backgroundColor = "red";

    isReadButton.onclick = function changeReadStatus() {
        if (book.read) {
            isReadText.textContent = "Not Read Yet"
            isReadButton.style.backgroundColor = "red";
            isReadButton.textContent = "X";
            book.read = false;
        } else {
            isReadText.textContent = "Read"
            isReadButton.style.backgroundColor = "green";
            isReadButton.textContent = "V";
            book.read = true;
        }
    };

    isReadButton.appendChild(text);
    node.appendChild(isReadText);
    node.appendChild(isReadButton);

    text = document.createTextNode("Remove");
    const removeButton = document.createElement("button");
    removeButton.style.backgroundColor = "red";
    removeButton.onclick = function removeBook() {
        myLibrary.splice(myLibrary[book.index],1);
        console.log(myLibrary);
    };

    removeButton.appendChild(text);
    node.appendChild(removeButton);

    //console.log(myLibrary.globalIndexOf(node));
    console.log(myLibrary);
    library.appendChild(node);
};