"use strict"

let theActors;

document.addEventListener("DOMContentLoaded", start);

async function start() {
    console.log("start");

    let url = "actors.json";
    let jsonData = await fetch(url);
    theActors = await jsonData.json();
    console.log(theActors);
}