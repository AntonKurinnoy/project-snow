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

    const totalLabels = document.querySelectorAll('.general-stat-label-name-total');
    const teamLabels = document.querySelectorAll('.general-stat-label-name-team');

    const colors = [
        '#9f2b5b', '#5D3F90', '#3B7EFF', '#75C16E', '#9C84FF', '#FFB300', '#FFD700', '#4DB6AC', '#00BCD4', '#1976D2', '#3F51B5', '#3B7EFF', '#AEEA00', '#CDDC39'
    ];

   const fonts = [
        'sakana', 'Audiowide', 'BakbakOne', 'SUSE', 'SUSE-bold', 'Tourney', 'Nabla', 'Monofett', 'BungeeShade', 'BungeeSpice', 'Workbench', 'Sixtyfour', 'SixtyfourConvergence', 'Sriracha', 'FugazOne'
    ];



// track current position
let colorIndex = 0;
let fontIndex  = 0;

// grab both TOTAL and TEAM labels together
const allLabels = document.querySelectorAll(
  ".general-stat-label-name-total, .general-stat-label-name-team"
);

// helper to apply next color
function cycleColor() {
  colorIndex = (colorIndex + 1) % colors.length;
  allLabels.forEach(el => {
    el.style.color = colors[colorIndex];
  });
}

// helper to apply next font
function cycleFont() {
  fontIndex = (fontIndex + 1) % fonts.length;
  allLabels.forEach(el => {
    el.style.fontFamily = fonts[fontIndex];
  });
}

// attach click handlers
document.querySelectorAll(".general-stat-label-name-total")
  .forEach(el => el.addEventListener("click", cycleColor));

document.querySelectorAll(".general-stat-label-name-team")
  .forEach(el => el.addEventListener("click", cycleFont));


});