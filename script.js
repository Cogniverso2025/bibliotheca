// Cargar datos desde JSON
let books = [];

fetch('books.json')
    .then(response => response.json())
    .then(data => {
        books = data;
        displayBooks(books);
    });

// Mostrar libros en la página
function displayBooks(bookList) {
    const booksContainer = document.getElementById('booksContainer');
    booksContainer.innerHTML = '';

    bookList.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Autor:</strong> ${book.author}</p>
            <p><strong>Clasificación:</strong> ${book.classification}</p>
            <p><strong>Categoría:</strong> ${book.category}</p>
            <p><strong>Descripción:</strong> ${book.description}</p>
            <p><a href="${book.location}" target="_blank">Abrir libro</a></p>
        `;
        booksContainer.appendChild(bookDiv);
    });
}

// Función de búsqueda
function searchBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchInput) ||
        book.classification.includes(searchInput) ||
        book.author.toLowerCase().includes(searchInput)
    );
    displayBooks(filteredBooks);
}
