const main=document.querySelector(".containermain")
const thank=document.querySelector(".containerrate")
const submit=document.getElementById("btn")
const rate=document.getElementById("rate")
const rates =document.querySelectorAll(".item")

submit.addEventListener("click", ()=> {
    thank.classList.remove("hidden")
    main.style.display="none"
})


rates.forEach((a) => {
    a.addEventListener("click",()=>{
        rate.innerHTML= a.innerHTML
    })
})
