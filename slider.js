<<<<<<< HEAD
let counter = 0
let colaction = {
    img_1: "./images/img_1.jpg",
    img_2: "./images/img_2.jpg",
    img_3: "./images/img_3.jpg",
    img_4: "./images/img_4.jpg",
}
setInterval(() => {
    counter === 4 ? counter = 1 : document.querySelector(".img").style.backgroundImage = `url(${colaction[`img_${++counter}`]})`
}, 2000)
const prevImage = () => {
    counter === 1 ? counter = 4 : document.querySelector(".img").style.backgroundImage = `url(${colaction[`img_${--counter}`]})`
}
const nextImage = () => {
    counter === 4 ? counter = 1 : document.querySelector(".img").style.backgroundImage = `url(${colaction[`img_${++counter}`]})`
=======
let counter = 1
setInterval(()=>{
counter===4 ? counter=1: document.querySelector(".image").style.backgroundImage=`url(./img_${++counter}.jpg)`
}, 2000)
const prevImage = () =>{
    counter===1? counter = 4 :  document.querySelector(".image").style.backgroundImage=`url(./img_${--counter}.jpg)`   
}
const nextImage = () =>{
    counter===4? counter = 1 :  document.querySelector(".image").style.backgroundImage=`url(./img_${++counter}.jpg)`   
>>>>>>> e33ad4a53c76aec34183f100a2ae997a8c5032b7
}