let counter = 1
setInterval(()=>{
counter===4 ? counter=1: document.querySelector(".image").style.backgroundImage=`url(./img_${++counter}.jpg)`
}, 2000)
const prevImage = () =>{
    counter===1? counter = 4 :  document.querySelector(".image").style.backgroundImage=`url(./img_${--counter}.jpg)`   
}
const nextImage = () =>{
    counter===4? counter = 1 :  document.querySelector(".image").style.backgroundImage=`url(./img_${++counter}.jpg)`   
}