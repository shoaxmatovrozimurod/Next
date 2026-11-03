const rasim = document.getElementById("img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const images = [
    "https://picsum.photos/450/450?random=1",
    "https://picsum.photos/450/450?random=2",
    "https://picsum.photos/450/450?random=3"
]

let index = 0

prevBtn.addEventListener("click",() =>{
    index++;

    if(index >=images.length){
        index = 0;
    }
    rasim.src = images[index];
})


nextBtn.addEventListener("click",()=>{
    index--;
    if (index < 0){
        index = images.length -1
    }
    rasim.src = images[index];
})
