const d = document;

const $items = [...document.querySelectorAll(".items")],
$viewBox = d.querySelector(".view-box"),
$card = d.querySelector(".card"),
$close = d.querySelector(".fa-close"),
$ViewImg = d.querySelector(".card img"),
$itemImg = [...d.querySelectorAll(".items img")]


document.addEventListener("click", e => {
    if(e.target.matches(".items *")){
        $viewBox.classList.add("showViewBox")
        $ViewImg.src = e.target.src;
    }
})



$close.addEventListener("click", hidden)

function hidden(){
    $viewBox.classList.remove("showViewBox")
}