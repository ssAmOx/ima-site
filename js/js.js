const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');

stars.forEach(star => {
    star.addEventListener('click', () => {
        stars.forEach(s => s.classList.remove('selected'));
        star.classList.add('selected');
        let value = star.getAttribute('data-value');
        ratingValue.textContent = value;
    });

    star.addEventListener('mouseover', () => {
        stars.forEach(s => s.classList.remove('selected'));
        star.classList.add('selected');
        let value = star.getAttribute('data-value');
        ratingValue.textContent = value;
    });

    star.addEventListener('mouseout', () => {
        stars.forEach(s => {
            if (!s.classList.contains('selected')) {
                s.classList.remove('selected');
            }
        });
        const currentRating = ratingValue.textContent;
        if (currentRating) {
            stars.forEach(s => {
                if (s.getAttribute('data-value') <= currentRating) {
                    s.classList.add('selected');
                }
            });
        }
    });
});
