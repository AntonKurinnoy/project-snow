document.addEventListener("DOMContentLoaded", function () {
    // Navigation handling for main sections (Statistics, Upgrade, Main, Transfer, Matches)
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;

            // Update active states for main navigation
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show selected section
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById(section).classList.add('active');
        });
    });
    //End Navigation handling

    // --- Player Management Logic (New Implementation) ---

    // Mock Player Data - In a real application, this would come from an API or local storage.
    const playersData = [

        // Main Squad - Goalkeeper
        { id: 1, name: "Manuel Neuer", avatar: "images/players/avt/1-avt.png", img: "images/players/1-full.png", position: "GK", skill: 92, health: 100, marketValue: 50000000, age: 36, nationality: "Argentina", pace: 90, shooting: 93, passing: 91, dribbling: 96, defending: 35, physicality: 65, morale: "Excellent", fitness: "Fit", squad: "main", category: "goalkeeper" },
        // Main Squad - Defense
        { id: 2, name: "Sergio Ramos", avatar: "images/players/avt/2-avt.png",           img: "images/players/2-full.png", position: "CB", skill: 90, health: 92, marketValue: 45000000, age: 39, nationality: "Portugal", pace: 89, shooting: 95, passing: 80, dribbling: 87, defending: 30, physicality: 80, morale: "Good", fitness: "Fatigued", squad: "main", category: "defense" },
        { id: 3, name: "Virgil van Dijk", avatar: "images/players/avt/3-avt.png",        img: "images/players/3-full.png", position: "CB", skill: 93, health: 97, marketValue: 70000000, age: 25, nationality: "France", pace: 97, shooting: 88, passing: 82, dribbling: 92, defending: 38, physicality: 76, morale: "Excellent", fitness: "Fit", squad: "main", category: "defense" },
        { id: 4, name: "Trent Alexander-Arnold", avatar: "images/players/avt/4-avt.png", img: "images/players/4-full.png", position: "RB", skill: 88, health: 84, marketValue: 60000000, age: 23, nationality: "Italy", pace: 90, shooting: 94, passing: 70, dribbling: 80, defending: 25, physicality: 88, morale: "Good", fitness: "Fit", squad: "main", category: "defense" },
        { id: 5, name: "Alphonso Davies", avatar: "images/players/avt/5-avt.png",        img: "images/players/5-full.png", position: "LB", skill: 87, health: 96, marketValue: 55000000, age: 32, nationality: "Belgium", pace: 70, shooting: 86, passing: 94, dribbling: 88, defending: 65, physicality: 78, morale: "Excellent", fitness: "Fit", squad: "main", category: "defense" },
        // Main Squad - Midfield
        { id: 6, name: "Kevin De Bruyne", avatar: "images/players/avt/6-avt.png", img: "images/players/6-full.png", position: "CM", skill: 94,  health: 88, marketValue: 90000000, age: 35, nationality: "Poland", pace: 75, shooting: 92, passing: 75, dribbling: 85, defending: 40, physicality: 82, morale: "Good", fitness: "Fit", squad: "main", category: "midfield" },
        { id: 7, name: "N'Golo Kanté", avatar: "images/players/avt/7-avt.png",    img: "images/players/7-full.png", position: "CDM", skill: 90, health: 91, marketValue: 75000000, age: 32, nationality: "Netherlands", pace: 70, shooting: 50, passing: 78, dribbling: 60, defending: 93, physicality: 90, morale: "Excellent", fitness: "Fit", squad: "main", category: "midfield" },
        { id: 8, name: "Bruno Fernandes", avatar: "images/players/avt/8-avt.png", img: "images/players/8-full.png", position: "CAM", skill: 89, health: 95, marketValue: 80000000, age: 31, nationality: "Egypt", pace: 93, shooting: 87, passing: 81, dribbling: 90, defending: 45, physicality: 75, morale: "Good", fitness: "Fit", squad: "main", category: "midfield" },
        // Main Squad - Attack
        { id: 9, name: "Lionel Messi", avatar: "images/players/avt/9-avt.png",        img: "images/players/9-full.png", position: "RW", skill: 95,  health: 97, marketValue: 100000000, age: 31, nationality: "Brazil", pace: 50, shooting: 60, passing: 65, dribbling: 58, defending: 90, physicality: 80, morale: "Excellent", fitness: "Fit", squad: "main", category: "attack" },
        { id: 10, name: "Cristiano Ronaldo", avatar: "images/players/avt/10-avt.png", img: "images/players/10-full.png", position: "ST", skill: 92, health: 94, marketValue: 85000000, age: 25, nationality: "England", pace: 80, shooting: 70, passing: 90, dribbling: 82, defending: 75, physicality: 70, morale: "Good", fitness: "Fit", squad: "main", category: "attack" },
        { id: 11, name: "Kylian Mbappé", avatar: "images/players/avt/11-avt.png", img: "images/players/11-full.png", position: "LW", skill: 93,     health: 99, marketValue: 120000000, age: 27, nationality: "German", pace: 60, shooting: 80, passing: 90, dribbling: 74, defending: 63, physicality: 87, morale: "Excellent", fitness: "Fit", squad: "main", category: "attack" },
        // Substitutes
        { id: 12, name: "Marc-André ter Stegen", avatar: "images/players/avt/12-avt.png",img: "images/players/12-full.png", position: "GK",           skill: 89,  health: 100, marketValue: 40000000, age: 32, nationality: "Denmark", pace: 40, shooting: 66, passing: 74, dribbling: 58, defending: 65, physicality: 77, morale: "Excellent", fitness: "Fit", squad: "substitute", category: "goalkeeper" },
        { id: 13, name: "Raphaël Varane",        avatar: "images/players/avt/13-avt.png",          img: "images/players/13-full.png", position: "CB", skill: 88,  health: 100, marketValue: 50000000, age: 35, nationality: "Poland", pace: 55, shooting: 62, passing: 55, dribbling: 65, defending: 40, physicality: 82, morale: "Good", fitness: "Fit", squad: "substitute", category: "defense" },
        { id: 14, name: "Joshua Kimmich",        avatar: "images/players/avt/14-avt.png",         img: "images/players/14-full.png",  position: "CDM", skill: 91, health: 100, marketValue: 85000000, age: 32, nationality: "Netherlands", pace: 60, shooting: 62, passing: 57, dribbling: 58, defending: 72, physicality: 80, morale: "Excellent", fitness: "Fit", squad: "substitute", category: "midfield" },
        { id: 15, name: "Erling Haaland",        avatar: "images/players/avt/15-avt.png",         img: "images/players/15-full.png", position: "ST",   skill: 91, health: 100, marketValue: 110000000, age: 31, nationality: "Brazil", pace: 50, shooting: 20, passing: 45, dribbling: 30, defending: 40, physicality: 67, morale: "Good", fitness: "Fit", squad: "substitute", category: "attack" },
        { id: 16, name: "Pedri",                 avatar: "images/players/avt/16-avt.png",          img: "images/players/16-full.png", position: "CM", skill: 86,  health: 100, marketValue: 70000000, age: 25, nationality: "England", pace: 60, shooting: 52, passing: 48, dribbling: 62, defending: 45, physicality: 70, morale: "Good", fitness: "Fit", squad: "substitute", category: "midfield" },
    ];

    const playerListView = document.getElementById('player-list-view');
    const closePlayerDetailBtn = document.querySelector('#main_section_players .close-player-detail');
    const playerDetailView = document.querySelector('#main_section_players .player-detail-view');
    const playerDetailContent = document.querySelector('#main_section_players .player-detail-content');
    // const closeDetailBtn = playerDetailView.querySelector('.close-detail-btn');
    // const swapPlayerBtn = playerDetailView.querySelector('.swap-player-btn');

    // Helper function to format currency for display
    function formatCurrency(value) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0, // No decimals for large sums
            maximumFractionDigits: 0
        }).format(value);
    }

    // Function to create a single player card HTML element
    function createPlayerCard(player) {
        const card = document.createElement('div');
        card.classList.add('player-card');
        card.dataset.playerId = player.id; // Store player ID for easy lookup

        /*card.innerHTML = `
                <img src="${player.avatar}" alt="${player.name}">
                <div></div>
                <div class="player-info-main" style="flex-grow: 1; align-content: center; margin-left: 15px;">
                    <h4>${player.name}</h4>
                    <p><span>${player.position}</span></p>
                </div>
                <div class="player-stats-mini"  style="align-content: center; text-align: end;">
                    <span class="skill-value">Skill: ${player.skill}</span>
                    <p class="market-value">${formatCurrency(player.marketValue)}</p>
                </div>
            `;*/
        card.innerHTML = `
            <img src="${player.avatar}" alt="${player.name} Avatar" class="player-card-avatar">
            <div class="player-info-main">
                <div class="player-name">${player.name}</div>
                <div class="player-position">${player.position}</div>
            </div>
            <div class="player-stats-mini">
                <div class="player-skill">Skill: ${player.skill}</div>
                <div class="player-health">Health: ${player.health}</div>
<!--                <div class="player-market-value">${formatCurrency(player.marketValue)}</div>-->
            </div>
        `;
        return card;
    }

    // Function to render all players into their respective sections
    function renderPlayers() {
        // Clear existing players from all categories to prevent duplicates on re-render
        document.getElementById('goalkeeper-section').innerHTML = '<h4 class="category-title">Goalkeeper</h4>'; // Preserve title
        document.getElementById('defense-section').innerHTML = '<h4 class="category-title">Defense</h4>';
        document.getElementById('midfield-section').innerHTML = '<h4 class="category-title">Midfield</h4>';
        document.getElementById('attack-section').innerHTML = '<h4 class="category-title-first">Attack</h4>';
        document.getElementById('substitutes-section').innerHTML = ''; // Substitutes section has no internal title

        playersData.forEach(player => {
            const card = createPlayerCard(player);
            if (player.squad === 'main') {
                // Append to specific category within Main Squad
                document.getElementById(`${player.category}-section`).appendChild(card);
            } else {
                // Append to Substitutes section
                document.getElementById('substitutes-section').appendChild(card);
            }
        });

        // Add click listeners to all newly created player cards for opening detail view
        document.querySelectorAll('.player-card').forEach(card => {
            card.addEventListener('click', function() {
                const playerId = parseInt(this.dataset.playerId);
                const player = playersData.find(p => p.id === playerId); // Find player data by ID
                if (player) {
                    showPlayerDetail(player);
                }
            });
        });
    }

    // Function to show the player detail view and populate it with data
    function showPlayerDetail(player) {
        playerListView.classList.add('hidden'); // Hide the list
        playerDetailView.classList.remove('hidden'); // Show the detail view
        playerDetailContent.innerHTML = `
            <img src="${player.img}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p>${player.position} | Age: ${player.age} | Nationality: ${player.nationality}</p>
            <p>Skill Level: <span class="skill-value">${player.skill}</span> | Market Value: <span class="market-value">${formatCurrency(player.marketValue)}</span></p>
            <div class="player-detail-attributes">
                <div class="attribute-item"><strong>Pace:</strong> <span>${player.pace}</span></div>
                <div class="attribute-item"><strong>Shooting:</strong> <span>${player.shooting}</span></div>
                <div class="attribute-item"><strong>Passing:</strong> <span>${player.passing}</span></div>
                <div class="attribute-item"><strong>Dribbling:</strong> <span>${player.dribbling}</span></div>
                <div class="attribute-item"><strong>Defending:</strong> <span>${player.defending}</span></div>
                <div class="attribute-item"><strong>Physicality:</strong> <span>${player.physicality}</span></div>
                <div class="attribute-item"><strong>Morale:</strong> <span>${player.morale}</span></div>
                <div class="attribute-item"><strong>Fitness:</strong> <span>${player.fitness}</span></div>
            </div>
        `;

        // Populate detail view elements
        // document.getElementById('detail-player-avatar').src = player.avatar;
        // document.getElementById('detail-player-avatar').alt = `${player.name} Avatar`;
        // document.getElementById('detail-player-name').textContent = player.name;
        // document.getElementById('detail-player-position').textContent = player.position;
        // document.getElementById('detail-player-skill').textContent = player.skill;
        // document.getElementById('detail-player-market-value').textContent = formatCurrency(player.marketValue);

        // Placeholder for "Change Player" functionality
        // This is where you would integrate more complex logic, e.g., opening a modal
        // to select a replacement player and then updating the team data.
        /*swapPlayerBtn.onclick = () => {
            alert(`You clicked to change player ${player.name}. This is where the player swap interface would appear!`);
            // Example: A real implementation might open a selection modal or navigate to a dedicated swap screen.
        };*/
    }

    // Event listener for closing the player detail view
    closePlayerDetailBtn.addEventListener('click', () => {
        playerDetailView.classList.add('hidden'); // Hide the detail view
        playerListView.classList.remove('hidden'); // Show the player list again
    });

    // Initial render of players if the 'Main' section and 'Players' tab are active on page load.
    // This ensures content is visible immediately without requiring a click.
    if (document.getElementById('main').classList.contains('active') &&
        document.getElementById('main_section_players').classList.contains('active')) {
        renderPlayers();
    }
});