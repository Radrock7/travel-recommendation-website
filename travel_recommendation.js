// Navbar buttons
document.getElementById('nav-home').addEventListener('click', () => {
    document.getElementById('rightContent').innerHTML = `
        <p>Please enter a valid search query.</p>
    `;
});

document.getElementById('nav-about').addEventListener('click', () => {
    document.getElementById('rightContent').innerHTML = `
        <div class="centered-content">
            <h1>ABOUT US</h1>
            <p>Welcome to Our Company! We are a team of passionate individuals dedicated to providing excellent services/products to our customers. Our mission is to <b>provide the best experience</b> for people traveling to different destinations around the world. Our values include integrity, innovation, customer satisfaction, and teamwork. We believe in <b>putting our customers first</b> and working together to achieve our goals.</p>
            <h2>Our Team</h2>
            <div class="team">
                <div class="team-member"><b>John Doe</b><br>CEO</div>
                <div class="team-member"><b>Celina Thomas</b><br>Team Lead</div>
                <div class="team-member"><b>Mike Tysen</b><br>Delivery Head</div>
            </div>
        </div>
    `;
});

document.getElementById('nav-contact').addEventListener('click', () => {
    document.getElementById('rightContent').innerHTML = `
        <div class="centered-content">
            <h1>Contact Us</h1>
            <p>Email: contact@travelbloom.com</p>
            <p>Phone: +1 234 567 890</p>
        </div>
    `;
});

// Search functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const rightContent = document.getElementById('rightContent');

    if (query.includes('beach')) {
        rightContent.innerHTML = `
            <div class="destination">
                <img src="./website_images/sydney.jpg" alt="Sydney">
                <h3>Sydney, Australia</h3>
                <p>A beautiful coastal city with a relaxed atmosphere, featuring the Sydney Opera House, Harbour Bridge, and stunning beaches.</p>
            </div>
            <div class="destination">
                <img src="./website_images/city-of-rio-de-janeiro." alt="Rio">
                <h3>Rio de Janeiro, Brazil</h3>
                <p>Famous for its Copacabana and Ipanema beaches, as well as the iconic Christ the Redeemer statue.</p>
            </div>
        `;
    } else {
        rightContent.innerHTML = `<p>Please enter a valid search query.</p>`;
    }
});

// Clear search results
document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('searchInput').value = "";
    document.getElementById('rightContent').innerHTML = `<p>Please enter a valid search query.</p>`;
});
