// to check if player was already logged in
window.addEventListener("load", (event) => {
  if (localStorage.getItem("player__name") != null) {
    document.getElementsByClassName("player__name")[0].value =
      localStorage.getItem("player__name");
  }
});

let play = document.getElementsByClassName("play__button")[0];

// on clicking the play button

play.addEventListener("click", () => {
  // set player name if empty
  if (document.getElementsByClassName("player__name")[0].value == "") {
    let player = document.getElementsByClassName("player__name")[0].value;

    if (player.trim() == "") {
      alert("PlEASE ENTER A NAME TO CONTINUE");
    }

    // setting in the local storage
    else {
      localStorage.setItem(
        "player__name",
        document.getElementsByClassName("player__name")[0].value
      );
      play.click();
    }
  }
  // else move to rules
  else {
    // remove home section
    document.getElementById("home").style = "display:none;";

    // go to options page
    document.getElementById("rules").style = "display:block;";
  }
});

// Controls for the Rules page

let list = document.getElementsByClassName("lvl");

Array.from(list).forEach((element) => {
  element.addEventListener("click", () => {
    // to store difficulty
    localStorage.setItem("difficulty", element.classList[0]);
    if (element.classList[0] == "easy") {
      localStorage.setItem("hints", 5);
      localStorage.setItem("lives", 5);
      localStorage.setItem("time", 15);
    } else {
      localStorage.setItem("hints", 3);
      localStorage.setItem("lives", 3);
      localStorage.setItem("time", 10);
    }

    document.getElementById("hintsleft").innerHTML +=
      localStorage.getItem("hints");

      document.getElementById('life-count').innerHTML =localStorage.getItem("lives");

    getWord(localStorage.getItem("difficulty"));
    timerFunc();
  });
});

