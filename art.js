"use strict";

// SETUP
document.addEventListener("DOMContentLoaded", init);

let artwork1, artwork2, artwork3, artwork4, artwork5, artwork6, artwork7, artwork8, artwork9;


// FUNCTIONS
function init() {
    console.log("init");
    growingSquares();
    spikySquares();
    growingCircles();
    diagonalSquares();
    looseCircles();
    slinkieCircles();
    coneCircles();
    spiralSquares();
    squaresCircles();
}

// ARTWORK 1
function growingSquares() {
    console.log("growing squares");
    artwork1 = document.getElementById("artwork1");
    // add 10 boxes

    //forloops
    for (let i=100; i <=300; i+=20) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${i}px`;
        box.style.height = `${i}px`;
        artwork1.appendChild(box);
    }
}

// ARTWORK 2
function spikySquares() {
    console.log("spiky squares");
    artwork2 = document.getElementById("artwork2");
    // add 9 boxes

    //forloops
    for (let i=0; i <90; i+=10) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.rotate = `${i}deg`;
        artwork2.appendChild(box);
    }

}

// ARTWORK 3
function growingCircles() {
    console.log("growing circles");

    artwork3 = document.getElementById("artwork3");
    // add 20 circles

    //forloops
    for (let i=0; i <200; i+=10) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.width = `${i}px`;
        circle.style.height = `${i}px`;
        artwork3.appendChild(circle);
    }

}

// ARTWORK 4
function diagonalSquares() {
    console.log("diagonal squares");

    artwork4 = document.getElementById("artwork4");
    // add 9 boxes

    //forloops
    for (let i=-90; i <90; i+=20) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.transform = `translate(${i}px, ${i}px)`;
        artwork4.appendChild(box);
    }

}

// ARTWORK 5
function looseCircles() {
    console.log("loose circles");

    artwork5 = document.getElementById("artwork5");
    // add 10 circles

    //forloops
    for (let i=1; i <512; i*=2) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.width = `${i}px`;
        circle.style.height = `${i}px`;
        artwork5.appendChild(circle);
    }

}

// ARTWORK 6
function slinkieCircles() {
    console.log("slinkie circles");

    artwork6 = document.getElementById("artwork6");
    // add 13 circles

    //forloops
    for (let i=-20; i <45; i+=5) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.transform = `translate(${i}-50px)`;
        circle.style.rotate = `${i*4}deg`;
        artwork6.appendChild(circle);
    }
}

// ARTWORK 7
function coneCircles() {
    console.log("cone circles");

    artwork7 = document.getElementById("artwork7");
    // add 20 circles

    //forloops
    for (let i=0; i <200; i+=10) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.width = `${i}px`;
        circle.style.height = `${i}px`;
        circle.style.transform = `translate(${i}px, ${-i/2}px)`;
        artwork7.appendChild(circle);
    }
}

// ARTWORK 8
function spiralSquares() {
    console.log("spiral squares");

    artwork8 = document.getElementById("artwork8");
    // add 12 squares

    //forloops
    for (let i=50; i <200; i+=10) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${i}px`;
        box.style.height =`${i}px`;
        box.style.transform = `translateX(${i/2}px)`;
        box.style.rotate = `${i}deg`;
        artwork8.appendChild(box);
    }

}

// ARTWORK 9
function squaresCircles() {
    console.log("squares circles");

    artwork9 = document.getElementById("artwork9");
    // add 5 squares and 5 circles

    //forloops
    for (let i=50; i <200; i+=30) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${i}px`;
        box.style.height = `${i}px`;
        artwork9.appendChild(box);
    }

    for (let i=50; i <200; i+=30) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.width = `${i}px`;
        circle.style.height = `${i}px`;
        artwork9.appendChild(circle);
    }
}