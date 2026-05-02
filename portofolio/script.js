// Menginisialisasi animasi dari AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    duration: 1000, // Durasi animasi (dalam milidetik)
    once: true,     // Animasi hanya berjalan sekali saat di-scroll ke bawah
    offset: 50      // Jarak offset untuk memicu animasi
  });
});
