
        // Hamburger menu functionality
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const dropdownMenu = document.getElementById('dropdownMenu');

        hamburgerBtn.addEventListener('click', function() {
            hamburgerBtn.classList.toggle('active');
            dropdownMenu.classList.toggle('active');
        });

        dropdownMenu.addEventListener('click', function(event) {
            event.stopPropagation();
        });