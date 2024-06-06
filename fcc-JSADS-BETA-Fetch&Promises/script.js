const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
.then((res)=>res.json())
.then((data)=>{console.log(data);})
.catch((err)=>{console.error(`There was an error: ${err}`);});

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

const displayAuthors = (authors) => {
    authors.forEach(({author, image, url, bio}, index)=>{
        authorContainer.innerHTML += `
        <div id="${index}" class="user-card">
            <h2 class="author-name">${author}</h2>
        </div>
        `;
    });
};
