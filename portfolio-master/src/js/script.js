document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    console.log(this);
  })
})
