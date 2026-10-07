"use client";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Coffee,
  Camera,
  Sun,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Navigation,
  ParkingCircle,
  Power,
  Send,
  Smartphone,
  Sparkles,
  Users,
  Wifi,
  X,
} from "lucide-react";

const menuItems = [
  ["Kopi Susu Suhka", "Es Kopi", "Rp 24k", "Favorite", "latte"],
  ["V60 Flores Bajawa", "Es Kopi", "Rp 30k", "Recommended", "pour"],
  ["Matcha Cloud", "Non-Kopi", "Rp 27k", "New", "matcha"],
  ["Nasi Goreng Kampung", "Makanan", "Rp 29k", "Favorite", "rice"],
  ["Croissant Butter", "Snack", "Rp 22k", "Best seller", "pastry"],
  ["Cokelat Klasik", "Non-Kopi", "Rp 25k", "Comfort", "cocoa"],
];
const spaces: [string, string, string, string[]][] = [
  [
    "Indoor Co-Working",
    "Zona tenang untuk deep work dan deadline yang panjang.",
    "space-indoor",
    ["AC 22°C", "Kursi ergonomis", "Stopkontak tiap meja"],
  ],
  [
    "Semi-Outdoor Garden",
    "Cahaya natural dan udara segar untuk hari kerja yang lebih ringan.",
    "space-garden",
    ["Natural lighting", "Tanaman rindang", "Area bebas asap"],
  ],
  [
    "Rooftop View",
    "Tempat ngobrol, kolaborasi, dan menikmati langit Magelang.",
    "space-rooftop",
    ["Sunset view", "Meja komunal", "Ideal untuk komunitas"],
  ],
];
const events = [
  ["12 JUN", "Open Mic Night", "Kamis · 19.00", "Mingguan"],
  ["15 JUN", "Creative Workshop", "Minggu · 10.00", "Komunitas"],
  ["21 JUN", "Board Games Night", "Sabtu · 18.30", "Santai"],
];

export default function Home() {
  const [category, setCategory] = useState("Semua");
  const [mobile, setMobile] = useState(false);
  const visible =
    category === "Semua"
      ? menuItems
      : menuItems.filter((item) => item[1] === category);
  function reserve(data: FormData) {
    const text = `Halo Suhka Coffee, saya ${data.get("name")}. Saya ingin reservasi untuk ${data.get("people")} pada ${data.get("arrival")}. Nomor WhatsApp saya ${data.get("phone")}.`;
    window.open(
      `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  }
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#beranda">
          <span className="brand-logo">
            <Image
              src="/logo.jpg"
              alt="Logo Suhka Coffee"
              width={38}
              height={38}
              priority
            />
          </span>
          <span>
            Suhka <em>Coffee</em>
          </span>
          <small>MAGELANG</small>
        </a>
        <nav className={mobile ? "nav-links nav-open" : "nav-links"}>
          {[
            ["Menu", "menu"],
            ["Pilihan Ruang", "ruang"],
            ["Fasilitas", "fasilitas"],
            ["Agenda", "agenda"],
            ["Lokasi", "lokasi"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMobile(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="button button-dark header-cta" href="#reservasi">
          Reservasi Meja <ArrowRight size={16} />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMobile(!mobile)}
          aria-label="Buka menu navigasi"
        >
          {mobile ? <X /> : <MenuIcon />}
        </button>
      </header>
      <section className="hero section-wrap" id="beranda">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> CO-WORKING & COFFEE 24/7
          </div>
          <h1>
            Ruang produktif <span>24 jam</span> di jantung Kota Magelang.
          </h1>
          <p className="lead">
            Kopi yang diracik dengan niat, ruang kerja yang dipikirkan dengan
            detail. Temukan ritme terbaikmu di suhka Coffee.
          </p>
          <div className="hero-actions">
            <a className="button button-accent" href="#reservasi">
              Pesan meja sekarang <ArrowRight size={17} />
            </a>
            <a
              className="text-link"
              href="https://maps.google.com/?q=Magelang"
              target="_blank"
              rel="noreferrer"
            >
              <Navigation size={16} /> Petunjuk arah
            </a>
          </div>
          <div className="quick-facts">
            <div>
              <Wifi />
              <strong>145 Mbps</strong>
              <span>Wi-Fi cepat</span>
            </div>
            <div>
              <Power />
              <strong>80+ titik</strong>
              <span>Stopkontak</span>
            </div>
            <div>
              <Users />
              <strong>2 area</strong>
              <span>Smoking / no smoking</span>
            </div>
            <div>
              <ParkingCircle />
              <strong>Luas & aman</strong>
              <span>Parkir 24 jam</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <img
              src="/coffee-interior.jpg"
              alt="Interior hangat Suhka Coffee dengan meja kerja dan tanaman hijau"
            />
            <div className="image-wash" />
          </div>
          <div className="open-card">
            <div className="status-row">
              <div className="status-label">
                <span className="status-dot" />
                <strong>Status: Buka Sekarang</strong>
              </div>
              <span className="status-pill">24 Jam</span>
            </div>
            <div className="status-details">
              <span>
                <Users size={15} /> Kapasitas Meja: <strong>Tersedia</strong>
              </span>
              <span>
                <Sun size={15} /> Outdoor Tidar Sunset
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-wrap section" id="menu">
        <div className="section-heading">
          <div>
            <p className="kicker">KURASI RASA</p>
            <h2>
              Teman baik untuk
              <br />
              <i>setiap fokus.</i>
            </h2>
          </div>
          <p className="section-intro">
            Dari kopi susu yang familiar hingga makanan hangat untuk mengisi
            ulang energi.
          </p>
        </div>
        <div className="tabs">
          {["Semua", "Es Kopi", "Non-Kopi", "Makanan", "Snack"].map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="menu-grid">
          {visible.map((item) => (
            <article className="menu-card" key={item[0]}>
              <div className={`menu-art ${item[4]}`}>
                <span>{item[3]}</span>
                {item[1] === "Es Kopi" ? (
                  <Image
                    src="/kopi sukha.jpg"
                    alt={`${item[0]} - menu kopi Suhka Coffee`}
                    fill
                    sizes="(max-width: 680px) 100vw, 33vw"
                  />
                ) : (
                  <Coffee size={40} />
                )}
              </div>
              <div className="menu-card-body">
                <div>
                  <h3>{item[0]}</h3>
                  <p>{item[1]}</p>
                </div>
                <strong>{item[2]}</strong>
              </div>
            </article>
          ))}
        </div>
        <div className="promo-banner">
          <Sparkles size={22} />
          <span>
            <strong>Mahasiswa, ini buat kamu.</strong> Tunjukkan KTM dan
            dapatkan diskon 10% untuk semua minuman.
          </span>
          <ArrowRight size={18} />
        </div>
      </section>
      <section className="section-wrap section" id="ruang">
        <div className="section-heading">
          <div>
            <p className="kicker">PILIHAN RUANG</p>
            <h2>
              Temukan sudut
              <br />
              <i>yang paling pas.</i>
            </h2>
          </div>
          <p className="section-intro">
            Tiga suasana, satu standar: nyaman untuk tinggal lebih lama dan
            berkarya lebih jauh.
          </p>
        </div>
        <div className="space-grid">
          {spaces.map((space) => (
            <article className="space-card" key={space[0]}>
              <div className={`space-image ${space[2]}`}>
                <span>{space[0]}</span>
              </div>
              <div className="space-body">
                <p>{space[1]}</p>
                <ul>
                  {space[3].map((feature) => (
                    <li key={feature}>
                      <Check size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#reservasi">
                  Pilih ruang <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="facility-band" id="fasilitas">
        <div className="section-wrap">
          <div className="band-heading">
            <p className="kicker">DIBUAT UNTUK BEKERJA</p>
            <h2>
              Nyaman bukan
              <br />
              <i>kemewahan.</i>
            </h2>
            <p>
              Detail kecil yang membuat sesi kerjamu terasa lebih panjang,
              fokus, dan menyenangkan.
            </p>
          </div>
          <div className="stats-grid">
            {[
              ["145", "Mbps", "Dedicated Wi-Fi line"],
              ["80+", "Titik", "Stopkontak tiap meja"],
              ["22", "°C", "Suhu ruang nyaman"],
              ["72", "cm", "Tinggi meja ergonomis"],
            ].map((stat) => (
              <div className="stat" key={stat[2]}>
                <strong>
                  {stat[0]}
                  <sup>{stat[1]}</sup>
                </strong>
                <span>{stat[2]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-wrap section agenda-section" id="agenda">
        <div className="agenda-column">
          <p className="kicker">AGENDA MINGGUAN</p>
          <h2>
            Selalu ada
            <br />
            <i>cerita baru.</i>
          </h2>
          <p className="section-intro">
            Ruang ini juga milik komunitas. Mari bertemu, berbagi, dan tumbuh
            bersama.
          </p>
          <div className="event-list">
            {events.map((event) => (
              <article className="event" key={event[1]}>
                <time>{event[0]}</time>
                <div>
                  <h3>{event[1]}</h3>
                  <p>{event[2]}</p>
                </div>
                <span>{event[3]}</span>
              </article>
            ))}
          </div>
          <a className="text-link" href="#lokasi">
            Lihat agenda lengkap <ArrowRight size={16} />
          </a>
        </div>
        <div className="reservation-card" id="reservasi">
          <div className="card-top">
            <div>
              <p className="kicker">RESERVASI</p>
              <h2>
                Amankan
                <br />
                <i>tempatmu.</i>
              </h2>
            </div>
            <MessageCircle />
          </div>
          <p>
            Isi detail singkat di bawah, kami akan mengonfirmasi lewat WhatsApp.
          </p>
          <form action={reserve}>
            <label>
              Nama lengkap
              <input name="name" placeholder="Nama kamu" required />
            </label>
            <label>
              Nomor WhatsApp
              <input
                name="phone"
                type="tel"
                placeholder="08xx xxxx xxxx"
                required
              />
            </label>
            <div className="form-row">
              <label>
                Datang pada
                <select name="arrival" defaultValue="">
                  <option value="" disabled>
                    Pilih waktu
                  </option>
                  <option>Hari ini, 19.00</option>
                  <option>Besok, 10.00</option>
                  <option>Lusa, 14.00</option>
                </select>
                <ChevronDown size={15} />
              </label>
              <label>
                Jumlah orang
                <select name="people" defaultValue="">
                  <option value="" disabled>
                    Pilih jumlah
                  </option>
                  <option>1-2 orang</option>
                  <option>3-5 orang</option>
                  <option>6+ orang</option>
                </select>
                <ChevronDown size={15} />
              </label>
            </div>
            <button className="button button-accent" type="submit">
              Konfirmasi via WhatsApp <Send size={16} />
            </button>
          </form>
        </div>
      </section>
      <section className="location-section" id="lokasi">
        <div className="section-wrap location-grid">
          <div>
            <p className="kicker">DATANG DAN RASAKAN</p>
            <h2>
              Temui kami
              <br />
              <i>di Magelang.</i>
            </h2>
            <div className="contact-list">
              <p>
                <MapPin size={19} />
                <span>
                  <strong>Alamat</strong>Jl. Ahmad Yani No. 142, Magelang
                </span>
              </p>
              <p>
                <Clock3 size={19} />
                <span>
                  <strong>Jam operasional</strong>24 jam, setiap hari
                </span>
              </p>
              <p>
                <Smartphone size={19} />
                <span>
                  <strong>Hubungi kami</strong>+62 812 3456 7890 · @suhkacoffee
                </span>
              </p>
            </div>
            <a
              className="button button-dark"
              href="https://maps.google.com/?q=Magelang"
              target="_blank"
              rel="noreferrer"
            >
              Buka di Google Maps <Navigation size={16} />
            </a>
          </div>
          <div className="map-art">
            <div className="map-lines" />
            <div className="map-pin">
              <MapPin size={21} fill="currentColor" />
              <span>Suhka Coffee</span>
            </div>
            <span className="map-label label-one">Alun-alun Magelang</span>
            <span className="map-label label-two">Jl. Ahmad Yani</span>
          </div>
        </div>
      </section>
      <footer>
        <div className="section-wrap footer-grid">
          <div>
            <a className="brand" href="#beranda">
              <span className="brand-mark">
                <Coffee size={18} />
              </span>
              <span>
                Suhka <em>Coffee</em>
              </span>
            </a>
            <p>
              Ruang produktif dan kopi yang dibuat dengan hati, 24 jam di
              Magelang.
            </p>
          </div>
          <div>
            <p className="footer-label">Jelajahi</p>
            <a href="#menu">Menu</a>
            <a href="#ruang">Pilihan ruang</a>
            <a href="#agenda">Agenda</a>
          </div>
          <div>
            <p className="footer-label">Terhubung</p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Camera size={15} /> Instagram
            </a>
            <a href="#reservasi">
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
        <div className="section-wrap footer-bottom">
          <span>© 2026 Suhka Coffee Magelang</span>
          <span>Dibuat untuk hari-hari yang produktif.</span>
        </div>
      </footer>
    </main>
  );
}
