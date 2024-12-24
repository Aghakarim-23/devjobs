const checkBoxSvg = document.querySelector('#checkBoxSvg')
const justEmptyIcon = document.querySelector("#justEmptyIcon")


justEmptyIcon.addEventListener("click", () => {
    if(checkBoxSvg.classList.contains("hidden")){
        checkBoxSvg.classList.toggle("hidden")
    } else{
        checkBoxSvg.classList.toggle("hidden")
    }
})

checkBoxSvg.addEventListener("click", () => {
    checkBoxSvg.classList.toggle("hidden")
    console.log("Hidden");
})