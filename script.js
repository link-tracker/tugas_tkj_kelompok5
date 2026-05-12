document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const underline = document.querySelector(".underline");
    const nav = document.querySelector("nav");

    function moveUnderline(active) {
        if (!active || !underline) return;
        const rect = active.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        underline.style.width = rect.width + "px";
        underline.style.left = (rect.left - navRect.left) + "px";
    }

    // Set posisi awal berdasarkan menu yang sedang aktif
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink) moveUnderline(activeLink);

    // Animasi pas hover
    links.forEach(link => {
        link.addEventListener("mouseenter", () => moveUnderline(link));
    });

    // Balik ke posisi menu aktif pas mouse keluar dari navbar
    nav.addEventListener("mouseleave", () => {
        if (activeLink) moveUnderline(activeLink);
    });
});

const menuToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Nutup menu otomatis kalau kita klik salah satu link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});