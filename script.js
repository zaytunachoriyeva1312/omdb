let Key = "58ed228a";
let elForm = document.querySelector("#form");
let elList = document.querySelector("#item");
let cardTepm = document.querySelector("#card").content;


elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let { search } = evt.target.elements;

    getApi(search.value.trim(), Key);
});
async function getApi(search, key) {
    let data = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${search}`)
        .then((res) => res.json())
        .then((data) => data.Search)
        .catch((error) => console.log(error));
    console.log(data);

    if (data) {
        renderFunc(data, elList);
    }
};


function renderFunc(array, element) {
    element.innerHTML = null;


    array.forEach(film => {
        let cloneTemplate = cardTepm.cloneNode(true);

        let li = cloneTemplate.querySelector("li");
        let img = cloneTemplate.querySelector("img");
        let h2 = cloneTemplate.querySelector("h2");


        console.log(cloneTemplate);
        console.log(li, img, h2);
        
        img.src = film.Poster;
        h2.textContent = film.Title;

        element.append(li)
    });

};

