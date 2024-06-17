const nameInput = document.getElementById('name');
const cekButton = document.getElementById('cekButton');

nameInput.addEventListener('input', function() {
    if (nameInput.value.trim() !== '') {
        cekButton.removeAttribute('disabled');
    } else {
        cekButton.setAttribute('disabled', 'disabled');
    }
});

const words = [
    "Sempak Gajah", "Spakbor Mio", "Sadel BMX", "Ban Serep Bajaj", "Rantang Listrik", "Dompet Kerupuk",
    "Kompor Kulkas", "Kipas Angin Jengkol", "Remote Magicom", "Sarung Bantal Beton", "Obeng USB",
    "Sarung Handphone", "Lampu Tidur Jengkol", "Sisir Semangka", "Kunci Inggris Lemari Es", "Panci Super",
    "Gantungan Kunci Jumbo", "Kaus Kaki Kucing", "Topi Belalang", "Helm Ketupat", "Celana Renang Ubi",
    "Jam Tangan Terong", "Gelas Tahu", "Sepatu Tomat", "Sapu Lidi Elektrik", "Ember Canggih", "Kopi Panci",
    "Piring Terbang", "Tikar Terbang", "Kursi Ransel", "Talenan Pintar", "Garpu Berbicara", "Botol Susu Beton",
    "Sikat Gigi Sepeda", "Bedak Lemari", "Sendal Jengkol", "Sandal Kelapa", "Payung Bambu", "Radio Jeruk",
    "Piring Sate", "Pisau Cokelat", "Topi Cabe", "Sendok Kipas", "Botol Sabun", "Bantal Guling Jerami",
    "Sarung Tangan Bawang", "Panci Hujan", "Raket Tebu", "Keranjang Kucing", "Sepeda Talas", "Kemeja Bakso",
    "Jaket Dodol", "Celana Nanas", "Kacamata Durian", "Bantal Ketupat", "Dompet Ayam", "Mesin Jahit Pisang",
    "Gelang Roti", "Jam Dinding Batu", "Topi Labu", "Bantal Gulung", "Buku Pisang", "Sapu Tangan Semangka",
    "Lemari Angin", "Sendok Mie", "Cangkir Beton", "Handuk Kayu", "Keran Emas", "Sikat Jari", "Kaos Listrik",
    "Senter Teh", "Radio Kipas", "Korek Ayam", "Talenan Udara", "Laci Ajaib", "Toples Bambu", "Panci Madu",
    "Sepeda Terbang", "Jaket Batu", "Helm Tali", "Pisau Jeruk", "Gelas Bola", "Payung Busa", "Cangkir Listrik",
    "Panci Dandang", "Panci Pisang", "Jam Dinding Ubi", "Gelas Angin", "Sapu Terbang", "Tikar Baja",
    "Teko Telur", "Pisau Terbang", "Sendok Kayu", "Helm Topeng", "Talenan Sabun", "Celana Bolu", "Bantal Karung",
    "Sepatu Kayu", "Jaket Nasi", "Gelas Semut", "Topi Mie", "Jaket Durian", "Pisau Garpu", "Panci Besi",
    "Sapu Jeruk", "Lampu Panci", "Teko Bambu", "Sepatu Madu", "Jaket Angin", "Gelas Batu", "Sapu Pisang",
    "Radio Kelapa", "Talenan Batu", "Helm Jerami", "Sepatu Batu", "Senter Pisang", "Gelas Canggih", "Pisau Saku",
    "Jam Tangan Kelapa", "Topi Terbang", "Sendok Batu", "Talenan Beton", "Panci Emas", "Radio Bambu",
    "Piring Canggih", "Sepatu Roti", "Gelas Berbicara", "Kemeja Talas", "Sapu Beton", "Sendok Jerami",
    "Helm Besi", "Jaket Pisang", "Panci Jeruk", "Gelas Kayu", "Talenan Emas", "Sepatu Baja", "Radio Pisang",
    "Helm Batu", "Pisau Angin", "Sapu Canggih", "Gelas Besi", "Sendok Berbicara", "Jaket Jerami", "Panci Kelapa",
    "Radio Batu", "Talenan Pisang", "Sepatu Beton", "Gelas Angin", "Sendok Batu", "Helm Emas", "Panci Beton",
    "Jaket Canggih", "Sepatu Kayu", "Gelas Jeruk", "Talenan Kelapa", "Radio Angin", "Sapu Batu", "Pisau Besi",
    "Helm Beton", "Sendok Kayu", "Jaket Batu", "Panci Pisang", "Gelas Besi", "Sepatu Jeruk", "Talenan Jerami",
    "Radio Jeruk", "Sapu Jeruk", "Pisau Beton", "Helm Pisang", "Gelas Emas", "Panci Kayu", "Jaket Besi",
    "Sepatu Batu", "Gelas Beton", "Talenan Jeruk", "Radio Kayu", "Sapu Pisang", "Pisau Emas", "Helm Kelapa",
    "Sendok Emas", "Jaket Jeruk", "Panci Jerami", "Gelas Kayu", "Sepatu Pisang", "Talenan Batu", "Radio Pisang",
    "Sapu Besi", "Pisau Kayu", "Helm Jerami", "Gelas Pisang", "Panci Kelapa", "Jaket Kayu", "Sepatu Beton",
    "Gelas Batu", "Talenan Canggih", "Radio Kelapa", "Sapu Emas", "Pisau Jerami", "Helm Besi", "Sendok Jeruk",
    "Jaket Beton", "Panci Besi", "Gelas Kayu", "Sepatu Pisang", "Talenan Kayu", "Radio Jerami", "Sapu Pisang",
    "Pisau Batu", "Helm Kayu", "Gelas Jeruk", "Panci Pisang", "Jaket Kayu", "Sepatu Besi", "Gelas Batu",
    "Talenan Jerami", "Radio Batu", "Sapu Kayu", "Pisau Pisang", "Helm Kayu", "Sendok Batu", "Jaket Besi",
    "Panci Kayu", "Gelas Emas", "Sepatu Jerami", "Talenan Pisang", "Radio Kayu", "Sapu Jerami", "Pisau Kayu",
    "Helm Besi", "Gelas Pisang", "Panci Jerami", "Jaket Batu", "Sepatu Kayu", "Gelas Batu", "Talenan Jerami",
    "Radio Pisang", "Sapu Besi", "Pisau Jerami", "Helm Jerami", "Gelas Kayu", "Panci Pisang", "Jaket Jeruk",
    "Sepatu Pisang", "Gelas Besi", "Talenan Batu", "Radio Jerami", "Sapu Batu", "Pisau Besi", "Helm Pisang",
    "Sendok Kayu", "Jaket Kayu", "Panci Kayu", "Gelas Jerami", "Sepatu Jerami", "Talenan Emas", "Radio Kayu",
    "Sapu Pisang", "Pisau Kayu", "Helm Besi", "Gelas Pisang", "Panci Jerami", "Jaket Batu", "Sepatu Kayu",
    "Gelas Batu", "Talenan Jerami", "Radio Pisang", "Sapu Besi", "Pisau Jerami", "Helm Jerami", "Gelas Kayu"
    ];
    
    function generateRandomWord() {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block';
    setTimeout(() => {
        loadingElement.style.display = 'none';
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
    
        Swal.fire({
            title: 'Selamat!',
            text: `Khodam anda adalah ${randomWord}`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }, 3000);
    }    