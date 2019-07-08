/*jshint esversion: 6 */

// Modal -> trailers
const modal = document.querySelectorAll('.modal');
const avengersModal = document.querySelector('#avengers-modal');
const incrediblesModal = document.querySelector('#incredibles-modal');
const spidermanModal = document.querySelector('#spiderman-modal');
const blackPantherModal = document.querySelector('#black-panther-modal');

// Trailer buttons
const avengersBtn = document.querySelector('.avengers-btn');
const incrediblesBtn = document.querySelector('.incredibles-btn');
const spidermanBtn = document.querySelector('.spiderman-btn');
const blackPantherBtn = document.querySelector('.black-panther-btn');

// Button click events -> show trailers when clicked
avengersBtn.addEventListener('click', function() {
    avengersModal.style.display = 'block';
});

incrediblesBtn.addEventListener('click', function() {
    incrediblesModal.style.display = 'block';
});

spidermanBtn.addEventListener('click', function() {
    spidermanModal.style.display = 'block';
});

blackPantherBtn.addEventListener('click', function() {
    blackPantherModal.style.display = 'block';
});

// Close modal
const closeModal = document.querySelectorAll('.close');

closeModal.forEach(function(item) {
    item.addEventListener('click', function(){
        for(i = 0; i < modal.length; i++) {
            modal[i].style.display = 'none';
        }
    });
});


// Show and hide content
const tabs = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content');

function selectedTab() {
    // Call remove background and show
    removeBackground();
    removeShow();
    // Add background to current tab
    this.classList.add('selected');
    // Grab the content by the ID, example = <div id="tab1-content"></div>
    const contentID = document.querySelector(`#${this.id}-content`);
    // Show hidden content
    contentID.classList.add('show');
}

// Remove background from other tabs
function removeBackground() {
    tabs.forEach(function(item) {
        item.classList.remove('selected');
    }); 
}
// Remove show
function removeShow() {
    tabContent.forEach(function(item) {
        item.classList.remove('show');
    }); 
}

// Listen for click
tabs.forEach(function(item) {
    item.addEventListener('click', selectedTab);
});
