import React, { useRef, useState, useEffect } from 'react';
import './App.css';

// Assets
import logo from './assets/logo.png';
import food1 from './assets/food1.jpg';
import food2 from './assets/food2.jpg';
import food3 from './assets/food3.jpg';
import food4 from './assets/food4.jpg';
import food5 from './assets/food5.jpg';
import paketA from './assets/paket-a.jpg';
import paketB from './assets/paket-b.jpg';
import paketC from './assets/paket-c.jpg';
import paketD from './assets/paket-d.jpg';
import paketE from './assets/paket-e.jpg';
import paketF from './assets/paket-f.jpg';
import docPhoto1 from './assets/doc-photo1.jpg';
import docPhoto2 from './assets/doc-photo2.jpg';
import docPhoto3 from './assets/doc-photo3.jpg';
import docPhoto4 from './assets/doc-photo4.jpg';
import docPhoto5 from './assets/doc-photo5.jpg';
import docPhoto6 from './assets/doc-photo6.jpg';
import docPhoto7 from './assets/doc-photo7.jpg';
import docPhoto8 from './assets/doc-photo8.jpg';
import docPhoto9 from './assets/doc-photo9.jpg';
import arinTika from './assets/arin.png';
import masGalih from './assets/galih.png';
import ardhan from './assets/ardhan.png';
import muiHalal from './assets/mui-halal.png';
import kitchenTool3 from './assets/kitchen-tool3.jpg';
import kitchenTool4 from './assets/kitchen-tool4.jpg';

const App = () => {
  const tentangRef = useRef(null);
  const produkRef = useRef(null);
  const galeriRef = useRef(null);
  const layananRef = useRef(null);
  const dapurRef = useRef(null);
  const organisasiRef = useRef(null);
  const pesanRef = useRef(null);

  const [menuTerbuka, setMenuTerbuka] = useState(false);
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentDapurImage, setCurrentDapurImage] = useState(0);
  const [visibleGalleryItems, setVisibleGalleryItems] = useState(6);
  const [activeSection, setActiveSection] = useState('');

  const heroBackgrounds = [food1, food2, food3, food4, food5];

  const scrollKeBagian = (ref, sectionName) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionName);
    setMenuTerbuka(false);
  };

  const toggleMenu = () => {
    setMenuTerbuka(!menuTerbuka);
  };

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  const dapurKami = [
    { nama: 'Peralatan Dapur 3', gambar: kitchenTool3 },
    { nama: 'Peralatan Dapur 4', gambar: kitchenTool4 },
  ];

  useEffect(() => {
    const dapurInterval = setInterval(() => {
      setCurrentDapurImage((prev) => (prev + 1) % dapurKami.length);
    }, 3000);

    return () => clearInterval(dapurInterval);
  }, [dapurKami.length]);

  const layananKami = [
    { emoji: '🏥', judul: 'Catering Rumah Sakit', deskripsi: 'Catering sehat untuk rumah sakit.' },
    { emoji: '🏢', judul: 'Catering Perusahaan / Event', deskripsi: 'Catering untuk acara perusahaan dan seminar.' },
    { emoji: '🍽️', judul: 'Catering Harian', deskripsi: 'Catering harian untuk rumah dan kantor.' },
    { emoji: '💍', judul: 'Catering Pernikahan', deskripsi: 'Catering elegan untuk pernikahan.' },
  ];

  const daftarMenu = [
    {
      jenis: 'Box',
      packages: [
        { nama: 'Paket A', harga: 'Rp 25.000/pack', minPack: '50 packs', isi: 'Nasi Putih, Ayam Goreng, Sayur Capcay, Kerupuk', gambar: paketA },
        { nama: 'Paket B', harga: 'Rp 30.000/pack', minPack: '50 packs', isi: 'Nasi Putih, Ayam Bakar, Urap, Kerupuk', gambar: paketB },
        { nama: 'Paket E', harga: 'Rp 35.000/pack', minPack: '50 packs', isi: 'Nasi Putih, Ikan Bakar, Tumis Kangkung, Kerupuk', gambar: paketE },
      ],
    },
    {
      jenis: 'Prasmanan',
      packages: [
        { nama: 'Paket C', harga: 'Rp 50.000/pack', minPack: '100 packs', isi: 'Nasi Putih, Sup Ayam, Rendang, Sambal, Es Teh', gambar: paketC },
        { nama: 'Paket D', harga: 'Rp 60.000/pack', minPack: '100 packs', isi: 'Nasi Goreng, Sate Ayam, Acar, Es Jeruk', gambar: paketD },
        { nama: 'Paket F', harga: 'Rp 70.000/pack', minPack: '100 packs', isi: 'Nasi Kuning, Ayam Panggang, Sayur Asem, Es Kelapa', gambar: paketF },
      ],
    },
  ];

  const galeriDokumentasi = [
    { gambar: docPhoto1, caption: 'Acara Perusahaan 2024' },
    { gambar: docPhoto2, caption: 'Pernikahan Adat Jawa' },
    { gambar: docPhoto3, caption: 'Catering Harian Kantor' },
    { gambar: docPhoto4, caption: 'Seminar Kesehatan 2023' },
    { gambar: docPhoto5, caption: 'Pernikahan Modern' },
    { gambar: docPhoto6, caption: 'Acara Komunitas' },
    { gambar: docPhoto7, caption: 'Catering Rumah Sakit' },
    { gambar: docPhoto8, caption: 'Pesta Ulang Tahun' },
    { gambar: docPhoto9, caption: 'Acara Amal 2024' },
  ];

  const strukturOrganisasi = [
    { nama: 'Arin Tika', jabatan: 'Manajer Operasional', foto: arinTika },
    { nama: 'Mas Galih', jabatan: 'Kepala Dapur', foto: masGalih },
    { nama: 'Ardhan', jabatan: 'Direktur Utama', foto: ardhan },
  ];

  const filteredMenu = daftarMenu.filter((kategori) => filter === 'all' || kategori.jenis === filter);

  const loadMoreGalleryItems = () => {
    setVisibleGalleryItems((prev) => prev + 3);
  };

  const menuItems = [
    { label: 'Tentang', ref: tentangRef, sectionName: 'tentang' },
    { label: 'Layanan', ref: layananRef, sectionName: 'layanan' },
    { label: 'Menu', ref: produkRef, sectionName: 'produk' },
    { label: 'Galeri', ref: galeriRef, sectionName: 'galeri' },
    { label: 'Dapur Kami', ref: dapurRef, sectionName: 'dapur' },
    { label: 'Tim', ref: organisasiRef, sectionName: 'organisasi' },
  ];

  const leftMenuItems = menuItems.slice(0, Math.ceil(menuItems.length / 2));
  const rightMenuItems = menuItems.slice(Math.ceil(menuItems.length / 2));

  return (
    <div className="App">
      <header className="header">
        <nav className="nav-menu">
          <ul className={`nav-links nav-links-left ${menuTerbuka ? 'active' : ''}`}>
            {leftMenuItems.map((item, index) => (
              <li
                key={index}
                className={activeSection === item.sectionName ? 'active' : ''}
                onClick={() => scrollKeBagian(item.ref, item.sectionName)}
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className="nav-logo">
            <img src={logo} alt="CV Paramitha Wijaya Sejahtera" className="logo" />
            <div className="logo-decor"></div>
          </div>

          <ul className={`nav-links nav-links-right ${menuTerbuka ? 'active' : ''}`}>
            {rightMenuItems.map((item, index) => (
              <li
                key={index}
                className={activeSection === item.sectionName ? 'active' : ''}
                onClick={() => scrollKeBagian(item.ref, item.sectionName)}
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className="mobile-hamburger" onClick={toggleMenu}>
            <i className={menuTerbuka ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </nav>
      </header>

      {/* Section Hero */}
      <section className="hero">
        <div className="hero-background">
          {heroBackgrounds.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hero Food ${index + 1}`}
              className={`hero-image hero-image-${index + 1}`}
            />
          ))}
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Catering Lezat untuk Setiap Acara</h1>
          <p className="hero-description">
            Makanan segar, sehat, dan halal yang dibuat dengan cinta.<br />
            Ayo pesan sekarang untuk acara Anda!
          </p>
          <div className="hero-buttons">
            
            <a
              href="https://wa.me/6282237299901"
              className="cta-button primary floating"
              aria-label="Hubungi kami via WhatsApp"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
        <div className="hero-decor">
          <span className="decor-icon">🍴</span>
          <span className="decor-icon">🥗</span>
          <span className="decor-icon">🍗</span>
        </div>
      </section>

      {/* Section Tentang Kami */}
      <section ref={tentangRef} className="section tentang">
        <h2>Tentang Kami</h2>
        <div className="tentang-content">
          <div className="tentang-text fade-in-left">
            <p className="tentang-tagline">Segar, Bergizi, Sehat, Lezat</p>
            <p className="tentang-description">
              CV Paramitha Wijaya Sejahtera berdiri sejak 2015, berkomitmen menyediakan layanan catering halal, higienis, dan bergizi dengan bahan-bahan segar berkualitas tinggi. Kami melayani berbagai acara dengan cinta dan dedikasi untuk kepuasan pelanggan, memastikan setiap hidangan dibuat dengan standar tertinggi.
            </p>
            <div className="tentang-accent-line"></div>
          </div>
          <div className="tentang-images fade-in-right">
            <div className="tentang-image-container image-1">
              <img src={food2} alt="Makanan 2" className="tentang-image" />
            </div>
            <div className="tentang-image-container image-2">
              <img src={food3} alt="Makanan 3" className="tentang-image" />
            </div>
            <div className="tentang-image-container image-3">
              <img src={food4} alt="Makanan 4" className="tentang-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Layanan */}
      <section ref={layananRef} className="section layanan fade-in">
        <h2>Layanan Kami</h2>
        <div className="layanan-grid">
          {layananKami.map((layanan, index) => (
            <div key={index} className="layanan-card">
              <span className="layanan-emoji">{layanan.emoji}</span>
              <h3>{layanan.judul}</h3>
              <p>{layanan.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Menu */}
      <section ref={produkRef} className="section produk fade-in">
        <h2>Menu Kami</h2>
        <div className="menu-filters">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
            Semua
          </button>
          <button onClick={() => setFilter('Box')} className={filter === 'Box' ? 'active' : ''}>
            Box
          </button>
          <button
            onClick={() => setFilter('Prasmanan')}
            className={filter === 'Prasmanan' ? 'active' : ''}
          >
            Prasmanan
          </button>
        </div>
        {filteredMenu.map((kategori, index) => (
          <div key={index}>
            <h3>{kategori.jenis}</h3>
            <div className="menu-grid">
              {kategori.packages.map((paket, idx) => (
                <div key={idx} className="menu-card">
                  <div className="menu-image-container">
                    <img src={paket.gambar} alt={paket.nama} className="menu-image floating" />
                  </div>
                  <div className="menu-details">
                    <h4>{paket.nama}</h4>
                    <p className="menu-price">{paket.harga}</p>
                    <p className="menu-min-pack">{paket.minPack}</p>
                    <p className="menu-items">{paket.isi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Section Galeri */}
      <section ref={galeriRef} className="section galeri fade-in">
        <h2>Galeri</h2>
        <div className="galeri-grid">
          {galeriDokumentasi.slice(0, visibleGalleryItems).map((item, index) => (
            <div
              key={index}
              className="galeri-item"
              onClick={() => openLightbox(item.gambar)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="galeri-image-container">
                <img
                  src={item.gambar}
                  alt={`Dokumentasi ${index + 1}`}
                  className="galeri-image floating"
                  loading="lazy"
                />
                <div className="galeri-overlay">
                  <i className="fas fa-search-plus galeri-zoom-icon"></i>
                </div>
              </div>
              <p className="galeri-caption">{`Dokumentasi ${index + 1}: ${item.caption}`}</p>
            </div>
          ))}
        </div>
        {visibleGalleryItems < galeriDokumentasi.length && (
          <div className="galeri-load-more">
            <button onClick={loadMoreGalleryItems} className="load-more-button">
              Lihat Lebih Banyak
            </button>
          </div>
        )}
        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <img src={selectedImage} alt="Terpilih" className="lightbox-image" />
          </div>
        )}
      </section>

      {/* Section Dapur */}
      <section ref={dapurRef} className="section dapur fade-in">
        <h2 className="dapur-title">
          Dapur Kami
          <span className="dapur-icon-left">🍳</span>
          <span className="dapur-icon-right">🥄</span>
        </h2>
        <div className="dapur-content">
          <div className="dapur-info-container fade-in-left">
            <p className="dapur-info">
              Dapur catering kami menggunakan peralatan sesuai prosedur dan standar SNI, serta memastikan semua alat selalu steril dan terjaga kebersihannya.
            </p>
            <div className="dapur-accent-line"></div>
          </div>
          <div className="dapur-slideshow fade-in-right">
            <div className="dapur-image-container">
              <img
                src={dapurKami[currentDapurImage].gambar}
                alt={dapurKami[currentDapurImage].nama}
                className="dapur-image fade-in-image"
              />
              <p>{dapurKami[currentDapurImage].nama}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Tim */}
      <section ref={organisasiRef} className="section organisasi fade-in">
        <h2>Tim Kami</h2>
        <div className="organisasi-grid">
          {strukturOrganisasi.map((anggota, index) => (
            <div key={index} className="organisasi-item">
              <img src={anggota.foto} alt={anggota.nama} className="organisasi-image floating" />
              <h4>{anggota.nama}</h4>
              <p>{anggota.jabatan}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Pesan */}
      <section ref={pesanRef} className="section pesan fade-in">
        <h2>Pesan Sekarang</h2>
        <div className="pesan-content">
          <a href="https://wa.me/6282237299901" className="pesan-button">
            <i className="fab fa-whatsapp pesan-icon"></i>
            Pesan via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p>CV Paramitha Wijaya Sejahtera</p>
            <p>Klaten, Jawa Tengah</p>
            <a
              href="https://maps.app.goo.gl/Ew6ZFoKfei575xgKA"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-location"
            >
              Lihat Lokasi Kami
            </a>
          </div>
          <div className="footer-section">
            <h4>Hubungi Kami</h4>
            <p>Email: ikhsanrekt@gmail.com</p>
            <p>Telepon: +62 822-3729-9901</p>
            <div className="footer-social">
              <a href="https://facebook.com" className="floating">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" className="floating">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/6282237299901" className="floating">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Sertifikasi</h4>
            <img src={muiHalal} alt="MUI Halal" className="mui-halal-logo" />
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 CV Paramitha Wijaya Sejahtera. Hak cipta dilindungi.</p>
        </div>
      </footer>

      <a
        href="https://wa.me/6282237299901"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-cta floating"
        aria-label="Hubungi kami di WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default App;