const body = document.querySelector("body"),
sidebar = body.querySelector(".sidebar"),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box");

toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
});

var accordion = document.getElementsByClassName("accordion");

for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function(event) {
        event.preventDefault(); 
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

