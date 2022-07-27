// Controlls of the game page.

// getting a random word from an API

async function getWord(difficulty) {
  console.log("inside getWord");

  let url = "https://random-word-api.herokuapp.com/word?length=5";

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("word", data);
      if (difficulty == "easy" && data[0].length <= 5) {
        for (var i = 0; i < data[0].length; i++) {
          document.getElementsByClassName(
            "your__word"
          )[0].innerHTML += `<span class="letter">°</span>`;
        }
      } else if (difficulty == "difficult" && data[0].length >= 5) {
        for (var i = 0; i < data[0].length; i++) {
          document.getElementsByClassName(
            "your__word"
          )[0].innerHTML += `<span class="letter">°</span>`;
        }
      } else {
        getWord(difficulty);
      }
      document.getElementById("rules").style = "display:none;";
      // to show the game page
      document.getElementById("game").style = "display:flex;";

      // to hide the unnecessary images
      document.getElementsByClassName("cartoon1")[0].style = "display:none;";
      document.getElementsByClassName("cartoon2")[0].style = "display:none;";
      timerFunc();
    });
}

function timerFunc() {
  // get the timer ready(
  let minutes = parseInt(localStorage.getItem("time"));
  // let minutes = 0;
  let seconds = 0;

  let minute_holder = document.getElementsByClassName("minutes")[0];
  let second_holder = document.getElementsByClassName("seconds")[0];

  minute_holder.innerHTML = minutes;
  second_holder.innerHTML = seconds;

  setInterval(() => {
    seconds--;
    if (seconds <= 0 && minutes >= 1) {
      minutes--;
      seconds = 59;
      minute_holder.innerHTML = minutes;
      second_holder.innerHTML = seconds;
    } else if (minutes == 0 && seconds == 0) {
      // log out of the game.
      let word = localStorage.getItem("word")[charPos];
      alert(`Your time is up! The correct word was : ${word}`);
      location.reload();
    } else {
      minute_holder.innerHTML = minutes;
      second_holder.innerHTML = seconds;
    }
  }, 1000);
}
