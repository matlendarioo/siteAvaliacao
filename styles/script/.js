
        // Hamburger menu functionality
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const dropdownMenu = document.getElementById('dropdownMenu');

        hamburgerBtn.addEventListener('click', function() {
            hamburgerBtn.classList.toggle('active');
            dropdownMenu.classList.toggle('active');
        });

        // Submenu functionality
        function toggleSubmenu(submenuId) {
            const submenu = document.getElementById(submenuId);
            const allSubmenus = document.querySelectorAll('.submenu');
            
            // Close all other submenus
            allSubmenus.forEach(menu => {
                if (menu !== submenu) {
                    menu.classList.remove('active');
                }
            });
            
            // Toggle current submenu
            submenu.classList.toggle('active');
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.hamburger-btn') && !event.target.closest('.dropdown-menu')) {
                hamburgerBtn.classList.remove('active');
                dropdownMenu.classList.remove('active');
                // Close all submenus when menu closes
                const allSubmenus = document.querySelectorAll('.submenu');
                allSubmenus.forEach(menu => {
                    menu.classList.remove('active');
                });
            }
        });

        // Prevent menu from closing when clicking inside the dropdown
        dropdownMenu.addEventListener('click', function(event) {
            event.stopPropagation();
        });