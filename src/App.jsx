import './App.css'

export default function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        BDC Coin - Bordeoxau Digital Crypto Coin
      </header>

      {/* Konten Tengah */}
      <main className="content">
        <h1>🚀 Selamat Datang di BDC Coin</h1>
        <p>
          Ini adalah halaman contoh dengan React + Vercel.
          Silakan scroll untuk melihat apakah header & footer tetap berada di posisinya.
        </p>
        <div style={{ height: '150vh' }}></div> {/* Tambahan biar bisa scroll */}
      </main>

      {/* Footer */}
      <footer className="footer">
        copyright 2012-2025 BDC Coin Sitemaps
      </footer>
    </div>
  )
}
