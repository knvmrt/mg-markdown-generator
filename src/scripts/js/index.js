// HEADER

        // Menü tuşları ve navigasyon referansları
        const menuToggle = document.getElementById("menu-toggle");
        const openIcon = document.getElementById("Open");
        const closeIcon = document.getElementById("Close");
        const mobileNav = document.getElementById("mobile-nav");

        // Menü tuşuna tıklama olayı
        menuToggle.addEventListener("click", () => {
            // Menü açık mı kapalı mı kontrol et
            const isOpen = openIcon.classList.contains("d-none");

            if (isOpen) {
                // Menü açık -> kapat
                openIcon.classList.remove("d-none");
                closeIcon.classList.add("d-none");
                mobileNav.classList.add("d-none");
            } else {
                // Menü kapalı -> aç
                openIcon.classList.add("d-none");
                closeIcon.classList.remove("d-none");
                mobileNav.classList.remove("d-none");
                mobileNav.classList.add("mobil-nav-open");
            } if (isOpen) {
                // Menü açık -> kapat
                openIcon.classList.remove("d-none");
                closeIcon.classList.add("d-none");
                mobileNav.classList.remove("mobil-nav-open");
            }

        });

// HEADER


const markdownInput = document.getElementById('markdown-input');
const previewSection = document.getElementById('preview-section');
const markdownSection = document.getElementById('markdown-section');
const previewDiv = document.getElementById('preview');
const markdownBtn = document.getElementById('markdown-btn');
const previewBtn = document.getElementById('preview-btn');
const downloadBtn = document.getElementById('download-btn');
markdownInput.addEventListener('input', (e) => {
  const markdownText = e.target.value;
  const html = marked.parse(markdownText);
  previewDiv.innerHTML = html;
});
markdownBtn.addEventListener('click', () => {
  markdownSection.style.display = 'block';
  previewSection.style.display = 'none';
});
previewBtn.addEventListener('click', () => {
  previewSection.style.display = 'block';
  markdownSection.style.display = 'none';
});
function handleResize() {
  if (window.innerWidth >= 768) {
    markdownSection.style.display = 'block';
    previewSection.style.display = 'block';
  } else {
    markdownSection.style.display = 'block';
    previewSection.style.display = 'none';
  }
}
downloadBtn.addEventListener('click', () => {
  const markdownText = markdownInput.value;
  
  const blob = new Blob([markdownText], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'markdown-generator-by-knvmrt.md';
  a.click();
  
  URL.revokeObjectURL(url);
});
window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);
const currentYear = new Date().getFullYear();
const nameOrProject = "knvmrt's MG Markdown Generator";
const copyrightElement = document.getElementById('copyright');
copyrightElement.title = `Copyright © ${currentYear}, ${nameOrProject}`;