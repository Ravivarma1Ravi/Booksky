var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

//select cancel button
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

//select container, add-book, book-title-input, book-author-input, book-description-input
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description-input")

addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "box-container")
    div.innerHTML = `<h2>${booktitle.value}</h2><br>
            <h3>${bookauthor.value}</h3><br>
            <p>${bookdescription.value}</p>
            <button onclick="deletebook(event)">Delete</button>`

    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function deletebook(event){
    event.target.parentElement.remove()
}