const btn = document.querySelector(".dropbtn")

btn.addEventListener('click', onClick)
const content = document.querySelector(".dropdown-content")

function onClick(e){
    if(getComputedStyle(content).display === "block"){
        content.style.display = "None"
    }
    else{
        content.style.display = "block"
    }
}