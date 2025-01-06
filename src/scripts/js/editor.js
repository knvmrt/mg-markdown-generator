// Dosya adını localStorage'dan al
const fileName = localStorage.getItem('markdownFileName');

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

  // Dosya adını localStorage'dan al
  const fileName = localStorage.getItem('markdownFileName') || 'markdown-file';
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `${fileName}-by-knvmrt.md`; // Dynamic file name
  a.click();

  URL.revokeObjectURL(url);
});


window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);

// Clear file name in LocalStorage
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('markdownFileName');
});




// window.addEventListener("DOMContentLoaded", () => {
//   const fileCreated = localStorage.getItem("fileCreated");

//   if (!fileCreated) {
//     // Eğer izin yoksa doğrudan Error sayfasına yönlendir
//     window.location.href = "../pages/error.html";
//   } else {
//     // İzin varsa anahtarı temizle
//     localStorage.removeItem("fileCreated");
//   }
// });

