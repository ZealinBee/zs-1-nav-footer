let hamburger = document.querySelector('.hamburger')
let aWrapper = document.querySelector('.a-wrapper')

hamburger.addEventListener('click', disappear)

function disappear(){
    aWrapper.classList.toggle('gone')
    console.log('hjs')
}