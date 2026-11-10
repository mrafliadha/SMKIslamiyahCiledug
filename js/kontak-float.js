/* =====================================================================
   kontak-float.js: MENU "HUBUNGI KONTAK" DI SISI KANAN LAYAR
   ---------------------------------------------------------------------
   - Tab vertikal menempel di tepi kanan layar (selalu terlihat, ukuran sentuh >= 44 px).
   - Klik tab -> panel kontak: panel samping di desktop, "bottom sheet" di HP.
   - Isinya (alamat, telepon, email, jam layanan, WhatsApp) diambil dari Pengaturan Umum
     di admin.html, sama seperti footer; jadi otomatis ikut berubah bila admin mengubahnya.
   - Gaya visual meminjam footer: latar navy, label .ft-k, aksen emas.
   Cara mencabut: hapus baris <script src="js/kontak-float.js"> di halaman.
   ===================================================================== */
(function () {
  'use strict';
  if (window.__kontakFloat) return; window.__kontakFloat = true;

  const $ = id => document.getElementById(id);
  const ICON = {
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C9.4 21 3 14.6 3 6a2 2 0 0 1 2-2z"/>',
    wa: '<path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5.2A8.5 8.5 0 1 1 21 11.5z"/><path d="M9 8.5c.3 2.5 2.8 5.5 6 6.3l1.3-1.5-2.3-1.1-.9.8c-.9-.4-1.7-1.2-2.1-2.1l.8-.9L10.7 7.7z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>'
  };
  const svg = k => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + ICON[k] + '</svg>';

  /* data kontak: pakai CFG milik app.js (Pengaturan Umum); cadangan: isi footer */
  function data() {
    let c = {}; try { if (typeof CFG !== 'undefined' && CFG) c = CFG; } catch (e) { }
    const ft = id => ($(id) && $(id).textContent || '').trim();
    return {
      alamat: c.alamat || ft('ft-alamat'), telepon: c.telepon || ft('ft-telp'), email: c.email || ft('ft-email'),
      jam: c.jamLayanan || c.jam || ft('ft-jam'), wa: (typeof waNum === 'function' ? waNum() : String(c.whatsapp || '').replace(/\D/g, '')),
      sapa: c.waSapaan || 'Halo, saya ingin bertanya.'
    };
  }

  function build() {
    if ($('kf-tab')) return;
    const wrap = document.createElement('div'); wrap.className = 'kf'; wrap.id = 'kf';
    wrap.innerHTML =
      '<button type="button" class="kf-tab" id="kf-tab" aria-expanded="false" aria-controls="kf-panel">' + svg('phone') + '<span>Hubungi Kontak</span></button>' +
      '<div class="kf-bg" id="kf-bg" hidden></div>' +
      '<aside class="kf-panel" id="kf-panel" role="dialog" aria-modal="true" aria-labelledby="kf-title" hidden>' +
      '  <div class="kf-grip" aria-hidden="true"></div>' +
      '  <div class="kf-head"><h4 id="kf-title">Hubungi Kami</h4><button type="button" class="kf-x" id="kf-x" aria-label="Tutup">' + svg('x') + '</button></div>' +
      '  <p class="kf-intro">Kami siap membantu pertanyaan seputar pendaftaran dan informasi sekolah</p>' +
      '  <div class="kf-list" id="kf-list"></div>' +
      '  <div class="kf-cta" id="kf-cta"></div>' +
      '</aside>';
    document.body.appendChild(wrap);
    $('kf-tab').addEventListener('click', () => (isOpen() ? close() : open()));
    $('kf-bg').addEventListener('click', close);
    $('kf-x').addEventListener('click', close);
    document.addEventListener('keydown', e => {
      if (!isOpen()) return;
      if (e.key === 'Escape') { close(); $('kf-tab').focus(); }
      if (e.key === 'Tab') {   // fokus tetap di dalam panel
        const f = [].slice.call($('kf-panel').querySelectorAll('a[href],button')).filter(x => x.offsetParent !== null);
        if (!f.length) return; const a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    });
    /* tutup bila pengunjung pindah ke menu / chatbot */
    document.addEventListener('click', e => { if (isOpen() && e.target.closest && e.target.closest('.cb-fab, nav.menu, .bnav')) close(); });
  }

  const isOpen = () => $('kf-panel') && !$('kf-panel').hidden && $('kf-panel').classList.contains('on');

  function fill() {
    const d = data(), list = $('kf-list'), cta = $('kf-cta');
    const row = (ico, label, inner) => '<div class="kf-row"><span class="kf-ic">' + svg(ico) + '</span><div><span class="ft-k">' + label + '</span>' + inner + '</div></div>';
    const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const tel = String(d.telepon).replace(/[^\d+]/g, '');
    let h = '';
    if (d.alamat) h += row('pin', 'Alamat', '<p>' + esc(d.alamat) + '</p><a class="kf-more" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(d.alamat) + '" target="_blank" rel="noopener">Buka di Google Maps</a>');
    if (d.telepon) h += row('phone', 'Telepon', tel ? '<a href="tel:' + tel + '">' + esc(d.telepon) + '</a>' : '<p>' + esc(d.telepon) + '</p>');
    if (d.email) h += row('mail', 'Email', '<a href="mailto:' + encodeURIComponent(d.email).replace(/%40/g, '@') + '">' + esc(d.email) + '</a>');
    if (d.jam) h += row('clock', 'Jam layanan', '<p>' + esc(d.jam) + '</p>');
    list.innerHTML = h;
    let c = '';
    if (d.wa) c += '<a class="kf-btn kf-wa" href="https://wa.me/' + d.wa + '?text=' + encodeURIComponent(d.sapa) + '" target="_blank" rel="noopener">' + svg('wa') + '<span>Chat WhatsApp</span></a>';
    if (tel) c += '<a class="kf-btn kf-call" href="tel:' + tel + '">' + svg('phone') + '<span>Telepon Sekarang</span></a>';
    if (d.email) c += '<a class="kf-btn kf-mail" href="mailto:' + encodeURIComponent(d.email).replace(/%40/g, '@') + '">' + svg('mail') + '<span>Kirim Email</span></a>';
    cta.innerHTML = c;
  }

  let timer = 0;
  function open() {
    fill(); clearTimeout(timer);
    const p = $('kf-panel'), bg = $('kf-bg');
    p.hidden = false; bg.hidden = false; $('kf-tab').setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('kf-lock');
    requestAnimationFrame(() => requestAnimationFrame(() => { p.classList.add('on'); bg.classList.add('on'); }));
    setTimeout(() => { const f = $('kf-x'); if (f) f.focus({ preventScroll: true }); }, 60);
  }
  function close() {
    const p = $('kf-panel'), bg = $('kf-bg'); if (!p) return;
    p.classList.remove('on'); bg.classList.remove('on'); $('kf-tab').setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('kf-lock');
    timer = setTimeout(() => { p.hidden = true; bg.hidden = true; }, 280);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
  window.kontakFloat = { open: open, close: close };
})();
