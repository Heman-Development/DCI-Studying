const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

//surname should appear first
function reverseName(name) {
  let authorName = name.split(" ");
  authorName.reverse();
  let reverseName = authorName.join(", ");
  return reverseName;
}

/* books.forEach((book) => {
  console.log(reverseName(book.author));
}); */

// for sorting the objects based on author's last name
books.sort((a, b) => {
  const surnameA = reverseName(a.author);
  const surnameB = reverseName(b.author);
  return surnameA.localeCompare(surnameB);
});

// select the ul with class name book-list
const bookList = document.querySelector(".book-list");

books.forEach((book) => {
  //create li and add them to ul
  const bookListItem = document.createElement("li");
  bookListItem.classList.add("book", "card", "mb-3");
  bookList.appendChild(bookListItem);

  //create a link
  const BookCoverAnchor = document.createElement("a");
  BookCoverAnchor.href = book.img;
  bookListItem.appendChild(BookCoverAnchor);

  //create images and add to li
  const bookCoverImg = document.createElement("img");
  bookCoverImg.src = book.img;
  bookCoverImg.classList.add("book-cover", "card-img-top", "img-fluid");
  BookCoverAnchor.appendChild(bookCoverImg);

  // create the card body and add it to li
  const bookCardSection = document.createElement("section");
  bookCardSection.classList.add("card-body");
  bookListItem.appendChild(bookCardSection);

  // create card footer and add it to li
  const bookCardFooter = document.createElement("footer");
  bookCardFooter.classList.add("card-footer", "text-light");
  bookListItem.appendChild(bookCardFooter);

  const bookTitleHeading = document.createElement("h2");
  bookTitleHeading.classList.add("card-title", "h5");
  bookTitleHeading.innerText = book.title;
  bookCardSection.appendChild(bookTitleHeading);

  const bookAuthorPar = document.createElement("p");
  bookAuthorPar.classList.add("text-muted", "small");
  bookAuthorPar.innerText = reverseName(book.author);
  bookCardSection.appendChild(bookAuthorPar);

  const readStatusSpan = document.createElement("span");

/*   readStatusSpan.addEventListener("dblclick", () => {
    if (readStatusSpan.innerText == "To read") {
      readStatusSpan.innerText = "Read";
    } else {
      readStatusSpan.innerText = "To read";
    }
  }); */

  readStatusSpan.classList.add(
    "badge-pill",
    "status",
    "badge-secondary",
    "small"
  );
  bookCardFooter.appendChild(readStatusSpan);

  if (book.alreadyRead) {
    readStatusSpan.innerText = "Read";
    readStatusSpan.classList.replace("badge-secondary", "badge-success");
    /* 
    alternative 
    readStatusSpan.classList.remove('badge-secondary');
    readStatusSpan.classList.add('badge-success');
    */
  } else {
    readStatusSpan.innerText = "To read";
  }
});
