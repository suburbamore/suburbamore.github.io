// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunction()};

// Get the header
let banner = document.getElementById("title");

// Get the offset position of the navbar
let sticky = banner.offsetTop;

// Add the sticky class to the header when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position.
function stickyFunction() {
  if (window.pageYOffset > sticky) {
    banner.classList.add("sticky");
  } else {
    banner.classList.remove("sticky");
  }
} 


function columnFunction1(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg1");

  // Get the image text
  var imgText = document.getElementById("imgtext1");

  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.parentElement.style.backgroundImage = "url('" + imgs.src + "')";
  expandImg.parentElement.style.backgroundAttachment = "fixed";

  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;

  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
} 


function columnFunction2(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg2");

  // Get the image text
  var imgText = document.getElementById("imgtext2");

  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.parentElement.style.backgroundImage = "url('" + imgs.src + "')";
  expandImg.parentElement.style.backgroundAttachment = "fixed";

  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
} 


function columnFunction3(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg3");

  // Get the image text
  var imgText = document.getElementById("imgtext3");

  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.parentElement.style.backgroundImage = "url('" + imgs.src + "')";
  expandImg.parentElement.style.backgroundAttachment = "fixed";

  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
} 