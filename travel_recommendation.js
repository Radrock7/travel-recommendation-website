const heroSection = document.getElementById('heroSection');
const heroText = document.getElementById('heroText');


function clearOverlays() {
    const overlay = document.querySelector('.overlay-content');
    if (overlay) overlay.remove();

    const resultsPanel = document.querySelector('.search-results');
    if (resultsPanel) resultsPanel.remove();

    heroText.style.display = 'block';
    document.querySelector('.social-media').style.display = 'flex';
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
        <p>Welcome to Traveltastic, your premier destination for extraordinary travel experiences. Founded in 2025, we are a passionate team of travel enthusiasts dedicated to creating unforgettable journeys that inspire, educate, and transform lives.</p>
        
        <p>Our mission is to connect travelers with authentic experiences across the globe, from pristine beaches to ancient temples, bustling cities to serene countryside. We believe travel is not just about visiting places—it's about discovering yourself and creating memories that last a lifetime.</p>
        
        <h2>Meet Our Team</h2>
        <div class="team-grid">
            <div class="team-member">
                <h3>John Doe</h3>
                <p><strong>CEO & Founder</strong></p>
                <p>With 15+ years in the travel industry, John's vision drives our company's commitment to exceptional service and sustainable tourism.</p>
            </div>
            <div class="team-member">
                <h3>Celina Thomas</h3>
                <p><strong>Team Lead</strong></p>
                <p>Celina ensures seamless coordination across all departments, bringing her expertise in customer experience and operations management.</p>
            </div>
            <div class="team-member">
                <h3>Mike Tysen</h3>
                <p><strong>Delivery Head</strong></p>
                <p>Mike oversees all travel deliveries and partnerships, ensuring every journey exceeds expectations with his attention to detail.</p>
            </div>
        </div>
    `;
    heroSection.appendChild(aboutOverlay);
    heroText.style.display = 'none';
    document.querySelector('.social-media').style.display = 'none';
});

// CONTACT US
document.getElementById('nav-contact').addEventListener('click', () => {
    clearOverlays();
    const contactOverlay = document.createElement('div');
    contactOverlay.className = 'overlay-content';
    contactOverlay.innerHTML = `
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Get in touch with our travel experts to start planning your next adventure.</p>
        
        <div style="display: flex; gap: 2em; margin: 1.5em 0; justify-content: center; flex-wrap: wrap;">
            <div>
                <strong>📧 Email:</strong><br>
                contact@traveltastic.com
            </div>
            <div>
                <strong>📞 Phone:</strong><br>
                +1 (555) 123-4567
            </div>
            <div>
                <strong>📍 Address:</strong><br>
                123 Travel Street<br>
                Adventure City, AC 12345
            </div>
        </div>

        <div class="contact-form">
            <h2>Send us a Message</h2>
            <form id="contactForm">
                <div class="form-group">
                    <label for="name">Full Name *</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message *</label>
                    <textarea id="message" name="message" placeholder="Tell us about your dream destination or ask any questions..." required></textarea>
                </div>
                <button type="submit" class="submit-btn">Send Message</button>
            </form>
        </div>
    `;
    heroSection.appendChild(contactOverlay);
    heroText.style.display = 'none';
    document.querySelector('.social-media').style.display = 'none';

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We\'ll get back to you within 24 hours.');
        this.reset();
    });
});

// Search functionality

document.getElementById('searchBtn').addEventListener('click', performSearch);
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    clearOverlays();
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!query) {
        alert('Please enter a search term');
        return;
    }

    let results = [];
    const resultsPanel = document.createElement('div');
    resultsPanel.className = 'search-results';
    
    function renderResults(items) {
        if (items.length === 0) {
            resultsPanel.innerHTML = `
                <h2>Search Results</h2>
                <p style="color: white;">No matching results found for "${query}". Try searching for:</p>
                <ul style="color: white; margin: 1em 0;">
                <li><strong>Countries:</strong> Australia, Japan, Brazil</li>
                <li><strong>Beaches:</strong> beach, beaches</li>
                <li><strong>Temples:</strong> temple, temples</li>
                <li><strong>Cities:</strong> Sydney, Tokyo, Rio de Janeiro</li>
                </ul>
            `;
        } else {
            resultsPanel.innerHTML = `<h2>Search Results (${items.length})</h2>`;
            items.forEach(item => {
                resultsPanel.innerHTML += `
                    <div class="destination">
                        <img src="${item.imageUrl}" alt="${item.name}">
                        <div class="destination-content">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                        </div>
                    </div>
                `;
            });
        }
        
        heroSection.appendChild(resultsPanel);
    }
    
    const normalizedQuery = query.toLowerCase();
    
    const beachKeywords = ['beach', 'beaches', 'shore', 'coast', 'seaside'];
    const templeKeywords = ['temple', 'temples', 'shrine', 'monastery', 'pagoda'];

    const isBeachSearch = beachKeywords.some(keyword => normalizedQuery.includes(keyword));
    const isTempleSearch = templeKeywords.some(keyword => normalizedQuery.includes(keyword));

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            if (isBeachSearch) {
                results = data.beaches;
            } else if (isTempleSearch) {
                results = data.temples;
            } else {
                // Check if query matches a country name and return its cities
                let countryMatch = false;
                data.countries.forEach(country => {
                    if (country.name.toLowerCase().includes(normalizedQuery)) {
                        results = results.concat(country.cities);
                        countryMatch = true;
                    }
                });
            }
    renderResults(results);
    heroText.style.display = 'none';
    document.querySelector('.social-media').style.display = 'none';
});
    

}

// Clear
document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    clearOverlays();
});

document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        this.style.transform = 'translateY(-5px) scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'translateY(-5px)';
        }, 200);
    });
});

document.querySelector('.book-btn').addEventListener('click', function() {
    alert('Booking functionality would be implemented here! Contact us to start planning your trip.');
});