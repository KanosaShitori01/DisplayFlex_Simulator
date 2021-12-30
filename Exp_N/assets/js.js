const count = 5;
let boxPart = document.querySelectorAll(".mainExpe_part__content");
boxPart.forEach((box)=>{
    for(let i = 0; i < count; i++){
        box.innerHTML += `<div class="mainExpe_part__content__box">
            ${i + 1}
        </div>`;
    }
})