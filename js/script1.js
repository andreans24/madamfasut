// Inisialisasi peta
var map = L.map('map').setView([-2.548926, 118.0148634], 5); // Fokus ke Indonesia

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Tambahkan marker di titik yang diinginkan (contoh: Jakarta)
const marker = L.marker([-6.2088, 106.8456]).addTo(map)
    .bindPopup("<b>Lokasi yang Diinginkan</b><br>Jakarta")
    .openPopup();



const button = document.getElementById('myButton');

button.addEventListener('click', function () {
    // Menampilkan SweetAlert
    Swal.fire({
        title: 'Informasi',
        text: 'Tampilkan Lokasi mana saja di Regional 1!',
        icon: 'info', // tipe ikon, bisa 'success', 'error', 'warning', 'info', 'question'
        confirmButtonText: 'OK' // teks tombol konfirmasi
    }).then((result) => {
        if (result.isConfirmed) {
            // Mengarahkan ke halaman baru
            window.location.href = 'index2.html'; // Ganti dengan URL halaman yang diinginkan
        }
    });
});

