// hamburger

const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click' , function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})


//navbar fixed

window.onscroll = function(){
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
}



//icon dark-mode
// const sunIcon = document.querySelector(".sun")
// const moonIcon = document.querySelector(".moon")
// const userTheme = localStorage.getItem("theme")
// const systemTheme = window.matchMedia("(prefer-color-dark)").matches

// const iconToggle = () =>{
//     moonIcon.classList.toggle("display-none")
//     sunIcon.classList.toggle("display-none")
// }

// const themeCheck = () =>{
//     if(userTheme === "dark" || (!userTheme && systemTheme)){
//         document.documentElement.classList.add("dark")
//         sunIcon.classList.add("display-none")
//         return
//     }
//     moonIcon.classList.add("display-none")
// }

// const themeSwitch = () =>{
//     if(document.documentElement.classList.contains("dark")){
//         document.documentElement.classList.remove("dark")
//         localStorage.setItem("theme", "light")
//         iconToggle()
//         return
//     }
// }
// const themeSwitch2 = () =>{
//     if(document.documentElement.classList.contains("light")){
//         document.documentElement.classList.remove("light")
//         localStorage.setItem("theme", "dark")
//         iconToggle()
//         return
//     }
// }

// sunIcon.addEventListener("click", () =>{
//     themeSwitch()
// })
// moonIcon.addEventListener("click", () =>{
//     themeSwitch2()
// })

// themeCheck()
