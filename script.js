const form = document.getElementById('add-book');
const title = document.getElementById('title');
const author = document.getElementById('author');
const priority = document.getElementById('priority');
const category = document.getElementById('category');
const table = document.getElementById('table');
const booksArray = JSON.parse(localStorage.getItem('booksArray'));

const renderBooks = (arr) => {
	if (arr) {
		arr.forEach((element) => {
			table.innerHTML += `
      <ul class="table__row">
        <li class="table__row--cell">${element.title}</li>
        <li class="table__row--cell">${element.author}</li>
        <li class="table__row--cell">${element.priority}</li>
        <li class="table__row--cell">${element.category}</li>
      </ul>`;
		});
	}
};

const handleFormSubmit = (e) => {
	e.preventDefault();
	const formTitle = title.value.trim();
	const formAuthor = author.value.trim();
	const formPriority = priority.value.trim();
	const formCategory = category.value.trim();
	const newBooksArray = booksArray ? booksArray : [];
	const id = Math.floor(Math.random() * 100000);
	newBooksArray.push({
		id: id,
		title: formTitle,
		author: formAuthor,
		priority: formPriority,
		category: formCategory,
	});

	table.innerHTML += `
  <div class="table__row" id=${id}>
    <p class="table__row--cell">${formTitle}</p>
    <p class="table__row--cell">${formAuthor}</p>
    <p class="table__row--cell">${formPriority}</p>
    <p class="table__row--cell">${formCategory}</p>
  </div>`;
	localStorage.setItem('booksArray', JSON.stringify(newBooksArray));
	form.reset();
};

renderBooks(booksArray);

form.addEventListener('submit', handleFormSubmit);
