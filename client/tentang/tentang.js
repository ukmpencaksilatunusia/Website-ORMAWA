















document.addEventListener("DOMContentLoaded", function () {
    const elements = [
        document.getElementById("visi"),
        document.getElementById("misi1"),
        document.getElementById("misi2"),
        document.getElementById("misi3"),
        document.getElementById("misi4"),
    ];

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-4");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(el => observer.observe(el));
});


document.getElementById("ketua").addEventListener("click", function () {
    let anggota = document.getElementById("anggota");
    anggota.classList.toggle("opacity-0");
    anggota.classList.toggle("translate-y-5");
});