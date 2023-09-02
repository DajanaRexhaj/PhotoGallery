
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");


function openFullImg(pic, desc){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;


    fullImgBox.addEventListener("click",closeFullImg);
}

function closeFullImg(){
    fullImgBox.style.display = "none";

    fullImgBox.removeEventListener("click", closeFullImg);
}

const colorSelect = document.getElementById("colorSelect");
const defaultColor = ""; // Default background color

// Load the saved color from localStorage (if available)
const savedColor = localStorage.getItem("selectedColor");
if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    colorSelect.value = savedColor;
}

function color(value) {
    if (value === defaultColor) {
        // If "Customize" is selected, remove the saved color from localStorage
        localStorage.removeItem("selectedColor");
    } else {
        // Set the selected color in localStorage
        localStorage.setItem("selectedColor", value);
    }
    document.body.style.backgroundColor = value;
}




