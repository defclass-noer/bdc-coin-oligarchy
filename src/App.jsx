import './App.css'
import MatrixRain from './MatrixRain'

export default function App() {
  return (
    <div className="app-container">
      {/* Background Matrix */}
      <MatrixRain />

      {/* Header */}
      <header className="header">
        BDC Coin - Bordeoxau Digital Crypto Coin
      </header>

      {/* Konten */}
      <main className="content">
        <h1>🚀 Selamat Datang di BDC Coin</h1>
        <p>
          Efek Matrix Rain berjalan di background.  
          Konten tetap jelas karena efeknya transparan.
        </p>
        <div style={{ height: '150vh' }}></div>
      </main>

      {/* Footer */}
      <footer className="footer">
        copyright 2012-2025 BDC Coin Sitemaps
      </footer>
    </div>
  )
}
