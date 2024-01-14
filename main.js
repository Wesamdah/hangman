let letters = "abcdefghijklmnopqrstuvwxyz";
let contanierLetter = document.querySelector(".letters");
let pop = document.querySelector(".pop");
let hint = document.querySelector(".btn");
let help = document.querySelector(".help");

let arrayPos = [];
let arrayDone = [];

let lettersArray = Array.from(letters);

lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  span.appendChild(document.createTextNode(letter));
  span.className = "letter-box";
  contanierLetter.appendChild(span);
});

let words = {
  movies: [
    "The Godfather",
    "The Dark Knight",
    "Inception",
    "elemental",
    "Interstellar",
  ],
  cities: ["Baghdad", "Alexandria", "Dubai", "Beirut", "Damascus"],
  songs: [
    "Mockingbird",
    "Unholy",
    "Perfect",
    "fukumean",
    "Until I Found You",
    "Another Love",
  ],
  celebrites: [
    "Barack Obama",
    "Bill Gates",
    "Jim Carrey",
    "Kim Kardashian",
    "Taylor Swift",
    "Beyonce",
  ],
};

let allkeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allkeys.length);
let randoPropNmae = allkeys[randomPropNumber];
let randomPropValue = words[randoPropNmae];

let randoValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueName = randomPropValue[randoValueNumber];

document.querySelector(".game-info .game-gategory span").innerHTML =
  randoPropNmae;

let letterGuess = document.querySelector(".letters-guess");
let ArrayGuess = Array.from(randomValueName.toLowerCase());
ArrayGuess.forEach((letter) => {
  let span = document.createElement("span");
  span.className = "pos";
  if (letter === " ") {
    span.className = "has-space";
  }
  letterGuess.appendChild(span);
});

let spanGuess = document.querySelectorAll(".letters-guess span");
let wrongTry = 0;
let theDraw = document.querySelector(".hangman-draw");

let newarr = new Map();

let nonSpaceGuess = [...newarr].filter((e) => (e != " " ? e : ""));

let radmomPos1 = Math.floor(Math.random() * ArrayGuess.length);
let radmomPos2 = Math.floor(Math.random() * ArrayGuess.length);

document.addEventListener("click", (e) => {
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let clicked = e.target.innerHTML.toLowerCase();
    ArrayGuess.forEach((wordletter, wordindex) => {
      if (clicked == wordletter) {
        theStatus = true;
        arrayPos.push(clicked);
        spanGuess.forEach((span, spanindex) => {
          if (wordindex == spanindex) {
            span.innerHTML = wordletter;
          }
        });
      }
    });
    if (theStatus !== true) {
      wrongTry++;
      theDraw.classList.add(`wrong-${wrongTry}`);
      document.getElementById("fail").play();
      if (wrongTry === 5) {
        contanierLetter.classList.add("done");
        document.getElementById("finall").play();
        endgame();
      }
    } else {
      document.getElementById("success").play();
      let row = document.querySelector(".Row");
      let nonSpaceGuess1 = ArrayGuess.filter((e) => (e != " " ? e : ""));
      if (arrayPos.length == nonSpaceGuess1.length) {
        row.classList.add("done");
        doneGame();
        console.log("done");
      }
    }
  }
});

function endgame() {
  pop.classList.add("up-fall");
  pop.innerHTML = `Game over , the word is ${randomValueName}`;
  pop.onclick = () => {
    pop.style.opacity = 0;
  };
}

function doneGame() {
  pop.classList.add("up-done");
  pop.innerHTML = "CONGRATULATIONS , YOU DID IT";
  pop.onclick = () => {
    pop.style.opacity = 0;
  };
}

// console.log(randomValueName);
