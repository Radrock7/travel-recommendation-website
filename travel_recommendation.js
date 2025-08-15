const heroSection = document.getElementById('heroSection');
const heroText = document.getElementById('heroText');

function clearOverlays() {
    const overlay = document.querySelector('.overlay-content');
    if (overlay) overlay.remove();

    const resultsPanel = document.querySelector('.search-results');
    if (resultsPanel) resultsPanel.remove();

    heroText.style.display = 'block';
}

// HOME
document.getElementById('nav-home').addEventListener('click', () => {
    clearOverlays();
});

// ABOUT US
document.getElementById('nav-about').addEventListener('click', () => {
    clearOverlays();
    const aboutOverlay = document.createElement('div');
    aboutOverlay.className = 'overlay-content';
    aboutOverlay.innerHTML = `
        <h1>ABOUT US</h1>
        <p>We are a team of passionate individuals dedicated to providing the best travel experiences around the world.</p>
        <h2>Our Team</h2>
        <p>John Doe - CEO<br>Celina Thomas - Team Lead<br>Mike Tysen - Delivery Head</p>
    `;
    heroSection.appendChild(aboutOverlay);
    heroText.style.display = 'none';
});

// CONTACT US
document.getElementById('nav-contact').addEventListener('click', () => {
    clearOverlays();
    const contactOverlay = document.createElement('div');
    contactOverlay.className = 'overlay-content';
    contactOverlay.innerHTML = `
        <h1>Contact Us</h1>
        <p>Email: contact@travelbloom.com</p>
        <p>Phone: +1 234 567 890</p>
    `;
    heroSection.appendChild(contactOverlay);
    heroText.style.display = 'none';
});

// SEARCH
document.getElementById('searchBtn').addEventListener('click', () => {
    clearOverlays();
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsPanel = document.createElement('div');
    resultsPanel.className = 'search-results';

    if (query.includes('beach')) {
        resultsPanel.innerHTML = `
            <div class="destination">
                <img src="./website_images/sydney.jpg" alt="Sydney">
                <h3>Sydney, Australia</h3>
                <p>Famous for its stunning beaches and landmarks.</p>
            </div>
            <div class="destination">
                <img src="./website_images/city-of-rio-de-janeiro.jpg" alt="Rio">
                <h3>Rio de Janeiro, Brazil</h3>
                <p>Home to Copacabana and Ipanema beaches.</p>
            </div>
        `;
    } else {
        resultsPanel.innerHTML = `<p>No matching destinations found.</p>`;
    }

    heroSection.appendChild(resultsPanel);
});

// CLEAR
document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    clearOverlays();
});
