const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
});

fetch('data/reviews.json')
  .then(response => response.json())
  .then(data => {
    const reviewCards = document.querySelector('.review-cards');
    reviewCards.innerHTML = ''; // Clear existing (if any)
    
    data.reviews.forEach(review => {
      const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
      
      reviewCards.innerHTML += `
        <article class="review-card">
          <h3>${review.name}</h3>
          <div class="rating-stars">${stars}</div>
          <p>${review.comment}</p>
        </article>
      `;
    });
  })
  .catch(error => console.error('Error fetching reviews:', error)); // Add error handling