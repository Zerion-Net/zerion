const CONFIG = {
    title: "Zerion Network",
    logoName: "ZERION",
    themeColor: "#3b82f6", // Berubah ke Biru Premium (Bisa diganti hex warnanya)
    
    serverInfo: {
        ip: "play.zerion.net", // Wajib ganti dengan IP server Anda
        port: 19132
    },

    navigation: [
        { name: "Beranda", link: "#" },
        { name: "Store", link: "#store" },
        { name: "Discord", link: "https://discord.gg/invite" }
    ],

    hero: {
        title: "Petualangan Pokémon di Zerion",
        description: "Server Bedrock 1.26.3 terbaik dengan mekanik kustom. Tangkap, latih, dan jadilah yang terkuat di server kami!",
        buttonText: "Beli Item",
        buttonLink: "#store"
    },

    // KONTAK PEMBELIAN (Arahkan ke link WhatsApp atau Discord Ticket)
    buyLink: "https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20membeli%20item%20di%20Zerion%20Store:",

    // DATA WEB STORE
    store: [
        {
            title: "Pokémon P2W (Ultra Rare+)",
            desc: "Dapatkan Pokémon tier tertinggi untuk mendominasi pertarungan!",
            icon: "🌟", // Bisa pakai emoji atau link gambar
            prices: [
                { label: "Pilih Sendiri", price: "35.000" },
                { label: "Random", price: "30.000" }
            ]
        },
        {
            title: "Pokémon P2W (Ultra Rare-)",
            desc: "Pilihan tepat untuk memperkuat tim dengan harga terjangkau.",
            icon: "✨",
            prices: [
                { label: "Pilih Sendiri", price: "25.000" },
                { label: "Random", price: "20.000" }
            ]
        },
        {
            title: "Paket Pokéball",
            desc: "Isi 32x Pokéball (Bebas pilih jenis, kecuali Masterball).",
            icon: "🔴",
            prices: [
                { label: "Harga", price: "8.000" }
            ]
        },
        {
            title: "Paket Masterball",
            desc: "Isi 12x Masterball. Tangkapan 100% sukses tanpa gagal!",
            icon: "🟣",
            prices: [
                { label: "Harga", price: "15.000" }
            ]
        },
        {
            title: "Mega Stone",
            desc: "Evolusikan Pokémon favoritmu melampaui batas. Bebas pilih jenis batu.",
            icon: "💎",
            prices: [
                { label: "1x Mega Stone", price: "5.000" }
            ]
        }
    ],

    footer: "© 2026 Zerion Network. All rights reserved."
};
