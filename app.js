class Book{
    constructor(authorName, bookName, releaseYear, pagesQnty, element){
        this.authorName = authorName
        this.bookName = bookName
        this.releaseYear = releaseYear
        this.pagesQnty = pagesQnty
        let book = document.getElementsByClassName("box is")[0].cloneNode(true)
        book.getElementsByClassName("author")[0].textContent = authorName
        book.getElementsByClassName("name")[0].textContent = bookName
        element.parentNode.insertBefore(book, element)
    }
}

function addBook(element){
        let author = window.prompt("Enter book's author")
        let name = window.prompt("Enter book's name")
        let year = window.prompt("Enter book's release year")
        let pages = window.prompt("Enter book's pages number")
        let book = new Book(author, name, year, pages, element)
        books.push(book)
}

function addShelf(){
    let shelf = document.getElementsByClassName("shelf")[0].cloneNode(false)
    let addBookTemplate = document.getElementsByClassName("box add")[0].cloneNode(true)
    shelf.appendChild(addBookTemplate)
    addShelfElement.parentNode.insertBefore(shelf, addShelfElement)
    let addBookElements = document.getElementsByClassName("box add")
    let addBookLast = addBookElements[addBookElements.length - 1]
    console.log(addBookLast)
    addBookLast.addEventListener("click", function(e){
        addBook(addBookLast)
        
    })

}
let addBookElements = document.getElementsByClassName("box add")
const addShelfElement = document.getElementsByClassName("shelf add")[0]

let books = []

for (let element of addBookElements){
    element.addEventListener("click", function(e){
        addBook(element)
    })
}

addShelfElement.addEventListener("click", addShelf)


