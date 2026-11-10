/* =====================================================================
   icons.js: IKON MENU  (Jurusan & Ekstrakurikuler)
   ---------------------------------------------------------------------
   Logo berwarna (assets/logo-menu/*.png) untuk dropdown menu navbar dan sebagai thumbnail
   kartu Jurusan / Ekskul. Ikon SVG garis di bawah dipakai sebagai cadangan bila PNG tidak ada.

   Cara kerja:
   - menuIcon('jurusan', 'TKJ', 'Teknik Komputer dan Jaringan')  -> HTML <span class="dd-ico">…</span>
   - menuIcon('ekskul',  '',    'Palang Merah Remaja (PMR)')
   Ikon dicari lewat singkatan jurusan atau kata kunci nama. Ekskul / jurusan baru
   dari admin yang belum punya ikon otomatis memakai ikon umum (bintang / lingkaran).

   MENAMBAH IKON BARU: tambahkan path SVG di objek PATHS dan satu aturan di RULES.
   ===================================================================== */
(function () {
  'use strict';

  /* isi <svg viewBox="0 0 24 24"> : stroke 1.8, ujung bulat */
  const PATHS = {
    /* --- jurusan --- */
    tkj: '<rect x="9" y="3" width="6" height="5" rx="1.2"/><rect x="2.5" y="16" width="6" height="5" rx="1.2"/><rect x="15.5" y="16" width="6" height="5" rx="1.2"/><path d="M12 8v4M5.5 16v-4h13v4"/>',
    dkv: '<path d="M12 3a9 9 0 1 0 0 18c1.3 0 2.1-.9 2.1-1.9 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1 .8-1.8 1.9-1.8H17a4 4 0 0 0 4-4C21 6.4 17 3 12 3z"/><circle cx="7.6" cy="11.2" r="1.1"/><circle cx="10.2" cy="7.2" r="1.1"/><circle cx="15" cy="7.2" r="1.1"/>',
    tbsm: '<circle cx="5" cy="16.5" r="3.2"/><circle cx="19" cy="16.5" r="3.2"/><path d="M7.6 14.6h5.4l3.8-4.4H9.6M10 10.2l-1.6 4.4"/><path d="M13.2 6h2.4l1.2 4.2 2 3.9M2.5 10.2h4.2"/>',
    /* --- ekstrakurikuler --- */
    saman: '<circle cx="12" cy="6.5" r="2.4"/><circle cx="4.8" cy="9" r="2"/><circle cx="19.2" cy="9" r="2"/><path d="M8 20v-4.2c0-1.8 1.6-3.3 4-3.3s4 1.5 4 3.3V20M1.8 18.5v-3c0-1.4 1.3-2.5 3-2.5M22.2 18.5v-3c0-1.4-1.3-2.5-3-2.5"/>',
    pmr: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
    paskibra: '<path d="M6 21V3"/><path d="M6 4.5h12.5l-3.2 4 3.2 4H6"/><path d="M4 21h4"/>',
    pramuka: '<path d="M2.5 20.5L12 4l9.5 16.5z"/><path d="M9.6 20.5L12 15l2.4 5.5"/><path d="M12 4V2.5"/>',
    marching: '<ellipse cx="12" cy="8.5" rx="8" ry="3"/><path d="M4 8.5v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/><path d="M8 11.2l1.2 6.6M16 11.2l-1.2 6.6M12 11.5v7"/>',
    silat: '<circle cx="9.5" cy="4.5" r="2"/><path d="M9.5 7.5l-1 5.5 3.5 2.5 5 4.5M8.5 13l-4 6.5M9.4 8.8l6.4 1.7 2.7-3M9.4 8.8L5 10.5"/>',
    basket: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18M5.4 5.4c3.1 2.5 3.1 10.7 0 13.2M18.6 5.4c-3.1 2.5-3.1 10.7 0 13.2"/>',
    futsal: '<circle cx="12" cy="12" r="9"/><path d="M12 8l3.6 2.6-1.4 4.2H9.8l-1.4-4.2z"/><path d="M12 3v5M20.5 9.4l-4.9 1.2M17.2 19l-3-4.2M6.8 19l3-4.2M3.5 9.4l4.9 1.2"/>',
    /* --- cadangan --- */
    star: '<path d="M12 3.2l2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-3-5.4 3 1.1-6-4.5-4.2 6.1-.8z"/>',
    dot: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.6"/>'
  };

  /* aturan pencarian: cocokkan teks (singkatan + nama, huruf kecil) -> kunci ikon */
  const RULES = {
    jurusan: [
      [/\btkj\b|komputer|jaringan|network|informatika|rpl|software/, 'tkj'],
      [/\bdkv\b|desain|visual|multimedia|grafis|animasi/, 'dkv'],
      [/\btbsm\b|motor|otomotif|\btkr\b|mobil|kendaraan/, 'tbsm']
    ],
    ekskul: [
      [/saman|tari|dance/, 'saman'],
      [/\bpmr\b|palang merah|pertolongan/, 'pmr'],
      [/pas[ik]*ibra|paskib|baris.?berbaris|pengibar/, 'paskibra'],
      [/pramuka|scout|kepanduan/, 'pramuka'],
      [/marching|drum|band|musik/, 'marching'],
      [/silat|bela diri|karate|taekwondo/, 'silat'],
      [/basket/, 'basket'],
      [/futsal|sepak ?bola|sepakbola|soccer|bola/, 'futsal']
    ]
  };

  /* logo berwarna (PNG transparan) ada di assets/logo-menu/<kunci>.png */
  const LOGO = { tkj: 1, dkv: 1, tbsm: 1, saman: 1, pmr: 1, paskibra: 1, pramuka: 1, marching: 1, silat: 1, basket: 1, futsal: 1 };
  const svg = key => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">' + PATHS[key] + '</svg>';
  function keyOf(jenis, kode, nama) {
    const teks = (String(kode || '') + ' ' + String(nama || '')).toLowerCase();
    let key = null;
    (RULES[jenis] || []).some(r => { if (r[0].test(teks)) { key = r[1]; return true; } return false; });
    return key || (jenis === 'jurusan' ? 'dot' : 'star');
  }
  const src = key => 'assets/logo-menu/' + key + '.png';

  /* ikon kecil di dropdown menu */
  window.menuIcon = function (jenis, kode, nama) {
    const key = keyOf(jenis, kode, nama);
    if (LOGO[key]) return '<span class="dd-ico dd-ico-img dd-ico-' + key + '" aria-hidden="true"><img src="' + src(key) + '" data-k="' + key + '" alt="" width="26" height="26" decoding="async" onerror="logoFallback(this)"></span>';
    return '<span class="dd-ico dd-ico-' + key + '" aria-hidden="true">' + svg(key) + '</span>';
  };
  /* thumbnail: logo memenuhi area gambar kartu / slider (menggantikan foto di thumbnail) */
  window.logoThumb = function (jenis, kode, nama) {
    const key = keyOf(jenis, kode, nama);
    return LOGO[key] ? '<img class="logo-fill" src="' + src(key) + '" alt="' + String(nama || '').replace(/"/g, '&quot;') + '" decoding="async" onerror="this.remove()">' : '';
  };
  /* bila file PNG tidak ditemukan, kembali ke ikon SVG bawaan */
  window.logoFallback = function (img) {
    const box = img.parentNode, key = img.getAttribute('data-k');
    if (box && PATHS[key]) { box.classList.remove('dd-ico-img'); box.innerHTML = svg(key); }
  };
  window.menuIconKeys = Object.keys(PATHS);   // untuk pratinjau / pengujian
})();
