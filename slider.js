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
}