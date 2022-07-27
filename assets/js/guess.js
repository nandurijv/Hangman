// getting the input box
let inputBox = document.getElementsByClassName('check-letter')[0];
let inputLetter = document.getElementsByClassName('input__letter')[0];

inputBox.addEventListener('click', ()=>{
    let word = localStorage.getItem('word');
    let lives = localStorage.getItem("lives");

    let count = 0;
    if(count==word.length-1){
        alert("Correct Guess!");
        location.reload();
    }
    else if(word.includes(inputLetter.value.toLowerCase())){
        let charPos = word.indexOf(inputLetter.value);
        document.getElementsByClassName('letter')[charPos].innerHTML = inputLetter.value.toLowerCase();
        console.log(word);
        count++;
    }
    else {
        console.log(word);
        console.log(lives);
        localStorage.setItem('lives', lives-1);
        if(lives>=0){
        document.getElementById('life-count').innerHTML =localStorage.getItem("lives");}
      else{
        alert("Game Over! No Lives Left. Word was " + word);
      }

    }
})