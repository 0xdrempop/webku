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
import DeniWarastuti from './assets/Deni Warastuti, S.I.P.,M.Sy.jpg';
import ardhan from './assets/ardhan.png';
import muiHalal from './assets/mui-halal.png';
import kitchenTool3 from './assets/kitchen-tool3.jpg';
import kitchenTool4 from './assets/kitchen-tool4.jpg';

const App = () => {
  // Refs untuk section
  const tentangRef = useRef(null);
  const produkRef = useRef(null);
  const galeriRef = useRef(null);
  const layananRef = useRef(null);
  const dapurRef = useRef(null);
  const organisasiRef = useRef(null);
  const pesanRef = useRef(null);

  // State management
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [currentModalImage, setCurrentModalImage] = useState(0);
  const [menuTerbuka, setMenuTerbuka] = useState(false);
  const [menuFilter, setMenuFilter] = useState('all');
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [currentDapurImage, setCurrentDapurImage] = useState(0);
  const [visibleGalleryItems, setVisibleGalleryItems] = useState(6);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Data
  const heroBackgrounds = [food1, food2, food3, food4, food5];
  const dapurKami = [
    { nama: 'Peralatan Dapur 3', gambar: kitchenTool3 },
    { nama: 'Peralatan Dapur 4', gambar: kitchenTool4 },
  ];

  // Services data
  const layananKami = [
    { emoji: '🏢', judul: 'Catering Perusahaan / Event', deskripsi: 'Catering untuk acara perusahaan dan seminar.' },
    { emoji: '🍽️', judul: 'Catering Harian', deskripsi: 'Catering harian untuk rumah dan kantor.' },
    { emoji: '💍', judul: 'Catering Pernikahan', deskripsi: 'Catering elegan untuk pernikahan.' },
  ];

  // Certification data
  const sertifikasiDanStandar = [
    { emoji: '📜', judul: 'Sertifikasi', deskripsi: 'Kami memiliki sertifikasi halal MUI dan mematuhi standar keamanan pangan nasional.' },
    { emoji: '🧼', judul: 'Sanitasi', deskripsi: 'Sanitasi rutin dilakukan dengan bahan pembersih berstandar untuk menjaga kebersihan.' },
    { emoji: '🧹', judul: 'Higienitas', deskripsi: 'Semua proses pengolahan makanan dilakukan dengan prosedur higienis ketat.' },
    { emoji: '🧊', judul: 'Penyimpanan', deskripsi: 'Bahan makanan disimpan pada suhu dan kondisi optimal untuk menjaga kesegaran.' },
    { emoji: '⚙️', judul: 'Operasional', deskripsi: 'Operasional dapur mematuhi SOP ketat untuk kualitas dan keamanan.' },
  ];

  // Menu data
  const daftarMenu = [
    {
      jenis: 'Box',
      packages: [
        {
          nama: 'Paket A',
          harga: 'Rp 25.000/pack',
          minPack: '50 packs',
          isi: 'Nasi Putih, Ayam Goreng, Sayur Capcay, Kerupuk',
          gambar: [
            { src: paketA, alt: 'Tampilan Paket A' },
            { src: food1, alt: 'Detail Makanan Paket A' },
            { src: food2, alt: 'Kemasan Paket A' },
          ],
        },
        {
          nama: 'Paket B',
          harga: 'Rp 30.000/pack',
          minPack: '50 packs',
          isi: 'Nasi Putih, Ayam Bakar, Urap, Kerupuk',
          gambar: [
            { src: paketB, alt: 'Tampilan Paket B' },
            { src: food3, alt: 'Detail Makanan Paket B' },
            { src: food4, alt: 'Kemasan Paket B' },
          ],
        },
        {
          nama: 'Paket E',
          harga: 'Rp 35.000/pack',
          minPack: '50 packs',
          isi: 'Nasi Putih, Ikan Bakar, Tumis Kangkung, Kerupuk',
          gambar: [
            { src: paketE, alt: 'Tampilan Paket E' },
            { src: food5, alt: 'Detail Makanan Paket E' },
            { src: food1, alt: 'Kemasan Paket E' },
          ],
        },
      ],
    },
    {
      jenis: 'Prasmanan',
      packages: [
        {
          nama: 'Paket C',
          harga: 'Rp 50.000/pack',
          minPack: '100 packs',
          isi: 'Nasi Putih, Sup Ayam, Rendang, Sambal, Es Teh',
          gambar: [
            { src: paketC, alt: 'Tampilan Paket C' },
            { src: food2, alt: 'Detail Makanan Paket C' },
            { src: food3, alt: 'Kemasan Paket C' },
          ],
        },
        {
          nama: 'Paket D',
          harga: 'Rp 60.000/pack',
          minPack: '100 packs',
          isi: 'Nasi Goreng, Sate Ayam, Acar, Es Jeruk',
          gambar: [
            { src: paketD, alt: 'Tampilan Paket D' },
            { src: food4, alt: 'Detail Makanan Paket D' },
            { src: food5, alt: 'Kemasan Paket D' },
          ],
        },
        {
          nama: 'Paket F',
          harga: 'Rp 70.000/pack',
          minPack: '100 packs',
          isi: 'Nasi Kuning, Ayam Panggang, Sayur Asem, Es Kelapa',
          gambar: [
            { src: paketF, alt: 'Tampilan Paket F' },
            { src: food1, alt: 'Detail Makanan Paket F' },
            { src: food2, alt: 'Kemasan Paket F' },
          ],
        },
      ],
    },
  ];

  // Gallery data
  const galeriDokumentasi = [
    { gambar: docPhoto1, caption: 'Acara Perusahaan 2024', category: 'corporate', date: '2024-03-15', location: 'Klaten' },
    { gambar: docPhoto2, caption: 'Pernikahan Adat Jawa', category: 'wedding', date: '2024-06-20', location: 'Yogyakarta' },
    { gambar: docPhoto3, caption: 'Catering Harian Kantor', category: 'corporate', date: '2024-01-10', location: 'Klaten' },
    { gambar: docPhoto4, caption: 'Seminar Kesehatan 2023', category: 'corporate', date: '2023-11-05', location: 'Solo' },
    { gambar: docPhoto5, caption: 'Pernikahan Modern', category: 'wedding', date: '2024-08-12', location: 'Klaten' },
    { gambar: docPhoto6, caption: 'Acara Komunitas', category: 'family', date: '2024-04-18', location: 'Klaten' },
    { gambar: docPhoto7, caption: 'Catering Rumah Sakit', category: 'corporate', date: '2024-02-25', location: 'Klaten' },
    { gambar: docPhoto8, caption: 'Pesta Ulang Tahun', category: 'family', date: '2024-07-30', location: 'Yogyakarta' },
    { gambar: docPhoto9, caption: 'Acara Amal 2024', category: 'family', date: '2024-05-22', location: 'Klaten' },
  ];

  // Team data
  const strukturOrganisasi = [
    { nama: 'Arin Tika', jabatan: 'Manajer Operasional', foto: arinTika },
    { nama: 'Ardhan', jabatan: 'Direktur Utama', foto: ardhan },
    { nama: 'Deni Warastuti, S.I.P., M.Sy.', jabatan: 'Direktur Utama', foto: DeniWarastuti },
  ];

  // Navigation items
  const menuItems = [
    { label: 'Tentang', ref: tentangRef, sectionName: 'tentang' },
    { label: 'Layanan', ref: layananRef, sectionName: 'layanan' },
    { label: 'Menu', ref: produkRef, sectionName: 'produk' },
    { label: 'Galeri', ref: galeriRef, sectionName: 'galeri' },
    { label: 'Dapur Kami', ref: dapurRef, sectionName: 'dapur' },
    { label: 'Tim', ref: organisasiRef, sectionName: 'organisasi' },
  ];

  // Filtered menu based on selected filter
  const filteredMenu = daftarMenu.filter((kategori) =>
    menuFilter === 'all' ? true : kategori.jenis === menuFilter
  );

  // Filtered gallery based on selected filter
  const filteredGallery = galeriDokumentasi.filter((item) =>
    galleryFilter === 'all' ? true : item.category === galleryFilter
  ).slice(0, visibleGalleryItems);

  // Scroll ke section
  const scrollKeBagian = (ref, sectionName) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionName);
    setMenuTerbuka(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuTerbuka(!menuTerbuka);
  };

  // Image lightbox functions
  const openLightbox = (item) => setSelectedGalleryItem(item);
  const closeLightbox = () => setSelectedGalleryItem(null);

  // Modal image navigation
  const nextModalImage = () => {
    setCurrentModalImage((prev) =>
      prev + 1 < selectedPackage.gambar.length ? prev + 1 : 0
    );
  };

  const prevModalImage = () => {
    setCurrentModalImage((prev) =>
      prev - 1 >= 0 ? prev - 1 : selectedPackage.gambar.length - 1
    );
  };

  // Load more gallery items
  const loadMoreGalleryItems = () => {
    setVisibleGalleryItems((prev) => prev + 3);
  };

  // Auto-rotate kitchen images
  useEffect(() => {
    const dapurInterval = setInterval(() => {
      setCurrentDapurImage((prev) => (prev + 1) % dapurKami.length);
    }, 3000);
    return () => clearInterval(dapurInterval);
  }, [dapurKami.length]);

  // Handle scroll untuk efek header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize AOS
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
      });
    }
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header className={`premium-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="brand-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="Paramitha Catering" className="brand-logo" />
            <div className="brand-text">
              <h1 className="brand-name">Paramitha</h1>
              <p className="brand-tagline">Gourmet Catering</p>
            </div>
          </div>

          <nav className="main-navigation">
            <ul className="nav-menu">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${activeSection === item.sectionName ? 'active' : ''}`}
                  onClick={() => scrollKeBagian(item.ref, item.sectionName)}
                >
                  <span className="nav-link">
                    {item.label}
                    <span className="underline"></span>
                  </span>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <a href="https://wa.me/6282237299901" className="reservation-button">
              <i className="fas fa-calendar-alt"></i>
              <span>Reservasi</span>
            </a>
            <div className="mobile-toggle" onClick={toggleMenu}>
              <div className={`hamburger ${menuTerbuka ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className={`mobile-navigation ${menuTerbuka ? 'open' : ''}`}>
          <div className="mobile-nav-container">
            <ul className="mobile-nav-menu">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`mobile-nav-item ${activeSection === item.sectionName ? 'active' : ''}`}
                  onClick={() => {
                    scrollKeBagian(item.ref, item.sectionName);
                    setMenuTerbuka(false);
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/6282237299901" className="mobile-reservation-button">
              <i className="fab fa-whatsapp"></i> WhatsApp Reservation
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          {heroBackgrounds.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hero Food ${index + 1}`}
              className={`hero-image hero-image-${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Catering Lezat untuk Setiap Acara</h1>
          <div className="hero-buttons">
            <a
              href="https://wa.me/6282237299901"
              className="cta-button primary floating"
              aria-label="Hubungi kami via WhatsApp"
            >
              <i className="fab fa-whatsapp"></i> Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={tentangRef} className="tentang">
        <div className="tentang-container">
          <div className="tentang-content">
            <div className="tentang-header">
              <p className="section-subtitle">Tentang Kami</p>
              <h2>CV Paramitha Wijaya Sejahtera</h2>
            </div>
            <div className="tentang-description">
              <p>
                Berdiri sejak 2025, kami berkomitmen menyediakan layanan catering halal,
                higienis, dan bergizi dengan bahan-bahan segar berkualitas tinggi.
              </p>
              <p>
                Dengan pengalaman bertahun-tahun dalam industri catering, kami menghadirkan
                cita rasa autentik yang memukau untuk setiap acara spesial Anda.
              </p>
            </div>
            <div className="tentang-highlights">
              {[
                { icon: 'leaf', title: 'Bahan Organik', desc: 'Menggunakan bahan-bahan segar pilihan terbaik' },
                { icon: 'award', title: 'Bersertifikat', desc: 'Memiliki sertifikasi halal dan standar higienis' },
                { icon: 'users', title: 'Tim Profesional', desc: 'Dibuat oleh chef berpengalaman' },
                { icon: 'heart', title: 'Dibuat dengan Cinta', desc: 'Setiap hidangan dibuat dengan dedikasi tinggi' },
              ].map((item, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">
                    <i className={`fas fa-${item.icon}`}></i>
                  </div>
                  <div className="highlight-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="tentang-cta">
              <a href="#pesan" className="cta-button cta-primary">Pesan Sekarang</a>
            </div>
          </div>
          <div className="tentang-visual">
            <img src={food1} alt="Tentang Kami" className="main-image" loading="lazy" />
            <div className="decorative-element decorative-element-1"></div>
            <div className="decorative-element decorative-element-2"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={layananRef} className="section services-section">
        <div className="services-container">
          <div className="section-header">
            <div className="section-label">OUR SERVICES</div>
            <h2 className="section-title">Premium Catering Solutions</h2>
            <div className="section-divider">
              <div className="divider-line"></div>
              <div className="divider-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <div className="divider-line"></div>
            </div>
            <p className="section-subtitle">Exceptional culinary experiences tailored to your needs</p>
          </div>

          <div className="services-grid">
            <div className="service-card" data-aos="fade-up" data-aos-delay="100">
              <div className="card-icon">
                <div className="icon-bg"></div>
                <i className="fas fa-building"></i>
              </div>
              <h3>Corporate Catering</h3>
              <p>Professional service for business meetings and corporate events with customizable menus.</p>
              <ul className="service-features">
                <li><i className="fas fa-check-circle"></i><span>Meeting packages</span></li>
                <li><i className="fas fa-check-circle"></i><span>Conference catering</span></li>
                <li><i className="fas fa-check-circle"></i><span>Executive dining</span></li>
              </ul>
              <div className="hover-effect"></div>
            </div>

            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <div className="card-icon">
                <div className="icon-bg"></div>
                <i className="fas fa-ring"></i>
              </div>
              <h3>Wedding Catering</h3>
              <p>Elegant culinary creations and impeccable service for your special day.</p>
              <ul className="service-features">
                <li><i className="fas fa-check-circle"></i><span>Custom menu design</span></li>
                <li><i className="fas fa-check-circle"></i><span>Tasting sessions</span></li>
                <li><i className="fas fa-check-circle"></i><span>Full service staff</span></li>
              </ul>
              <div className="hover-effect"></div>
            </div>

            <div className="service-card" data-aos="fade-up" data-aos-delay="300">
              <div className="card-icon">
                <div className="icon-bg"></div>
                <i className="fas fa-glass-cheers"></i>
              </div>
              <h3>Private Events</h3>
              <p>Memorable dining experiences for your special celebrations.</p>
              <ul className="service-features">
                <li><i className="fas fa-check-circle"></i><span>Birthday parties</span></li>
                <li><i className="fas fa-check-circle"></i><span>Anniversaries</span></li>
                <li><i className="fas fa-check-circle"></i><span>Family gatherings</span></li>
              </ul>
              <div className="hover-effect"></div>
            </div>

            <div className="service-card" data-aos="fade-up" data-aos-delay="400">
              <div className="card-icon">
                <div className="icon-bg"></div>
                <i className="fas fa-calendar-day"></i>
              </div>
              <h3>Daily Catering</h3>
              <p>Consistent quality for your regular office or home catering needs.</p>
              <ul className="service-features">
                <li><i className="fas fa-check-circle"></i><span>Office lunches</span></li>
                <li><i className="fas fa-check-circle"></i><span>Staff catering</span></li>
                <li><i className="fas fa-check-circle"></i><span>Flexible subscriptions</span></li>
              </ul>
              <div className="hover-effect"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section ref={produkRef} className="section produk fade-in">
        <div className="menu-header">
          <div className="menu-label">OUR MENU</div>
          <h2 className="menu-title">Daftar Menu</h2>
          <div className="menu-divider">
            <div className="menu-divider-line"></div>
            <div className="menu-divider-icon">
              <i className="fas fa-utensils"></i>
            </div>
            <div className="menu-divider-line"></div>
          </div>
          <p className="menu-subtitle">Explore our curated selection of delicious catering options</p>
          <div className="menu-tabs">
            <button
              onClick={() => setMenuFilter('all')}
              className={`tab-button ${menuFilter === 'all' ? 'active' : ''}`}
              aria-label="Tampilkan semua menu"
            >
              <i className="fas fa-layer-group"></i>
              <span>Semua Menu</span>
            </button>
            <button
              onClick={() => setMenuFilter('Box')}
              className={`tab-button ${menuFilter === 'Box' ? 'active' : ''}`}
              aria-label="Tampilkan menu Box"
            >
              <i className="fas fa-box"></i>
              <span>Box</span>
            </button>
            <button
              onClick={() => setMenuFilter('Prasmanan')}
              className={`tab-button ${menuFilter === 'Prasmanan' ? 'active' : ''}`}
              aria-label="Tampilkan menu Prasmanan"
            >
              <i className="fas fa-utensils"></i>
              <span>Prasmanan</span>
            </button>
          </div>
        </div>
        <div className="elegant-menu-container">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((kategori, index) => (
              <div key={index} className="menu-category">
                <h3 className="category-title">{kategori.jenis}</h3>
                <div className="menu-items">
                  {kategori.packages.map((paket, idx) => (
                    <div key={idx} className="elegant-menu-card">
                      <div className="menu-gallery-container">
                        <div className="main-image-wrapper">
                          <img
                            src={paket.gambar[0].src}
                            alt={paket.gambar[0].alt}
                            className="menu-featured-image"
                            onClick={() => {
                              setSelectedPackage(paket);
                              setCurrentModalImage(0);
                            }}
                          />
                          {paket.gambar.length > 1 && (
                            <div
                              className="gallery-indicator"
                              onClick={() => {
                                setSelectedPackage(paket);
                                setCurrentModalImage(0);
                              }}
                            >
                              <i className="fas fa-images"></i> {paket.gambar.length} gambar
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="menu-card-header">
                        <h4>{paket.nama}</h4>
                        <div className="price-tag">{paket.harga}</div>
                      </div>
                      <p className="menu-description">{paket.isi}</p>
                      <div className="menu-footer">
                        <span className="min-order">{paket.minPack}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="no-menu">Tidak ada menu untuk filter ini.</p>
          )}
        </div>
      </section>

      {/* Galeri Section */}
      <section ref={galeriRef} className="section galeri fade-in">
        <div className="galeri-container">
          <div className="galeri-header">
            <div className="galeri-label">GALERI KAMI</div>
            <h2 className="galeri-title">Momen Spesial Kami</h2>
            <div className="galeri-divider">
              <div className="galeri-divider-line"></div>
              <div className="galeri-divider-icon">
                <i className="fas fa-camera"></i>
              </div>
              <div className="galeri-divider-line"></div>
            </div>
            <p className="galeri-subtitle">Lihat dokumentasi acara kami yang penuh kenangan</p>
          </div>
          <div className="galeri-filters">
            <button
              className={`galeri-filter-btn ${galleryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('all')}
              aria-label="Tampilkan semua acara"
            >
              <i className="fas fa-layer-group"></i>
              <span>Semua Acara</span>
            </button>
            <button
              className={`galeri-filter-btn ${galleryFilter === 'wedding' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('wedding')}
              aria-label="Tampilkan acara pernikahan"
            >
              <i className="fas fa-ring"></i>
              <span>Pernikahan</span>
            </button>
            <button
              className={`galeri-filter-btn ${galleryFilter === 'corporate' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('corporate')}
              aria-label="Tampilkan acara perusahaan"
            >
              <i className="fas fa-building"></i>
              <span>Perusahaan</span>
            </button>
            <button
              className={`galeri-filter-btn ${galleryFilter === 'family' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('family')}
              aria-label="Tampilkan acara keluarga"
            >
              <i className="fas fa-home"></i>
              <span>Acara Keluarga</span>
            </button>
          </div>
          <div className="galeri-grid">
            {filteredGallery.map((item, index) => (
              <div
                key={index}
                className="galeri-item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                tabIndex="0"
                onClick={() => openLightbox(item)}
              >
                <div className="galeri-image-container">
                  <img
                    src={item.gambar}
                    alt={item.caption}
                    className="galeri-image"
                    loading="lazy"
                  />
                  <div className="galeri-overlay">
                    <span className="galeri-category">
                      {item.category === 'wedding'
                        ? 'Pernikahan'
                        : item.category === 'corporate'
                        ? 'Perusahaan'
                        : 'Keluarga'}
                    </span>
                    <h3 className="galeri-caption">{item.caption}</h3>
                    <div className="galeri-meta">
                      <span className="galeri-date">
                        <i className="far fa-calendar-alt"></i> {item.date}
                      </span>
                      <span className="galeri-location">
                        <i className="fas fa-map-marker-alt"></i> {item.location}
                      </span>
                    </div>
                  </div>
                  <button
                    className="galeri-zoom"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(item);
                    }}
                    aria-label="Perbesar gambar"
                  >
                    <i className="fas fa-search-plus"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {galleryFilter === 'all' && visibleGalleryItems < galeriDokumentasi.length && (
            <div className="galeri-view-more">
              <button className="view-more-btn" onClick={loadMoreGalleryItems}>
                Lihat Lebih Banyak <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Dapur Kami Section */}
      <section ref={dapurRef} className="section dapur fade-in">
        <div className="dapur-container">
          <div className="dapur-header">
            <div className="dapur-label">OUR KITCHEN</div>
            <h2 className="dapur-title">Dapur Profesional Kami</h2>
            <div className="dapur-divider">
              <div className="dapur-divider-line"></div>
              <div className="dapur-divider-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <div className="dapur-divider-line"></div>
            </div>
            <p className="dapur-subtitle">Tempat keunggulan kuliner bertemu dengan standar kebersihan</p>
          </div>
          <div className="dapur-content">
            <div className="dapur-info">
              <div className="dapur-quote">
                "Kami menggabungkan teknologi modern dengan metode memasak tradisional untuk menghadirkan rasa luar biasa dengan standar kebersihan tertinggi."
              </div>
              <div className="dapur-features-grid">
                {[
                  { icon: 'temperature-low', title: 'Kontrol Suhu', desc: 'Penyimpanan dengan kontrol presisi untuk keamanan makanan' },
                  { icon: 'utensils', title: 'Peralatan Premium', desc: 'Peralatan stainless steel kelas komersial' },
                  { icon: 'hand-sparkles', title: 'Protokol Kebersihan', desc: 'Sanitasi harian sesuai pedoman HACCP' },
                  { icon: 'user-tie', title: 'Chef Bersertifikasi', desc: 'Tim kuliner yang terlatih secara profesional' },
                ].map((item, index) => (
                  <div key={index} className="dapur-feature-card">
                    <div className="feature-icon">
                      <i className={`fas fa-${item.icon}`}></i>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="dapur-certifications">
                <div className="certification-badge">
                  <i className="fas fa-certificate"></i>
                  <span>Sertifikasi HACCP</span>
                </div>
                <div className="certification-badge">
                  <i className="fas fa-certificate"></i>
                  <span>Sertifikasi Halal</span>
                </div>
              </div>
            </div>
            <div className="dapur-visual">
              <div className="dapur-slideshow-container">
                {dapurKami.map((item, index) => (
                  <div
                    key={index}
                    className={`dapur-slide ${index === currentDapurImage ? 'active' : ''}`}
                  >
                    <img src={item.gambar} alt={item.nama} className="dapur-slide-image" loading="lazy" />
                    <div className="dapur-slide-indicator">{index + 1}/{dapurKami.length}</div>
                  </div>
                ))}
                <div className="dapur-slide-controls">
                  <button
                    className="slide-nav-btn prev"
                    onClick={() => setCurrentDapurImage((prev) => (prev === 0 ? dapurKami.length - 1 : prev - 1))}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    className="slide-nav-btn next"
                    onClick={() => setCurrentDapurImage((prev) => (prev + 1) % dapurKami.length)}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
                <div className="dapur-slide-nav">
                  {dapurKami.map((_, index) => (
                    <div
                      key={index}
                      className={`dapur-slide-dot ${index === currentDapurImage ? 'active' : ''}`}
                      onClick={() => setCurrentDapurImage(index)}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="dapur-stats">
                {[
                  { number: '500+', label: 'Acara yang Dilayani' },
                  { number: '100%', label: 'Rating Kebersihan' },
                  { number: '24/7', label: 'Kontrol Kualitas' },
                ].map((item, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{item.number}</div>
                    <div className="stat-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="section sertifikasi fade-in">
        <div className="sertifikasi-container">
          <div className="sertifikasi-header">
            <div className="sertifikasi-label">SERTIFIKASI KAMI</div>
            <h2 className="sertifikasi-title">Standar Keamanan Pangan</h2>
            <div className="sertifikasi-divider">
              <div className="sertifikasi-divider-line"></div>
              <div className="sertifikasi-divider-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="sertifikasi-divider-line"></div>
            </div>
            <p className="sertifikasi-subtitle">Komitmen kami terhadap kualitas dan keamanan pangan</p>
          </div>
          <div className="sertifikasi-grid-5">
            {sertifikasiDanStandar.map((item, index) => (
              <div key={index} className="sertifikasi-card-5" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="sertifikasi-icon-5">{item.emoji}</div>
                <h3>{item.judul}</h3>
                <p>{item.deskripsi}</p>
                <div className="sertifikasi-badge-5">
                  <i className="fas fa-check-circle"></i> Terstandarisasi
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={organisasiRef} className="section organisasi fade-in">
        <div className="organisasi-container">
          <div className="organisasi-header">
            <div className="organisasi-label">TIM KAMI</div>
            <h2 className="organisasi-title">Kenali Tim Profesional Kami</h2>
            <div className="organisasi-divider">
              <div className="organisasi-divider-line"></div>
              <div className="organisasi-divider-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="organisasi-divider-line"></div>
            </div>
            <p className="organisasi-subtitle">Tim berdedikasi untuk memberikan pelayanan terbaik</p>
          </div>
          <div className="organisasi-grid">
            {strukturOrganisasi.map((anggota, index) => (
              <div key={index} className="organisasi-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <img src={anggota.foto} alt={anggota.nama} className="organisasi-image floating" loading="lazy" />
                <h4>{anggota.nama}</h4>
                <p>{anggota.jabatan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={pesanRef} className="section pesan fade-in">
        <h2>
          <span className="section-icon-left">📞</span>
          Pesan Sekarang
          <span className="section-icon-right">✉️</span>
        </h2>
        <div className="pesan-content">
          <a href="https://wa.me/6282237299901" className="pesan-button">
            <i className="fab fa-whatsapp pesan-icon"></i> Pesan via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section footer-logo-section">
            <img src={logo} alt="Logo" className="footer-logo" loading="lazy" />
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
          <div className="footer-section footer-contact-section">
            <h4>Hubungi Kami</h4>
            <p>Email: ikhsanrekt@gmail.com</p>
            <p>Telepon: +62 822-3729-9901</p>
            <a href="https://wa.me/6282237299901" className="pesan-button footer-whatsapp-button">
              <i className="fab fa-whatsapp pesan-icon"></i> Pesan via WhatsApp
            </a>
          </div>
          <div className="footer-section footer-social-section">
            <h4>Ikuti Kami</h4>
            <div className="footer-social">
              <a href="https://facebook.com" className="footer-social-icon floating">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/katering.paramitha/" className="footer-social-icon floating">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/6282237299901" className="footer-social-icon floating">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="footer-section footer-certification-section">
            <h4>Sertifikasi</h4>
            <img src={muiHalal} alt="MUI Halal" className="mui-halal-logo" loading="lazy" />
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 CV Paramitha Wijaya Sejahtera. Hak cipta dilindungi.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/6282237299901" className="whatsapp-cta floating">
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Package Modal */}
      {selectedPackage && (
        <div className="premium-gallery-modal" onClick={() => setSelectedPackage(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedPackage(null)}
              aria-label="Tutup galeri"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="gallery-header">
              <h3 className="gallery-title">{selectedPackage.nama}</h3>
              <div className="gallery-counter">
                {currentModalImage + 1} / {selectedPackage.gambar.length}
              </div>
            </div>

            <div className="gallery-viewport">
              <div
                className="slider-container"
                style={{
                  transform: `translateX(-${currentModalImage * 100}%)`,
                  transition: 'transform 0.4s ease-in-out',
                }}
              >
                {selectedPackage.gambar.map((img, index) => (
                  <div
                    key={index}
                    className={`slide ${index === currentModalImage ? 'active' : ''}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="gallery-full-image"
                      loading="lazy"
                      style={{
                        opacity: index === currentModalImage ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                className="nav-btn prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  prevModalImage();
                }}
                aria-label="Gambar sebelumnya"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className="nav-btn next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  nextModalImage();
                }}
                aria-label="Gambar berikutnya"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="gallery-info">
              <p>{selectedPackage.gambar[currentModalImage].alt}</p>
            </div>

            <div className="thumbnail-scroller">
              {selectedPackage.gambar.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail-item ${index === currentModalImage ? 'active' : ''}`}
                  onClick={() => setCurrentModalImage(index)}
                  aria-label={`Lihat gambar ${index + 1}`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gallery Lightbox */}
      {selectedGalleryItem && (
        <div className="premium-gallery-modal" onClick={closeLightbox}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={closeLightbox}
              aria-label="Tutup galeri"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="gallery-header">
            </div>

            <div className="gallery-viewport">
              <div className="slider-container">
                <div className="slide active">
                  <img
                    src={selectedGalleryItem.gambar}
                    alt={selectedGalleryItem.caption}
                    className="gallery-full-image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;