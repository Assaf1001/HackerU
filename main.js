const backdrop1 = document.getElementById('backdrop1')
const popUp = document.getElementById('pop-up')
const closeButton = document.getElementById('close-button')

closeButton.addEventListener('click', () => {
    popUp.classList.add('animate__fade-out')
    backdrop1.classList.add('animate__fade-out')
    setTimeout(() => {
        backdrop1.style.display = 'none'
        popUp.style.display = 'none'
    }, 1500)
})


const searchButton = document.getElementById('search-button')
const searchInput = document.getElementById('search-input')

searchButton.addEventListener('click', () => {
    window.open(`https://www.hackeru.co.il/site-search?text=${searchInput.value}`)
})


const mainNavButtons = document.getElementsByClassName('main-nav-buttons')
const mainNavModals = document.getElementsByClassName('main-nav__modal')

for (let i = 0; i < 6; i++) {
    mainNavButtons[i].addEventListener('click', () => {
        if (mainNavModals[i].className.includes('open')) {
            mainNavModals[i].classList.remove('open')
        } else {
            for (let modal of mainNavModals) {
                modal.classList.remove('open')
            }
            mainNavModals[i].classList.add('open')
        }
    })
}


const mobileNavToggleButton = document.getElementById('toggle-button')
const mobileNavContainer = document.getElementById('main-nav__container')
const toggleButton = document.getElementsByClassName('toggle-button')

mobileNavToggleButton.addEventListener('click', () => {
    if (mobileNavContainer.className.includes('animate__down-drop-in')) {
        mobileNavContainer.classList.remove('animate__down-drop-in')
        mobileNavContainer.classList.add('animate__down-drop-out')
        toggleButton[0].children[0].classList.remove('__1')
        toggleButton[0].children[1].classList.remove('__2')
        toggleButton[0].children[2].classList.remove('__3')
    } else {
        mobileNavContainer.classList.remove('animate__down-drop-out')
        mobileNavContainer.classList.add('animate__down-drop-in')
        toggleButton[0].children[0].classList.add('__1')
        toggleButton[0].children[1].classList.add('__2')
        toggleButton[0].children[2].classList.add('__3')
    }
})


const openVideoButton = document.getElementById('video-button')
const video = document.getElementById('video')
const backdrop = document.getElementById('backdrop')

openVideoButton.addEventListener('click', () => {
    video.classList.add('open')
    backdrop.classList.add('open')
})
backdrop.addEventListener('click', () => {
    video.classList.remove('open')
    backdrop.classList.remove('open')
})

const toAnimateFadeIn = document.getElementsByClassName('to-animate__fade-in')

for (let i = 0; i < toAnimateFadeIn.length; i++) {
    window.addEventListener('load', () => {
        let isVisible
        let screenPosition = window.pageYOffset + window.innerHeight
        let elementPosition
        if (i < 13)
            elementPosition = toAnimateFadeIn[i].offsetParent.offsetParent.offsetTop + toAnimateFadeIn[i].offsetParent.offsetTop + toAnimateFadeIn[i].offsetTop
        else if (i >= 13)
            elementPosition = toAnimateFadeIn[i].offsetParent.offsetTop + toAnimateFadeIn[i].offsetTop

        if (window.pageYOffset < elementPosition)
            isVisible = screenPosition > elementPosition
        else
            isVisible = screenPosition < elementPosition

        if (isVisible)
            toAnimateFadeIn[i].classList.add('animate__fade-in')
    })
}

for (let i = 0; i < toAnimateFadeIn.length; i++) {
    document.addEventListener('scroll', () => {
        let isVisible
        let screenPosition = window.pageYOffset + window.innerHeight
        let elementPosition
        if (i < 13)
            elementPosition = toAnimateFadeIn[i].offsetParent.offsetParent.offsetTop + toAnimateFadeIn[i].offsetParent.offsetTop + toAnimateFadeIn[i].offsetTop
        else if (i >= 13)
            elementPosition = toAnimateFadeIn[i].offsetParent.offsetTop + toAnimateFadeIn[i].offsetTop


        if (window.pageYOffset < elementPosition)
            isVisible = screenPosition > elementPosition
        else
            isVisible = screenPosition < elementPosition

        if (isVisible)
            toAnimateFadeIn[i].classList.add('animate__fade-in')
    })
}


const toAnimateBounceIn = document.getElementsByClassName('to-animate__bounce-in')

document.addEventListener('scroll', () => {
    let isVisible
    let screenPosition = window.pageYOffset + window.innerHeight
    let elementPosition = toAnimateBounceIn[0].offsetParent.offsetTop + toAnimateBounceIn[0].offsetTop

    if (window.pageYOffset < elementPosition)
        isVisible = screenPosition > elementPosition
    else
        isVisible = screenPosition < elementPosition + 1000

    if (isVisible) {
        let time = 0
        for (let i = 0; i < toAnimateBounceIn.length; i++) {
            setTimeout(() => {
                toAnimateBounceIn[i].classList.add('animate__bounce-in')
            }, time)
            time += 300
        }
    }
})