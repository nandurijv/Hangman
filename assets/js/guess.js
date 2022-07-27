// getting the input box
let inputBox = document.getElementsByClassName("check-letter")[0];
let inputLetter = document.getElementsByClassName("input__letter")[0];
localStorage.setItem("count", 0);
let temp = localStorage.getItem("word");
let word = temp;
inputBox.addEventListener("click", () => {
  let lives = localStorage.getItem("lives");
  if (parseInt(localStorage.getItem("count")) === word.length - 1) {
    alert("Correct Guess!");
    location.reload();
  } else if (
    word.includes(inputLetter.value.toLowerCase()) &&
    inputLetter.value.toLowerCase().length == 1
  ) {
    let charPos = word.indexOf(inputLetter.value.toLowerCase());
    word = word.replace(inputLetter.value.toLowerCase(), "*");
    localStorage.setItem("word", word);

    document.getElementsByClassName("letter")[
      charPos
    ].innerHTML = `${inputLetter.value.toLowerCase()}`;
    localStorage.setItem("count", parseInt(localStorage.getItem("count")) + 1);
  } else if (inputLetter.value.toLowerCase().length != 1) {
    alert("please enter a single letter!");
  } else {
    localStorage.setItem("lives", lives - 1);
    if (lives > 0) {
      document.getElementById("life-count").innerHTML =
        localStorage.getItem("lives");
      alert("Incorrect Letter");
      inputLetter.value = "";
    } else {
      alert("Game Over! No Lives Left. Word was " + temp);
      location.reload();
    }
  }
});

// using hints

// getting the hints button
let hintBtn = document.getElementById("useHint");
let noDups = [];
hintBtn.addEventListener("click", () => {
  localStorage.setItem("hints", parseInt(localStorage.getItem("hints")) - 1);
  document.getElementById("hintsleft").innerHTML =
    localStorage.getItem("hints");

  let randomNum = Math.floor(
    Math.random() * parseInt(localStorage.getItem("word").length)
  );
  
  if (parseInt(localStorage.getItem("hints")) <=0) {
    alert("Zero Hints left!");
    document.getElementById("hintsleft").innerHTML = 0;
  }
  else if (!noDups.includes(randomNum)) {
    noDups.push(randomNum);
    console.log(noDups);
    document.getElementsByClassName("letter")[randomNum].innerHTML = `${
      localStorage.getItem("word")[randomNum]
    }`;
    localStorage.setItem("count", parseInt(localStorage.getItem("count")) + 1);
  }else{
    localStorage.setItem("hints", parseInt(localStorage.getItem("hints")) + 1);
    hintBtn.click();
  }
  
});
