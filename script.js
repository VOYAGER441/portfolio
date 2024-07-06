let tabLinks=document.getElementsByClassName("tab-links");
let tabcontants=document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabcontant of tabcontants){
        tabcontant.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}