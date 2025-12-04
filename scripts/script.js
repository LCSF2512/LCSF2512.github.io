/*
Student Name: Jacob Munday
File Name: script.js
Date: November 27, 2025
*/

//Global variables
var video = document.getElementById("example");
var videosource = document.getElementById("vid-src");
var descriptionsource = document.getElementById("despsrc");

//Hamburgur menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}