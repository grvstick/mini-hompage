const parser = new DOMParser()
let photoContent = null
let diaryContent = null
let wallContent = null


fetch("./diary.html").then(
    response => response.text()
).then(
    html => parser.parseFromString(html, "text/html")
).then(
    res => {
        diaryContent = res.querySelector('.box.content-box').innerHTML;
    }
)

fetch("./photo.html").then(
    response => response.text()
).then(
    html => parser.parseFromString(html, "text/html")
).then(
    res => {
        photoContent = res.querySelector('.box.content-box').innerHTML;
    }
)

fetch("./wall.html").then(
    response => response.text()
).then(
    html => parser.parseFromString(html, "text/html")
).then(
    res => {
        wallContent = res.querySelector('.box.content-box').innerHTML;
    }
)


const homeContent = JSON.parse(JSON.stringify(document.querySelector('.box.content-box').innerHTML))

document.querySelector('#home-link').addEventListener('click', switchPage)
document.querySelector('#photo-link').addEventListener('click', switchPage)
document.querySelector('#diary-link').addEventListener('click', switchPage)
document.querySelector('#wall-link').addEventListener('click', switchPage)

function switchPage(event) {
    event.preventDefault();
    switch (event.target.id){
        case "home-link":
            document.querySelector('.box.content-box').innerHTML = homeContent;
            break;
        case "photo-link":
            document.querySelector('.box.content-box').innerHTML = photoContent;
            break;
        case "diary-link":
            document.querySelector('.box.content-box').innerHTML = diaryContent;
            const diaryButton = document.querySelector(".secret-access")
            diaryButton.addEventListener("click", getTextFile)
            break;
        case "wall-link":
            document.querySelector('.box.content-box').innerHTML = wallContent;
            break;
    }
}


function getTextFile(event){
    console.log("here")
    const input = document.createElement("input");
    input.type = 'file';
    input.accept = 'text/plain';
    input.onchange = function(event){
        processFile(event.target.files[0])
    }
    input.click()
}

function processFile(file){
    const reader = new FileReader();
    reader.readAsText(file, "utf-8");
    reader.onload = function(){
        document.querySelector("#secret-content").innerHTML = reader.result;
        document.querySelector("#secret").style.display = 'block';
        document.querySelector(".secret-access").style.display = 'None'
    };
}