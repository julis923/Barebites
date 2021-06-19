const header = document.querySelector('header')
const links = document.querySelectorAll('.link')
const lineA = document.querySelector('#line-a')
const lineB = document.querySelector('#line-b')
const lineC = document.querySelector('#line-c')
const menuBtn = document.querySelector('.menu-btn')
const lines = document.querySelectorAll('.line')
const mobileMenu = document.querySelector('.mobile-menu')
const btns = document.querySelectorAll('.btn')
let menuOpen = false;
let resizeTimer;



links.forEach(link => {
    link.addEventListener('mouseenter', showUnderline)
    link.addEventListener('mouseleave', hideUnderline)
})

menuBtn.addEventListener('click', toggleMobileMenu)
window.addEventListener('resize', resizeWindow)
window.addEventListener('load', onLoad)

function onLoad() {
    document.body.style.visibility = 'visible'
}


function resizeWindow() {
    if (window.innerWidth > 700) {
        mobileMenu.style.display = 'none';
        closeMobileMenu()
    } else {
        mobileMenu.style.display = 'flex';
    }
    btns.forEach(btn => {
        btn.classList.add('resize-animation-stopper')
    })
    mobileMenu.classList.add('resize-animation-stopper')

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
    btns.forEach(btn => {
        btn.classList.remove("resize-animation-stopper")
    })  
    mobileMenu.classList.remove('resize-animation-stopper')

  }, 400);
}

function showUnderline(e) {
    e.target.children[1].style.opacity = 1;
}

function hideUnderline(e) {
    e.target.children[1].style.opacity = 0;
}

function closeMobileMenu() {
    if (menuOpen) {
        lines.forEach(line => {
            line.classList.remove('open')
        })
        mobileMenu.style.opacity = 0;
        menuOpen = false;
        header.style.pointerEvents = 'all';
        mobileMenu.style.pointerEvents = 'none';
    }
}

function toggleMobileMenu() {
    if (!menuOpen) {
        lines.forEach(line => {
            line.classList.add('open')
        })
        mobileMenu.style.opacity = 1;
        header.style.pointerEvents = 'none';
        mobileMenu.style.pointerEvents = 'all';
        menuBtn.style.pointerEvents = 'all';
        menuOpen = true;
    } else {
       closeMobileMenu() 
    } 
}

