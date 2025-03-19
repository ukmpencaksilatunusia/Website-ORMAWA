







// Animasi Why Section
document.addEventListener("DOMContentLoaded", function () {
    // Animasi Hero langsung
    document.querySelectorAll(".hero-text").forEach(el => {
      el.classList.add("show");
    });
  
    // Animasi Why Section pas masuk viewport
    const elements = document.querySelectorAll("#why-section .animate-slide-up");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Stop observer biar nggak looping
        }
      });
    }, { threshold: 0.3 });
  
    elements.forEach(el => observer.observe(el));
  });
  


// manfaat
function toggleAccordion(index, row) {
  const rowId = `accordion-${row}`;
  const textId = `accordion-text-${row}`;
  const textElement = document.getElementById(textId);
  const accordionRow = document.getElementById(rowId);
  const icon = accordionRow.previousElementSibling.querySelector('.bx-chevron-down');

  // Ganti teks sesuai indeks
  const texts = {
      1: "Program intensif untuk meningkatkan daya tahan fisik dan ketahanan mental.",
      2: "Peluang karir lebih luas dengan keterampilan bela diri yang profesional.",
      3: "Kesempatan mengikuti berbagai kompetisi dan meraih prestasi.",
      4: "Jalinan persaudaraan erat antaranggota yang saling mendukung.",
      5: "Latihan rutin membangun disiplin dan meningkatkan kepercayaan diri.",
      6: "Mengasah spiritualitas serta memahami nilai budaya tradisional."
  };

  // Toggle visibilitas
  if (accordionRow.classList.contains("hidden")) {
      accordionRow.classList.remove("hidden");
      textElement.textContent = texts[index];
      icon.style.transform = "rotate(180deg)";
  } else {
      accordionRow.classList.add("hidden");
      textElement.textContent = "";
      icon.style.transform = "rotate(0deg)";
  }
}



// Fungsi toggle accordion
function toggleAccordion(id, row) {
  const textElement = document.getElementById(`accordion-text-${row}`);
  const accordionRow = document.getElementById(`accordion-${row}`);

  if (accordionRow.classList.contains("hidden")) {
      accordionRow.classList.remove("hidden");
      textElement.textContent = accordionData[id];
  } else {
      accordionRow.classList.add("hidden");
      textElement.textContent = "";
  }
}


function toggleAccordion(id, row) {
    const contentDiv = document.getElementById(`accordion-${row}`);
    const textDiv = document.getElementById(`accordion-text-${row}`);
    const manfaatSection = document.getElementById("manfaat-section");

    // Tutup semua accordion di row yang sama sebelum buka yang baru
    document.querySelectorAll(`[id^='accordion-${row}']`).forEach((el) => {
        if (el.id !== `accordion-${row}`) {
            el.classList.add("hidden");
        }
    });

    // Kalau yang diklik udah kebuka, tutup
    if (!contentDiv.classList.contains("hidden") && textDiv.innerText === accordionData[id]) {
        contentDiv.classList.add("hidden");
    } else {
        textDiv.innerText = accordionData[id]; // Isi teks sesuai pilihan
        contentDiv.classList.remove("hidden");
    }

    // **Langsung update ukuran**
    updateSectionHeight();
}

function updateSectionHeight() {
    const manfaatSection = document.getElementById("manfaat-section");
    const accordionContainer = document.getElementById("accordion-container");

    if (accordionContainer.offsetHeight > 0) {
        manfaatSection.style.height = `${accordionContainer.offsetHeight + 50}px`; // Tambahin padding dikit
    } else {
        manfaatSection.style.height = "auto"; // Balikin ke ukuran awal kalau gak ada yang kebuka
    }
}





// cerita anggota
const comments = [
    { name: "Andi", text: "Seru banget, komunitas ini bikin gue makin semangat buat belajar lebih banyak!" },
    { name: "Rina", text: "Latihan di sini ngebantu gue jadi lebih disiplin dalam segala hal." },
    { name: "Budi", text: "Keren! Bisa kenal banyak temen baru dan nambah skill secara gratis!" },
    { name: "Sari", text: "Gak nyesel gabung, pelatihannya serius tapi tetep asik dan santai." },
    { name: "Dika", text: "Banyak pengalaman berharga yang gue dapetin di sini, bikin makin berkembang." },
    { name: "Fajar", text: "Lingkungan yang positif dan mendukung banget untuk berkembang." },
    { name: "Putri", text: "Latihan di sini bikin mental gue lebih kuat dan lebih percaya diri." },
    { name: "Ilham", text: "Kebersamaannya berasa banget, kayak keluarga sendiri beneran!" },
    { name: "Wulan", text: "Pelatihnya sabar dan profesional banget dalam ngajarin kita." },
    { name: "Rizky", text: "Belajar banyak nilai kehidupan dari latihan di sini, bukan sekadar teori." }
];

const scrollContainer = document.getElementById("scrollText");

function generateComments() {
    comments.forEach(comment => {
        const card = document.createElement("div");
        card.classList.add("comment-card");

        const name = document.createElement("h3");
        name.textContent = comment.name;
        name.classList.add("comment-name");

        const text = document.createElement("p");
        text.textContent = `"${comment.text}"`;
        text.classList.add("comment-text");

        card.appendChild(name);
        card.appendChild(text);
        scrollContainer.appendChild(card);
    });

    // Duplikasi komentar biar scroll mulus tanpa jeda
    comments.forEach(comment => {
        const card = document.createElement("div");
        card.classList.add("comment-card");

        const name = document.createElement("h3");
        name.textContent = comment.name;
        name.classList.add("comment-name");

        const text = document.createElement("p");
        text.textContent = `"${comment.text}"`;
        text.classList.add("comment-text");

        card.appendChild(name);
        card.appendChild(text);
        scrollContainer.appendChild(card);
    });
}

generateComments();





// faq
document.querySelectorAll('.toggle-faq').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      answer.classList.toggle('hidden');
      item.querySelector('span').textContent = answer.classList.contains('hidden') ? '+' : '-';
    });
  });
  