document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Tema & Teks Utama
    document.documentElement.style.setProperty('--primary-color', CONFIG.themeColor);
    document.title = CONFIG.title;
    document.getElementById('nav-logo').innerText = CONFIG.logoName;
    
    // 2. Navigasi
    const navLinks = document.getElementById('nav-links');
    CONFIG.navigation.forEach(item => {
        navLinks.innerHTML += `<li><a href="${item.link}">${item.name}</a></li>`;
    });

    // 3. Hero
    document.getElementById('hero-title').innerText = CONFIG.hero.title;
    document.getElementById('hero-desc').innerText = CONFIG.hero.description;
    document.getElementById('hero-cta').innerHTML = `<a href="${CONFIG.hero.buttonLink}" class="btn">${CONFIG.hero.buttonText}</a>`;
    document.getElementById('footer-text').innerText = CONFIG.footer;

    // 4. Render Web Store
    const storeGrid = document.getElementById('store-grid');
    CONFIG.store.forEach(item => {
        // Buat list harga
        let priceHTML = '';
        item.prices.forEach(p => {
            priceHTML += `
                <div class="price-row">
                    <span>${p.label}</span>
                    <span class="price-val">Rp ${p.price}</span>
                </div>
            `;
        });

        // Pesan WA otomatis
        const buyMessage = encodeURIComponent(`Halo Admin, saya ingin order:\n🛒 *${item.title}*`);
        
        storeGrid.innerHTML += `
            <div class="store-card">
                <div class="store-icon">${item.icon}</div>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <div class="price-box">
                    ${priceHTML}
                </div>
                <a href="${CONFIG.buyLink}%0A${buyMessage}" target="_blank" class="btn buy-btn">Beli Sekarang</a>
            </div>
        `;
    });

    // 5. SERVER STATUS (PASTI JALAN)
    const ip = CONFIG.serverInfo.ip;
    const port = CONFIG.serverInfo.port;
    
    document.getElementById('server-ip').innerText = ip;
    document.getElementById('server-port').innerText = port;

    fetch(`https://api.mcsrvstat.us/bedrock/3/${ip}:${port}`)
        .then(res => res.json())
        .then(data => {
            const stateEl = document.getElementById('server-state');
            const playersEl = document.getElementById('server-players');
            
            stateEl.classList.remove('checking');
            
            if (data.online) {
                stateEl.innerText = "ONLINE";
                stateEl.className = "badge online";
                playersEl.innerText = `${data.players.online} / ${data.players.max}`;
            } else {
                stateEl.innerText = "OFFLINE";
                stateEl.className = "badge offline";
                playersEl.innerText = "0 / 0";
            }
        })
        .catch(() => {
            const stateEl = document.getElementById('server-state');
            stateEl.innerText = "ERROR";
            stateEl.className = "badge offline";
        });
});
