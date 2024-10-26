function toggleCard(header) {
    var card = header.parentElement; // Dapatkan card yang terkait
    var body = card.querySelector('.card-body');
    var icon = header.querySelector('.toggleIcon'); // Ambil icon dari header

    card.classList.toggle('open');
    body.style.display = card.classList.contains('open') ? 'block' : 'none';
    icon.textContent = card.classList.contains('open') ? '-' : '+';
}
