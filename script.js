let len = 0;
let specialNum = 0;
let alphaNum = 0;
let calphaNum = 0;
let num = 0;
let total = 0;
let i = 0;
let j = 0;
let k = 0;
let p = 0;
let q = 0;
let s = 0;
let genarray = [];

function generate() {
  genarray = [];
  document.getElementById("password").textContent = "";

  len = document.getElementById("length").value;
  specialNum = document.getElementById("special").value;
  alphaNum = document.getElementById("alpha").value;
  calphaNum = document.getElementById("calpha").value;
  num = document.getElementById("num").value;
  total =
    parseInt(specialNum) +
    parseInt(alphaNum) +
    parseInt(num) +
    parseInt(calphaNum);

  if (len != total) {
    document.querySelector(".message").textContent = "Length Does not match";
  } else {
    document.querySelector(".message").textContent = "OK!";
    const numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const specialArray = ["@", "*", "/", "!", "&", "$", "#", "^", "?"];
    const alphaArray = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const capitalAlpha = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    for (i = 0; i < parseInt(specialNum); i++) {
      var index = Math.floor(Math.random() * specialArray.length);
      genarray.push(specialArray[index]);
    }
    for (j = 0; j < parseInt(alphaNum); j++) {
      var index = Math.floor(Math.random() * alphaArray.length);
      genarray.push(alphaArray[index]);
    }
    for (k = 0; k < parseInt(num); k++) {
      var index = Math.floor(Math.random() * numArray.length);
      genarray.push(numArray[index]);
    }
    for (s = 0; s < parseInt(calphaNum); s++) {
      var index = Math.floor(Math.random() * capitalAlpha.length);
      genarray.push(capitalAlpha[index]);
    }
    for (p = genarray.length - 1; p > 0; p--) {
      q = Math.floor(Math.random() * (p + 1));
      let temp = genarray[p];
      genarray[p] = genarray[q];
      genarray[q] = temp;
    }
    document.getElementById("password").textContent = genarray
      .toString()
      .replaceAll(",", "");
  }
}
