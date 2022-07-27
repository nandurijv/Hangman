let input = document.getElementsByClassName('input__letter')[0];

console.log(input)
input.addEventListener('onfocus', ()=>{
    console.log(input.value);
})

