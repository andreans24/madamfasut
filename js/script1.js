// Pengaturan script map 
// Inisialisasi peta
var map = L.map('map').setView([-2.548926, 118.0148634], 5); // Fokus ke Indonesia

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Variabel untuk menyimpan marker
var markers = [];

// Koordinat untuk setiap regional
const regionalLocations = {
    '1': [
        { lat: -6.2088, lng: 106.8456, name: "Jakarta" },
        { lat: -7.2504, lng: 112.7688, name: "Surabaya" },
    ],
    '2': [
        { lat: -2.978867446254382, lng: 104.77748902652809, name: "Palembang" },
        { lat: -6.108827409836779, lng: 106.88976049547088, name: "Tanjung Priok" },
        { lat: -5.468483274432733, lng: 105.32012272131364, name: "Panjang" },
        { lat: -0.01957, lng: 109.33740, name: "Pontianak" },
        { lat: -0.99603, lng: 100.37011, name: "Teluk Bayur" },
        { lat: -5.93152, lng: 105.99889, name: "Banten" },
        { lat: -3.90739, lng: 102.30530, name: "Bengkulu" },
        { lat: -6.71490, lng: 108.56959, name: "Cirebon" },
        { lat: -1.53613, lng: 103.66146, name: "Jambi" },
        { lat: -2.09939, lng: 106.13044, name: "Pangkal Balam" },
        { lat: -6.12509, lng: 106.81052, name: "Sunda Kelapa" },
        { lat: -2.74340, lng: 107.63094, name: "Tanjung Pandan" },
    ],
    '3': [

    ],
    '4': [

    ]
};



// Tambahkan event listener ke button
document.querySelectorAll('.btn-circle').forEach(button => {
    button.addEventListener('mouseover', function () {
        const regionalId = this.getAttribute('data-regional');
        const locations = regionalLocations[regionalId];


        markers.forEach(marker => map.removeLayer(marker));
        markers = [];
        // map.setView([lat, lng], 8); // Zoom in ke marker

        // Menambahkan marker berdasarkan regional
        locations.forEach(location => {
            const marker = L.marker([location.lat, location.lng]).addTo(map)
                .bindPopup(`<b>Lokasi: </b>${location.name}`);
            markers.push(marker); // Simpan marker ke dalam array
        });
    });

    button.addEventListener('mouseout', function () {
        // Menghapus semua marker saat kursor keluar
        markers.forEach(marker => map.removeLayer(marker));
        markers = []; // Kosongkan array markers
    });
});
// Akhir Pengaturan script map 


// button script
// Contoh data gambar dengan latitude dan longitude
const galleryData = [
    { lat: -2.978867446254382, lng: 104.77748902652809, imgUrl: 'https://plus.unsplash.com/premium_photo-1661943810539-ae3c711e3866?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Pelambang', link: 'index2.html' },
    { lat: -6.108827409836779, lng: 106.88976049547088, imgUrl: 'https://plus.unsplash.com/premium_photo-1661875610369-7df1d816d54e?q=80&w=3433&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Tanjung Priok', link: 'index2.html' },
    { lat: -5.468483274432733, lng: 105.32012272131364, imgUrl: 'https://plus.unsplash.com/premium_photo-1661875610369-7df1d816d54e?q=80&w=3433&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Panjang', link: 'index2.html' },
    { lat: -5.468483274432733, lng: 105.32012272131364, imgUrl: 'https://plus.unsplash.com/premium_photo-1661875610369-7df1d816d54e?q=80&w=3433&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Pontianak', link: 'index2.html' },
    // Tambahkan gambar lainnya sesuai kebutuhan
];

// Mengambil semua button dengan class btn-circle
const buttons = document.querySelectorAll('.btn-circle');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Membaut konten galeri
        const galleryContent = `
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width: 100%;">
                ${galleryData.map(item => `
                    <div style="position: relative; overflow: hidden; border-radius: 8px;">
                    <a href="${item.link}" style="text-decoration: none;">
                        <img src="${item.imgUrl}" alt="Gambar" style="width: 100%; height: 100%; border-radius: 8px; transition: transform 0.3s ease; transform: scale(1);" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); border-radius: 8px; opacity: 0; transition: opacity 0.3s ease;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0' "></div>
                        <h4 style="position: absolute; color: white; top: 40%; left: 10px; transform: none; font-weight: normal;x">${item.title}</h4>
                        <div style="position: absolute; top: 65%; left: 10px; width: 50px; height: 2px; background-color: rgba(255, 255, 0, 0.9); "></div>
                        </a>
                    </div>
                `).join('')}
            </div>
        `;
        Swal.fire({
            title: 'Regional [ ]', // Judul popup
            html: galleryContent, // Menggunakan HTML untuk isi konten
            showCloseButton: false, // Menampilkan tombol close
            showCancelButton: false, // Menampilkan tombol batal
            confirmButtonText: false, // Teks untuk tombol konfirmasi
            // background: 'transparent', // Agar latar belakang SweetAlert transparan
            backdrop: 'rgba(0, 0, 0, 0.5)', // Mengatur latar belakang saat popup terbuka
            focusConfirm: false, // Tidak memfokuskan tombol konfirmasi
            width: '800px', // Atur lebar popup sesuai kebutuhan
        });
        // Tambahkan CSS untuk menyembunyikan tombol konfirmasi
        const confirmButton = document.querySelector('.swal2-confirm');
        if (confirmButton) {
            confirmButton.style.display = 'none';
        }
    });
});

