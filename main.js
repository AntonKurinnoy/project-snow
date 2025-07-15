document.addEventListener("DOMContentLoaded", function () {
    // Navigation handling for sub-sections within 'Main' (Players, Field, Trainings, Stuff)
    document.querySelectorAll('.main_section_nav').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.dataset.section;

            // Update active states for sub-navigation
            document.querySelectorAll('.main_section_nav').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show selected sub-section
            document.querySelectorAll('.main_section').forEach(s => s.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');

            // --- Specific logic for Players section ---
            if (sectionId === 'main_section_players') {
                renderPlayers(); // Render players when 'Players' tab is selected
                playerListView.classList.remove('hidden'); // Ensure player list is visible
                playerDetailView.classList.add('hidden'); // Ensure detail view is hidden
            }
        });
    });
    //End Navigation handling
});