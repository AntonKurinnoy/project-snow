document.addEventListener("DOMContentLoaded", function () {
    // Navigation handling
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;

            // Update active states
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show selected section
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById(section).classList.add('active');
        });
    });

    document.querySelectorAll('.main_section_nav').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;

            // Update active states
            document.querySelectorAll('.main_section_nav').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show selected section
            document.querySelectorAll('.main_section').forEach(s => s.classList.remove('active'));
            document.getElementById(section).classList.add('active');
        });
    });
    //End Navigation handling
});