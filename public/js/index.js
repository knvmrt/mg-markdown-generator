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
        

// Copyright information
const currentYear = new Date().getFullYear();
const nameOrProject = "knvmrt's MG Markdown Generator";
const copyrightElement = document.getElementById('copyright');
copyrightElement.title = `Copyright © ${currentYear}, ${nameOrProject}`;