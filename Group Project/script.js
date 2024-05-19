document.addEventListener('DOMContentLoaded', () => {
    const backgroundDiv = document.getElementById('gif');
    const toggleButton = document.getElementById('changeButton');
    let isDefaultBackground = true;

    toggleButton.addEventListener('click', () => {
        if (isDefaultBackground) {
            backgroundDiv.style.backgroundImage = 'url("./img/gif2.gif")'; // Alternate background image
        } else {
            backgroundDiv.style.backgroundImage = 'url("./img/sky.png")'; // Reset to default background image
        }
        isDefaultBackground = !isDefaultBackground;
    });
});









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


