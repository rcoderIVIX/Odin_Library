const myLibrary = [];

function Book(title, read, theme) {

this.title = title;

this.read = read;

this.theme = theme; 

}

let bookCardContainer = document.createElement("div")
bookCardContainer.classList.add("cardClass")
document.body.appendChild(bookCardContainer)


function addBookToLibrary() {
  
    for (const element of myLibrary){
    let bookName = document.createElement("div")
    bookName.textContent = `Title: ${element.title}, Read: ${element.read}, Theme: ${element.theme}`;
    bookCardContainer.appendChild(bookName)
    bookName.classList.add("boxes")

    
}
    
}



let newBook = document.createElement("button")

newBook.textContent = "New Entry"

document.body.appendChild(newBook)

newBook.addEventListener("click", ()=>{
let form = document.createElement("form");
form.action = "/submit";
form.method = "POST";
form.classList.add("formClass")

let inputTitle = document.createElement("input");
inputTitle.type = "text";
inputTitle.name = "book title"
inputTitle.placeholder = "Enter book name"

let inputRead = document.createElement("input");
inputRead.type = "text";
inputRead.name = "book read true?";
inputRead.placeholder = "Have you read it?"

let inputTheme = document.createElement("input");
inputTheme.type = "text"
inputTheme.name = "book theme"
inputTheme.placeholder = "Book's theme"

let submitButton = document.createElement("input");
submitButton.type = "button";
submitButton.name = "submit button";
submitButton.value = "Submit";

form.appendChild(inputTitle)
form.appendChild(inputRead)
form.appendChild(inputTheme)
form.appendChild(submitButton)

document.body.appendChild(form);

submitButton.addEventListener("click", ()=>{
    
    let iRValue = inputRead.value;
    let iThValue = inputTheme.value;
    let iTValue = inputTitle.value;



  let myNewBook =  new Book(iTValue, iRValue, iThValue);

  myLibrary.push(myNewBook);

  addBookToLibrary();

   form.reset();


})
})

let deleteAll = document.createElement("button")
deleteAll.textContent = "Delete me"
bookCardContainer.appendChild(deleteAll)

deleteAll.addEventListener("click", ()=>{

    myLibrary.forEach(element=>{
        element.remove();
    })
})






