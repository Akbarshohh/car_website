let form = document.querySelector('.form')
let input = document.querySelector('.box')

form.addEventListener('sumbit' ,(e)=>{
    e.preventDefault()
    console.log(input.value);
})