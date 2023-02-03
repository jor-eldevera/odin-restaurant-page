import appendHomeToContent from "./appendHomeToContent";
import "./styles.css";

// This is the div#content tag
const content = document.getElementById("content");
appendHomeToContent(content); // Initial homepage appending

// Clears the div of all content
function clearContent(div) {
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
}

const homeLi = document.getElementById("home");
homeLi.addEventListener("click", function() {
    clearContent(content);
    appendHomeToContent(content);
});

const menuLi = document.getElementById("menu");
menuLi.addEventListener("click", function() {

});

const contactLi = document.getElementById("contact");
contactLi.addEventListener("click", function() {

});

