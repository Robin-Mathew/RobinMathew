AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function toggleFlip(element) {
    element.classList.toggle('flipped');
}

function expandDiv(element) {
    element.classList.toggle('expanded-size');
    element.innerHTML = element.classList.contains('expanded-size') ? 'Expanded' : 'Click me to expand';
}
//Modal1
// Get the modal and button elements
// Get the modal and button elements
var modal1 = document.getElementById('popup');
var openButton1 = document.querySelector('.popup-trigger');
var closeButton1 = document.getElementById('close-popup');

// Function to open the modal when the word is clicked
openButton1.addEventListener('click', function() {
    modal1.style.display = 'block';
});

// Function to close the modal
closeButton1.onclick = function() {
    modal1.style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal1) {
        modal1.style.display = 'none';
    }
});

var navLinks1 = document.querySelectorAll('.navbar a');
navLinks1.forEach(function(link) {
    link.addEventListener('click', function() {
        modal1.style.display = 'none';
    });
});


//Modal2
var modal2 = document.getElementById('popup2');
var openButton2 = document.querySelector('.popup-trigger2');
var closeButton2 = document.getElementById('close-popup2');

// Function to open the modal when the word is clicked
openButton2.addEventListener('click', function() {
    modal2.style.display = 'block';
});

// Function to close the modal
closeButton2.onclick = function() {
    modal2.style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal2) {
        modal2.style.display = 'none';
    }
});

var navLinks2 = document.querySelectorAll('.navbar a');
navLinks2.forEach(function(link) {
    link.addEventListener('click', function() {
        modal2.style.display = 'none';
    });
});

//Modal3

var modal3 = document.getElementById('popup3');
var openButton3 = document.querySelector('.popup-trigger3');
var closeButton3 = document.getElementById('close-popup3');

// Function to open the modal when the word is clicked
openButton3.addEventListener('click', function() {
    modal3.style.display = 'block';
});

// Function to close the modal
closeButton3.onclick = function() {
    modal3.style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal3) {
        modal3.style.display = 'none';
    }
});

var navLinks3 = document.querySelectorAll('.navbar a');
navLinks3.forEach(function(link) {
    link.addEventListener('click', function() {
        modal3.style.display = 'none';
    });
});