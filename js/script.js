let currentPage = 0;
const pages = document.querySelectorAll('.book-page'); // Select all pages
const totalPages = pages.length;

// Set all pages to be hidden initially except the first one
pages.forEach((page, index) => {
    if (index !== currentPage) {
        page.style.transform = "rotateY(180deg)"; // Hide other pages
    }
});

// Handle "Next" button click for flipping forward
document.getElementById('next').addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
        pages[currentPage].style.transform = "rotateY(-180deg)"; // Flip current page
        currentPage++;
        pages[currentPage].style.transform = "rotateY(0deg)"; // Show next page
    } else {
        // Loop back to the first page
        pages[currentPage].style.transform = "rotateY(-180deg)"; // Flip current page
        currentPage = 0;
        pages[currentPage].style.transform = "rotateY(0deg)"; // Show first page
    }
});

// Handle "Previous" button click for flipping backward
document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 0) {
        pages[currentPage].style.transform = "rotateY(-180deg)"; // Flip current page back
        currentPage--;
        pages[currentPage].style.transform = "rotateY(0deg)"; // Show previous page
    } else {
        // Loop back to the last page
        pages[currentPage].style.transform = "rotateY(-180deg)"; // Flip current page
        currentPage = totalPages - 1;
        pages[currentPage].style.transform = "rotateY(0deg)"; // Show last page
    }
});
