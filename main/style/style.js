document.querySelector('.toggleBtn').addEventListener('click', ()=>{
    document.querySelector('#menu').classList.toggle('appear')
})
document.querySelector('#confirmMenu').addEventListener('click',()=>{
    document.querySelector('#confirmMenu i.icon').classList.toggle('active')
    document.querySelector('#confirmation').classList.toggle('active')
    document.querySelector('#confirmMenu').classList.toggle('active')
})