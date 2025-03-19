document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = [
        "UKM PENCAK SILAT UNUSIA Terbentuk pada hari Selasa 23 November 2021...",
        "Personalia yang hadir dalam pembentukan UKM Pencak Silat UNUSIA berjumlah 9 orang...",
        "Pada tahun 2023 UKM Pencak Silat UNUSIA kedatangan anggota baru..."
    ];

    const elements = [
        document.getElementById("paragraf1"),
        document.getElementById("paragraf2"),
        document.getElementById("paragraf3")
    ];

    let currentParagraph = 0;
    let charIndex = 0;
    let isTyping = false;

    function typeNextChar() {
        if (currentParagraph >= paragraphs.length) return;
        if (charIndex < paragraphs[currentParagraph].length) {
            elements[currentParagraph].classList.remove("invisible");
            elements[currentParagraph].innerHTML += paragraphs[currentParagraph][charIndex];
            charIndex++;
        } else {
            currentParagraph++;
            charIndex = 0;
        }
    }

    window.addEventListener("wheel", function (event) {
        if (!isTyping) {
            isTyping = true;
            typeNextChar();
            setTimeout(() => isTyping = false, 30); 
        }
    });
});
