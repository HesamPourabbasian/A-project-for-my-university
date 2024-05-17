document.getElementById('fileInput').addEventListener('change', function() {
    const selectedFile = document.getElementById('fileInput').files[0];
    console.log('Selected file:', selectedFile);
});

// br
const backgroundDiv = document.getElementById('gif');
const changeButton = document.getElementById('changeButton');

let isBackgroundChanged = false;

function toggleBackground() {
    if (isBackgroundChanged) {

        backgroundDiv.style.backgroundImage = 'url("./img/gif.gif")';
    } else {
        backgroundDiv.style.backgroundImage = 'url("./img/gif2.gif")';
    }
    
    isBackgroundChanged = !isBackgroundChanged;
}
changeButton.addEventListener('click', toggleBackground);










// br
var icon = document.getElementById ("changeButton");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");

if ( document.body.classList.contains("dark-theme")) {
    icon.src = "./svg/dark.svg";
} else{
    icon.src ="./svg/light_mode.svg";
}
}
// br 

