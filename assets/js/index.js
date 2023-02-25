//Dropdown Navigation (active on max-width 430px)
let dropdown = document.querySelector(".dropdown-btn");

dropdown.addEventListener('click', function(event){
    let dropdownOpsi = document.getElementById("dropdownOpsi");

    if(dropdownOpsi.style.display == "block"){
        dropdownOpsi.style.display = "none";
    } else {
        dropdownOpsi.style.display = "block";
    }
});

if (dropdown.style.display == "none"){
    dropdownOpsi.style.display = "none";
}


//Slider
let picturNumber = 1;
showPicture(picturNumber);

function stepSlide(n) {
    showPicture(picturNumber = picturNumber + n);
}

function btnSlide(n) {
    showPicture(picturNumber = n);
}

function showPicture(n) {
    let pictures = document.getElementsByClassName("doc");
    let dot_btn = document.getElementsByClassName("dot");

    let index;

    if (n > pictures.length){
        picturNumber = 1
    }

    if (n < 1){
        picturNumber = pictures.length;
    }

    for (index = 0; index < pictures.length; index++){
        pictures[index].style.display = "none";
    }

    for (index = 0; index < dot_btn.length; index++) {
        dot_btn[index].className = dot_btn[index].className.replace("active", "");
    }

    pictures[picturNumber - 1].style.display = "block";
    dot_btn[picturNumber - 1].className = dot_btn[picturNumber - 1].className + " active";
}