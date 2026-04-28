// Fungsi utama untuk merender semua data
function renderWebsite() {
    try {
        // 1. Terapkan Tema Warna
        document.documentElement.style.setProperty('--primary-color', CONFIG.themeColor);
        
        // 2. Isi Teks Dasar
        document.title = CONFIG.title;
        if(document.getElementById('site-title')) document.getElementById('site-title').innerText = CONFIG.title;
        if(document.getElementById('nav-logo')) document.getElementById('nav-logo').innerText = CONFIG.logoName;
        if(document.getElementById('footer-text')) document.getElementById('footer-text').innerText = CONFIG.footer;

        // 3. Render Hero
        if(document.getElementById('hero-title')) document.getElementById('hero-title').innerText = CONFIG.hero.title;
        if(document.getElementById('hero-desc')) document.getElementById('hero-desc').innerText = CONFIG.hero.description;
        if(document.getElementById('hero-cta')) {
            document.getElementById('hero-cta').innerHTML = `<a href="${CONFIG.hero.buttonLink}" class="btn" target="_blank">${CONFIG.hero.buttonText}</a>`;
        }

        // 4. Render Fitur (Looping)
        const featuresGrid = document.getElementById('features-grid');
        if(featuresGrid) {
            featuresGrid.innerHTML = ''; // Bersihkan dulu
            CONFIG.features.forEach(feat => {
                featuresGrid.innerHTML += `
                    <div class="card">
                        <h3>${feat.title}</h3>
                        <p>${feat.description}</p>
                    </div>
                `;
            });
        }

        // 5. LOGIKA STATUS SERVER (Inti Masalah)
        const ipEl = document.getElementById('server-ip');
        const portEl = document.getElementById('server-port');
        const stateEl = document.getElementById('server-state');
        const playersEl = document.getElementById('server-players');

        if (ipEl && portEl) {
            ipEl.innerText = CONFIG.serverInfo.ip;
            portEl.innerText = CONFIG.serverInfo.port;

            // Ambil data dari API
            fetch(`https://api.mcsrvstat.us/bedrock/3/${CONFIG.serverInfo.ip}:${CONFIG.serverInfo.port}`)
                .then(res => res.json())
                .then(data => {
                    stateEl.classList.remove('checking');
                    if (data.online) {
                        stateEl.innerText = "ONLINE";
                        stateEl.className = "badge online"; // Timpa class agar warna berubah
                        playersEl.innerText = `${data.players.online} / ${data.players.max}`;
                    } else {
                        stateEl.innerText = "OFFLINE";
                        stateEl.className = "badge offline";
                        playersEl.innerText = "0 / 0";
                    }
                })
                .catch(() => {
                    stateEl.innerText = "ERROR";
                    stateEl.className = "badge offline";
                });
        }
    } catch (err) {
        console.error("Konfigurasi belum siap:", err);
    }
}

// Jalankan saat halaman siap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderWebsite);
} else {
    renderWebsite();
                }
