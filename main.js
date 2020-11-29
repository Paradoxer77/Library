let library = []

function Book(name, author, pages, isRead) {
  this.name = name
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

function addToLibrary(bTitle, bAuthor, bPages, bIsRead) {
  library.push(new Book(bTitle, bAuthor, bPages, bIsRead))
}

function addToDom(bookTitle, bookAuthor, bookPages, bookIsRead) {
  const main = document.querySelector("main")

  const card = document.createElement("div")
  card.classList.add("card")


  const text = document.createElement("div")
  const h2 = document.createElement("h2")

  h2.classList.add('info-text')
  h2.textContent = bookTitle
  text.appendChild(h2)

  const h3 = document.createElement("h3")
  h3.classList.add('info-text')
  h3.textContent = bookAuthor
  text.appendChild(h3)

  const pages = document.createElement("span")
  pages.classList.add('info-text')
  pages.textContent = bookPages
  text.appendChild(pages)

  card.appendChild(text)


  const read = document.createElement("div")
  const buttonRead = document.createElement("button")
  buttonRead.classList.add("read")
  if (bookIsRead) {
    buttonRead.textContent = "Read"
  } else {
    buttonRead.textContent = "Not Read"
  }

  buttonRead.addEventListener("click", () => {
    if (buttonRead.textContent === "Read") {
      buttonRead.textContent = "Not Read"
    } else if (buttonRead.textContent === "Not Read") {
      buttonRead.textContent = "Read"
    }
  })

  read.appendChild(buttonRead)
  card.appendChild(read)


  const selectContainer = document.createElement("div")
  const rating = document.createElement('div')
  rating.textContent = "Rating"
  const select = document.createElement("select")

  select.classList.add("rating")
  for (i = 1; i <= 10; i++) {
    const option = document.createElement("option")

    option.text = i
    select.add(option)
  }

  selectContainer.appendChild(rating)
  selectContainer.appendChild(select)
  card.appendChild(selectContainer)


  const deleteContainer = document.createElement("div")
  const deleteItem = document.createElement("button")

  const image = document.createElement("img")
  image.src = "https://image.flaticon.com/icons/png/512/61/61848.png"
  image.style.width = "24px"
  deleteItem.appendChild(image)
  deleteItem.classList.add("delete")

  deleteItem.addEventListener("click", () => {
    deleteBook(card)
  })

  deleteContainer.appendChild(deleteItem)
  card.appendChild(deleteContainer)


  main.appendChild(card)
}

function parseValues() {
  const title = document.getElementById("title").value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const isRead = document.getElementById("read-or-not").checked
  addToDom(title, author, pages, isRead)
  addToLibrary(title, author, pages, isRead)
  form.classList.remove("form-display")
  form.reset()
}

function deleteBook(card) {
  card.remove(card)
}

const form = document.getElementById("form")
const addBook = document.getElementById("add-book-plus")
addBook.addEventListener('click', () => {
  form.classList.add("form-display")
})

const cross = document.getElementById("cross")
cross.addEventListener("click", () => {
  form.classList.remove("form-display")
})

