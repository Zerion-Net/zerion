document.addEventListener('DOMContentLoaded', () => {
    // Set Theme Color
    document.documentElement.style.setProperty('--primary-color', CONFIG.themeColor);
    
    // Set Title & Logo
    document.getElementById('site-title').innerText = CONFIG.title;
    document.getElementById('nav-logo').innerText = CONFIG.logoName;

    // Render Navigation
    const navLinks = document.getElementById('nav-links');
    CONFIG.navigation.forEach(item => {
        navLinks.innerHTML += `<li><a href="${item.link}">${item.name}</a></li>`;
    });

    // Render Hero
    document.getElementById('hero-title').innerText = CONFIG.hero.title;
    document.getElementById('hero-desc').innerText = CONFIG.hero.description;
    document.getElementById('hero-cta').innerHTML = `<a href="${CONFIG.hero.buttonLink}" class="btn">${CONFIG.hero.buttonText}</a>`;

    // Render Features
    const featuresGrid = document.getElementById('features-grid');
    CONFIG.features.forEach(feat => {
        featuresGrid.innerHTML += `
            <div class="card">
                <h3>${feat.title}</h3>
                <p>${feat.description}</p>
            </div>
        `;
    });

    // Render Footer
    document.getElementById('footer-text').innerText = CONFIG.footer;
});