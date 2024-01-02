const arrow1 = document.querySelector('.pi1');
const arrow2 = document.querySelector('.pi2');
const arrow3 = document.querySelector('.pi3');
const arrow4 = document.querySelector('.pi4');

arrow1.addEventListener('click', () => {
    document.querySelector('.pd1').classList.toggle('active')
    document.querySelector('.pi1').classList.toggle('active')
})

arrow2.addEventListener('click', () => {
    document.querySelector('.pd2').classList.toggle('active')
    document.querySelector('.pi2').classList.toggle('active')
})

arrow3.addEventListener('click', () => {
    document.querySelector('.pd3').classList.toggle('active')
    document.querySelector('.pi3').classList.toggle('active')
})

arrow4.addEventListener('click', () => {
    document.querySelector('.pd4').classList.toggle('active')
    document.querySelector('.pi4').classList.toggle('active')
})