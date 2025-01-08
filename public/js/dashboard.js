document.getElementById('createFile').addEventListener('click', () => {
    const fileNameInput = document.getElementById('fileName');
    const fileNameLabel = document.getElementById('fileNameLabel');
  
    let fileName = fileNameInput.value.trim();
  
    // Show error message if input is empty
    if (!fileName) {
      fileNameLabel.style.visibility = 'visible';
      return;
    }
  
    fileNameLabel.style.visibility = 'hidden'; 

    fileName = fileName
      .replace(/[çÇğĞıİöÖşŞüÜəƏ]/g, (char) => ({
        'ç': 'c', 'Ç': 'c', 'ğ': 'g', 'Ğ': 'g', 'ı': 'i', 'İ': 'i','Ə':'ə',
        'ö': 'o', 'Ö': 'o', 'ş': 's', 'Ş': 's', 'ü': 'u', 'Ü': 'u', 'Ə': 'a', 'ə': 'a'
      }[char]))
      .replace(/\s+/g, '-') 
      .toLowerCase(); 
  
    // Save file name to localStorage
    localStorage.setItem('markdownFileName', fileName);
  
    // Redirect to editor page
    localStorage.setItem("fileCreated", "true"); // İzin verildiğini işaretle
    window.location.href = "/public/editor.html";
  });