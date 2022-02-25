// get icon for click 

let iconCl = document.querySelector(".icon");

// get navbar 
let nav = document.querySelector(".nevbar");

// click 
iconCl.onclick = function () {
    if (nav.style.getPropertyValue("display") == "none" || nav.style.getPropertyValue("display") == "") {
        nav.style.display = "block";
    }else {
        nav.style.display = "none";
    }
}