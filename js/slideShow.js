let currentImageIndex = 0;

const modals = document.querySelectorAll('.custom-modal');
const triggerImages = document.querySelectorAll('.triggerImage');

triggerImages.forEach((triggerImage, index) => {
    triggerImage.onclick = function () {
        currentImageIndex = 0; // Reset index for each modal
        modals[index].style.display = "flex"; // Show the corresponding modal
        showImage(index, currentImageIndex);
    }
});

document.querySelectorAll('.custom-close').forEach((closeButton) => {
    closeButton.onclick = function () {
        this.parentElement.style.display = "none"; // Hide the modal
    }
});

function changeImage(event, modalId, n) {
    const modalIndex = modalId.replace('modal', '') - 1; // Extract index from modal ID
    currentImageIndex += n;
    const images = document.querySelectorAll(`#${modalId} .custom-carousel-image`);
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Loop back to first image
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Loop to last image
    }
    showImage(modalIndex, currentImageIndex);
}

function showImage(index, imgIndex) {
    const images = document.querySelectorAll(`#modal${index + 1} .custom-carousel-image`);
    const carouselImages = document.querySelector(`#modal${index + 1} .custom-carousel-images`);
    images.forEach((img, i) => {
        img.classList.remove('active'); // Hide all images
    });
    images[imgIndex].classList.add('active'); // Show the current image
    
    // Update the transform property to slide images
    const offset = -imgIndex * 100; // Get offset based on current index
    carouselImages.style.transform = `translateX(${offset}%)`;
}