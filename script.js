let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

let projectsDisplay = "none";
function toggleProjects() {
    if(projectsDisplay == "none") {
        projectsDisplay = "block";
        document.getElementById("btn-show").textContent = "Hide";
    } else {
        projectsDisplay = "none";
        document.getElementById("btn-show").textContent = "Show more...";
    }
     
    tiles = document.querySelectorAll(".project-tile:nth-child(n+5)");
    for(i = 0; i < tiles.length; i++) {
        tiles[i].style.display = projectsDisplay;
    }
}
