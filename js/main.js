document.querySelector('.fa-bars').addEventListener('click', function(){
    document.querySelector('nav ul').style.right = '0'
})

document.querySelector('.fa-xmark').addEventListener('click', function(){
    document.querySelector('nav ul').style.right = '-250px'
})

document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', function(){
        menu.style.top = '-30%'
        menuClose.style.display = 'none'
        menuOpen.style.display = 'block'
    })
})