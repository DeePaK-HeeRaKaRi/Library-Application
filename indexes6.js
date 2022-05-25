console.log("This is ES6 version of Library Project");
class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}
class Display {
    add(book) {
        console.log("Adding to UI", book);
        let tableBody = document.getElementById("tableBody");
        let uiString = `
                <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>
            `;
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length > 2 && book.author.length > 2) {
        return true;
        } else {
        return false;
        }
    }
    show(type, displayMessage) {
        let message = document.getElementById("message");
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong>Message :${displayMessage}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;

        setTimeout(function () {
        message.innerHTML = "";
        }, 2000);
    }
}


// Add submit event listener to libraryform
let libraryForm=document.getElementById('libraryForm')
libraryForm.addEventListener('submit',libraryFormSubmit)

function libraryFormSubmit(e){
    console.log('You have submitted a library form')
    let name=document.getElementById('bookName').value
    let author=document.getElementById('author').value
    let fiction=document.getElementById('fiction')
    let programming=document.getElementById('programming')
    let cooking=document.getElementById('cooking')
    let type
    if(fiction.checked){
        type=fiction.value
    }
    else if(programming.checked){
        type=programming.value
    }
    else if(cooking.checked){
        type=cooking.value
    }
    let book=new Book(name,author,type)
    // console.log(book)
   
    let display=new Display()
    if(display.validate(book)){
        display.add(book)
        display.clear()
        display.show('success','Your book was successfully added to list')
    }
    else{
        // Show Errro to user
        display.show('warning','Sorry you cannot add this book')
    }
    
    // the page will not reload
    e.preventDefault()
}
