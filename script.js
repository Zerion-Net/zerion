document.addEventListener('DOMContentLoaded', () => {
    // 1. Terapkan Pengaturan dari config.js
    document.documentElement.style.setProperty('--primary-color', CONFIG.themeColor);
    document.getElementById('site-title').innerText = CONFIG.title;
    document.getElementById('nav-logo').innerText = CONFIG.logoName;

    // 2. Render Navigasi
    const navLinks = document.getElementById('nav-links');
    CONFIG.navigation.forEach(item => {
        navLinks.innerHTML += `<li><a href="${item.link}">${item.name}</a></li>`;
    });

    // 3. Render Hero Section
    document.getElementById('hero-title').innerText = CONFIG.hero.title;
    document.getElementById('hero-desc').innerText = CONFIG.hero.description;
    document.getElementById('hero-cta').innerHTML = `<a href="${CONFIG.hero.buttonLink}" class="btn" target="_blank">${CONFIG.hero.buttonText}</a>`;

    // 4. Render Fitur Server
    const featuresGrid = document.getElementById('features-grid');
    CONFIG.features.forEach(feat => {
        featuresGrid.innerHTML += `
            <div class="card">
                <h3>${feat.title}</h3>
                <p>${feat.description}</p>
            </div>
        `;
    });

    // 5. Render Footer
    document.getElementById('footer-text').innerText = CONFIG.footer;

    // 6. Logika Status Server Bedrock
    document.getElementById('server-ip').innerText = CONFIG.serverInfo.ip;
    document.getElementById('server-port').innerText = CONFIG.serverInfo.port;

    // Gunakan API mcsrvstat khusus Bedrock (endpoint /bedrock/3/)
    const apiUrl = `https://api.mcsrvstat.us/bedrock/3/${CONFIG.serverInfo.ip}:${CONFIG.serverInfo.port}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const stateEl = document.getElementById('server-state');
            const playersEl = document.getElementById('server-players');

            stateEl.classList.remove('checking');

            if (data.online) {
                stateEl.innerText = "ONLINE";
                stateEl.classList.add('online');
                playersEl.innerText = `${data.players.online} / ${data.players.max}`;
            } else {
                stateEl.innerText = "OFFLINE";
                stateEl.classList.add('offline');
                playersEl.innerText = "-";
            }
        })
        .catch(error => {
            console.error("Error fetching server status:", error);
            const stateEl = document.getElementById('server-state');
            stateEl.classList.remove('checking');
            stateEl.innerText = "ERROR";
            stateEl.classList.add('offline');
        });
});
