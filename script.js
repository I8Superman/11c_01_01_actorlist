"use strict"

let theActors;

document.addEventListener("DOMContentLoaded", start);

async function start() {
    console.log("start");

    let url = "actors.json";
    let jsonData = await fetch(url);
    theActors = await jsonData.json();
    console.log(theActors);

    let filter = theActors.filter(movie => movie.movie[0]);
    console.log("Filter", filter)

    showActors();

    // generateFilterButtons();
}

function showActors() {
    console.log("showActors");

    let dest = document.querySelector("#actors");
    let temp = document.querySelector("#actor_template");
    dest.innerHTML = "";

    theActors.forEach(actor => {
        console.log(actor);
        let clone = temp.cloneNode(true).content;
        clone.querySelector("h2").textContent = actor.fullname;
        clone.querySelector("p").textContent = actor.movie;
        dest.appendChild(clone);
    })
}

// function generateFilterButtons() {
//     console.log("generateFilterButtons");

//     let dest = document.querySelector(".filter_buttons");
//     let temp = document.querySelector("#filter_button_template");

//     theActors.forEach(movie => {
//         let clone = temp.cloneNode(true).content;

//         clone.querySelector("h3").textContent = movie.movie;

//         dest.appendChild(clone);
//     })
// }