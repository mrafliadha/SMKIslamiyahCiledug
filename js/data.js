/* =====================================================================
   data.js: data bawaan website + penyimpanan untuk panel admin
   Dipakai oleh index.html (situs publik) dan admin.html (panel admin).
   Urutan pemuatan data di situs:
     1) draf hasil edit di admin (tersimpan di browser yang sama)
     2) file data.json (hasil "Unduh data.json" dari admin, diunggah ke hosting)
     3) data bawaan di bawah ini
   ===================================================================== */
(function () {
    const JURUSAN = {
      tkj: {
        name: "Teknik Komputer dan Jaringan", singkatan: "TKJ", tagline: "Membangun, mengelola, dan mengamankan jaringan serta sistem komputer.",
        desc: "Program keahlian TKJ membekali siswa dengan kemampuan merakit komputer, merancang jaringan LAN/WAN, administrasi server, hingga dasar keamanan siber — disiapkan untuk kebutuhan industri teknologi informasi yang terus berkembang.",
        kompetensi: ["Instalasi & perawatan hardware komputer", "Perancangan dan konfigurasi jaringan", "Administrasi server dan sistem operasi", "Dasar keamanan jaringan (cyber security)", "Pemrograman dasar dan troubleshooting"],
        fasilitas: ["Lab komputer & jaringan ber-AC", "Rak server dan perangkat mikrotik", "Akses internet fiber untuk praktik", "Ruang simulasi data center mini"],
        kegiatan: ["Praktik kerja industri (PKL) di perusahaan IT", "Sertifikasi kompetensi jaringan", "Kunjungan industri ke data center", "Kompetisi LKS bidang IT Network Systems"],
        karier: ["Teknisi jaringan", "IT Support / Helpdesk", "Network Administrator", "Technopreneur bidang IT"]
      },
      dkv: {
        name: "Desain Komunikasi Visual", singkatan: "DKV", tagline: "Menciptakan karya visual, branding, dan konten multimedia yang komunikatif.",
        desc: "Program keahlian DKV mengasah kepekaan estetika dan keterampilan teknis siswa dalam desain grafis, ilustrasi, fotografi, dan produksi multimedia — mempersiapkan kreator visual untuk industri kreatif digital.",
        kompetensi: ["Desain grafis & tipografi", "Ilustrasi digital dan manual", "Fotografi dan videografi dasar", "Branding dan identitas visual", "Produksi konten multimedia & animasi"],
        fasilitas: ["Studio desain dengan komputer grafis", "Studio foto mini & pencahayaan", "Ruang produksi multimedia", "Perangkat drawing tablet"],
        kegiatan: ["Praktik kerja industri di agensi kreatif", "Pameran karya siswa tahunan", "Proyek desain untuk UMKM lokal", "Kompetisi desain grafis & fotografi"],
        karier: ["Graphic Designer", "Videografer / Editor", "Content Creator", "Ilustrator lepas"]
      },
      tbsm: {
        name: "Teknik dan Bisnis Sepeda Motor", singkatan: "TBSM", tagline: "Menguasai perawatan, perbaikan, dan bisnis layanan sepeda motor modern.",
        desc: "Program keahlian TBSM mencetak teknisi yang cakap dalam perawatan mesin, kelistrikan, dan teknologi sepeda motor terbaru, sekaligus memahami sisi bisnis layanan otomotif dan wirausaha bengkel.",
        kompetensi: ["Perawatan dan perbaikan mesin motor", "Sistem kelistrikan kendaraan", "Teknologi motor injeksi & matic", "Manajemen bengkel dan layanan pelanggan", "Dasar kewirausahaan otomotif"],
        fasilitas: ["Bengkel praktik dengan unit motor terkini", "Peralatan diagnostik injeksi", "Area praktik kelistrikan", "Ruang teori otomotif"],
        kegiatan: ["Praktik kerja industri di dealer resmi", "Sertifikasi kompetensi otomotif", "Servis motor gratis untuk masyarakat", "Kompetisi LKS bidang otomotif"],
        karier: ["Teknisi sepeda motor", "Service Advisor", "Wirausaha bengkel", "Staf dealer otomotif"]
      }
    };
    const PRESTASI = [
      { id: 1, title: "Juara 1 LKS Network Systems", kategori: "Akademik", tingkat: "Provinsi", tahun: "2026", jur: "TKJ", desc: "Tim TKJ meraih posisi pertama pada Lomba Kompetensi Siswa bidang Network Systems Administration tingkat provinsi." },
      { id: 2, title: "Juara 2 Desain Poster Nasional", kategori: "Non-Akademik", tingkat: "Nasional", tahun: "2025", jur: "DKV", desc: "Karya poster kampanye lingkungan dari siswa DKV meraih juara 2 dalam kompetisi desain tingkat nasional." },
      { id: 3, title: "Juara 1 Kontes Modifikasi Motor Irit", kategori: "Non-Akademik", tingkat: "Kota", tahun: "2025", jur: "TBSM", desc: "Tim TBSM menang dalam kontes efisiensi bahan bakar sepeda motor hasil modifikasi siswa." },
      { id: 4, title: "Sekolah Adiwiyata Tingkat Kota", kategori: "Sekolah", tingkat: "Kota", tahun: "2025", jur: "Sekolah", desc: "Penghargaan atas komitmen sekolah dalam pengelolaan lingkungan dan program hijau berkelanjutan." },
      { id: 5, title: "Juara 3 Debat Bahasa Inggris", kategori: "Akademik", tingkat: "Provinsi", tahun: "2024", jur: "Umum", desc: "Tim debat sekolah meraih juara 3 dalam kompetisi debat bahasa Inggris antar SMK se-provinsi." },
      { id: 6, title: "Juara Harapan 1 Fotografi Jurnalistik", kategori: "Non-Akademik", tingkat: "Kota", tahun: "2024", jur: "DKV", desc: "Karya foto jurnalistik siswa DKV mendapat penghargaan pada festival fotografi tingkat kota." }
    ];
    const EKSKUL = [
      {
        "id": 9,
        "name": "Hadroh",
        "desc": "Seni musik Islami dengan alat rebana dan lantunan selawat. Melatih kekompakan, rasa percaya diri, dan kecintaan pada seni bernuansa Islami.",
        "jadwal": "Jadwal menyusul"
      },
      {
        "id": 4,
        "name": "Pramuka",
        "desc": "Membentuk kemandirian, kerja sama, dan jiwa kepemimpinan melalui kegiatan kepramukaan rutin.",
        "jadwal": "Jumat, 14.00–16.00"
      }
    ];
    const KEGIATAN = [
      {
        "id": 1,
        "kategori": "Non-Akademik",
        "jur": "Sekolah",
        "title": "Upacara Peringatan Hari Kemerdekaan",
        "tanggal": "17 Agustus 2026",
        "excerpt": "Seluruh siswa dan guru mengikuti upacara bendera dalam rangka HUT Kemerdekaan Republik Indonesia.",
        "content": "Upacara berlangsung khidmat di lapangan sekolah, diikuti oleh seluruh siswa, guru, dan staf. Petugas upacara terdiri dari siswa terpilih dari berbagai jurusan sebagai bentuk apresiasi atas prestasi dan kedisiplinan mereka sepanjang tahun ajaran."
      },
      {
        "id": "2",
        "kategori": "Non-Akademik",
        "jur": "Sekolah",
        "title": "Pentas Seni",
        "tanggal": "29 Juli 2026",
        "excerpt": "Pentas Seni Sekolah merupakan kegiatan tahunan yang diselenggarakan sebagai wadah bagi para siswa untuk mengekspresikan kreativitas, bakat, dan minat mereka di bidang seni.",
        "content": "Pentas Seni Sekolah merupakan kegiatan tahunan yang diselenggarakan sebagai wadah bagi para siswa untuk mengekspresikan kreativitas, bakat, dan minat mereka di bidang seni. Kegiatan ini menghadirkan berbagai penampilan menarik, mulai dari pertunjukan musik, tari tradisional dan modern, drama, puisi, hingga berbagai pertunjukan seni lainnya.\n\nMelalui kegiatan ini, siswa diberikan kesempatan untuk menunjukkan kemampuan, mengembangkan rasa percaya diri, serta meningkatkan kerja sama dan solidaritas antarsiswa.\n\nDengan mengusung semangat kreativitas dan kebersamaan, Pentas Seni Sekolah diharapkan dapat menjadi pengalaman yang berkesan sekaligus mempererat hubungan antara siswa, guru, dan seluruh warga sekolah.",
        "foto": "assets/img/pentas-seni-1.webp",
        "galeri": [
          "assets/img/pentas-seni-1.webp",
          "assets/img/pentas-seni-2.webp"
        ]
      },
      {
        "id": "3",
        "kategori": "Akademik",
        "jur": "Umum",
        "title": "Kunjungan Industri Sari Roti",
        "tanggal": "18 Mei 2026",
        "excerpt": "Siswa mengunjungi pabrik Sari Roti (PT Nippon Indosari Corpindo Tbk) untuk belajar langsung tentang dunia industri dan proses produksi di lingkungan perusahaan.",
        "content": "Kunjungan Industri PT Nippon Indosari Corpindo Tbk (Sari Roti)\n\nKunjungan Industri merupakan salah satu kegiatan edukatif yang bertujuan untuk memberikan pengalaman belajar secara langsung kepada siswa mengenai dunia industri dan proses produksi di lingkungan perusahaan.\n\nDalam kegiatan ini, siswa berkesempatan mengunjungi pabrik Sari Roti (PT Nippon Indosari Corpindo Tbk) untuk mengenal lebih dekat proses pembuatan roti, mulai dari pemilihan bahan baku, proses pengolahan adonan, pemanggangan, pengemasan, hingga pendistribusian produk kepada konsumen.\n\nSelain memperoleh wawasan mengenai proses produksi, siswa juga dapat mempelajari penerapan teknologi industri, standar kebersihan, pengendalian kualitas produk, serta sistem kerja yang diterapkan oleh perusahaan.\n\nMelalui kegiatan ini, diharapkan siswa dapat memperluas pengetahuan, meningkatkan pemahaman tentang dunia kerja, serta memperoleh gambaran nyata mengenai penerapan ilmu yang telah dipelajari di sekolah dalam lingkungan industri.",
        "foto": "assets/img/sari-roti-1.webp",
        "galeri": [
          "assets/img/sari-roti-1.webp",
          "assets/img/sari-roti-2.webp",
          "assets/img/sari-roti-3.webp"
        ]
      },
      {
        "id": "4",
        "kategori": "Akademik",
        "jur": "TBSM",
        "title": "Uji Praktik Kompetensi Teknik Sepeda Motor Bersama Honda",
        "tanggal": "25 Maret 2026",
        "excerpt": "Program pengembangan keterampilan siswa melalui kerja sama sekolah dengan AHASS Honda untuk mengukur dan meningkatkan kemampuan di bidang teknik dan perawatan sepeda motor.",
        "content": "Sertifikasi Kompetensi Teknik Sepeda Motor Bersama AHASS Honda\n\nKegiatan Sertifikasi Kompetensi Teknik Sepeda Motor merupakan program pengembangan keterampilan siswa yang diselenggarakan melalui kerja sama antara pihak sekolah dengan AHASS Honda. Kegiatan ini bertujuan untuk mengukur sekaligus meningkatkan kemampuan siswa dalam bidang teknik dan perawatan sepeda motor sesuai dengan standar dunia industri.\n\nDalam kegiatan ini, siswa mengikuti serangkaian ujian praktik yang mencakup pemeriksaan komponen kendaraan, perawatan berkala, identifikasi kerusakan, penggunaan peralatan bengkel, serta penerapan prosedur keselamatan dan kesehatan kerja (K3).\n\nMelalui kegiatan sertifikasi ini, siswa mendapatkan pengalaman langsung dalam menghadapi standar kompetensi industri otomotif, khususnya pada bidang teknik sepeda motor Honda.\n\nDiharapkan kegiatan ini dapat meningkatkan keterampilan, pengetahuan, dan kesiapan siswa dalam memasuki dunia kerja, sekaligus menjadi bekal untuk menghadapi tantangan di industri otomotif yang semakin berkembang.",
        "foto": "assets/img/honda-1.webp",
        "galeri": [
          "assets/img/honda-1.webp",
          "assets/img/honda-2.webp"
        ]
      },
      {
        "id": "5",
        "kategori": "Non-Akademik",
        "jur": "Sekolah",
        "title": "Latihan Dasar Kepemimpinan Osis (LDKO)",
        "tanggal": "14 Februari 2026",
        "excerpt": "Kegiatan pembinaan untuk membentuk karakter kepemimpinan, meningkatkan kedisiplinan, serta mengembangkan kemampuan berorganisasi bagi para anggota OSIS.",
        "content": "Latihan Dasar Kepemimpinan Organisasi (LDKO) OSIS merupakan kegiatan pembinaan yang bertujuan untuk membentuk karakter kepemimpinan, meningkatkan kedisiplinan, serta mengembangkan kemampuan berorganisasi bagi para anggota OSIS.\n\nDalam kegiatan ini, peserta mendapatkan berbagai materi dan pelatihan mengenai dasar-dasar kepemimpinan, komunikasi, kerja sama tim, tanggung jawab, manajemen organisasi, serta kemampuan dalam mengambil keputusan.\n\nSelain penyampaian materi, kegiatan LDKO juga dilengkapi dengan berbagai aktivitas kelompok yang dirancang untuk melatih kekompakan, kreativitas, kemandirian, dan rasa tanggung jawab.\n\nMelalui kegiatan ini, diharapkan para anggota OSIS mampu menjadi pribadi yang disiplin, bertanggung jawab, memiliki jiwa kepemimpinan, serta mampu menjalankan tugas dan peran organisasi dengan baik demi kemajuan sekolah.",
        "foto": "assets/img/ldko-1.webp",
        "galeri": [
          "assets/img/ldko-1.webp",
          "assets/img/ldko-2.webp"
        ]
      },
      {
        "id": "6",
        "kategori": "Non-Akademik",
        "jur": "Umum",
        "title": "Pembelajaran Interaktif melalui Media Film",
        "tanggal": "22 Januari 2026",
        "excerpt": "Kegiatan pembelajaran di luar sekolah: siswa menyaksikan film bertema pendidikan di bioskop Transmart untuk memperoleh pesan moral dan wawasan baru.",
        "content": "Kegiatan Edukasi dan Apresiasi Film di Bioskop Transmart\n\nKegiatan Edukasi dan Apresiasi Film merupakan salah satu kegiatan pembelajaran di luar lingkungan sekolah yang bertujuan untuk memberikan pengalaman belajar yang menarik dan menyenangkan bagi para siswa.\n\nDalam kegiatan ini, siswa diajak untuk menyaksikan film bertema pendidikan di bioskop yang berlokasi di Transmart. Melalui tayangan film tersebut, siswa diharapkan dapat memperoleh pesan moral, menambah wawasan, serta memahami berbagai nilai positif yang dapat diterapkan dalam kehidupan sehari-hari.\n\nSelain sebagai sarana hiburan yang edukatif, kegiatan ini juga menjadi kesempatan bagi siswa untuk mempererat kebersamaan, meningkatkan interaksi sosial, dan mengembangkan kemampuan dalam memahami pesan serta nilai-nilai yang disampaikan melalui media visual.\n\nMelalui kegiatan ini, diharapkan proses pembelajaran menjadi lebih variatif, interaktif, dan memberikan pengalaman berkesan bagi seluruh peserta.",
        "foto": "assets/img/film-transmart.webp"
      },
      {
        "id": "7",
        "kategori": "Akademik",
        "jur": "Umum",
        "title": "Kegiatan Seminar",
        "tanggal": "12 November 2025",
        "excerpt": "Siswa mengikuti seminar yang menghadirkan narasumber untuk berbagi wawasan dan pengalaman.",
        "content": "Kegiatan seminar menjadi salah satu sarana pembelajaran di luar kegiatan belajar mengajar di kelas. Siswa menyimak pemaparan narasumber, mencatat materi, dan berdiskusi untuk menambah wawasan.\n\nMelalui kegiatan ini, diharapkan siswa memperoleh pengetahuan baru, motivasi, dan gambaran yang lebih luas untuk menunjang prestasi serta kesiapan mereka di masa depan.",
        "foto": "assets/img/seminar.webp"
      },
      {
        "id": "8",
        "kategori": "Akademik",
        "jur": "Umum",
        "title": "Kunjungan Industri Mini Gathering Polman Dan Alumni",
        "tanggal": "8 Oktober 2025",
        "excerpt": "Kunjungan industri yang dirangkai dengan Mini Gathering Polman dan Alumni Vol. 1.",
        "content": "Kegiatan kunjungan industri ini dirangkai dengan Mini Gathering Polman dan Alumni Vol. 1. Siswa berkesempatan melihat langsung lingkungan kerja industri serta berinteraksi dengan para alumni dan pihak terkait.\n\nMelalui kegiatan ini, diharapkan siswa memperoleh gambaran nyata tentang dunia kerja dan jenjang pendidikan lanjutan, sekaligus mempererat hubungan antara sekolah dan alumni.",
        "foto": "assets/img/polman-gathering.webp"
      },
      {
        "id": "9",
        "kategori": "Non-Akademik",
        "jur": "Sekolah",
        "title": "Wisuda",
        "tanggal": "14 Juni 2025",
        "excerpt": "Momen penting yang menandai berakhirnya masa pendidikan siswa, dihadiri siswa, orang tua/wali, dan para guru.",
        "content": "Wisuda merupakan momen penting yang menandai berakhirnya masa pendidikan siswa di SMK Islamiyah Ciledug. Kegiatan ini dihadiri siswa, orang tua/wali, dan para guru sebagai bentuk apresiasi atas perjuangan dan pencapaian selama menempuh pendidikan.\n\nDiharapkan seluruh lulusan dapat melanjutkan langkah mereka, baik ke dunia kerja, pendidikan tinggi, maupun berwirausaha, dengan bekal ilmu dan akhlak yang baik."
      }
    ];


  // PPDB (Penerimaan Peserta Didik Baru). Semua isi ini bisa diubah lewat admin.html menu PPDB dan Berkas PPDB.
  // Tanggal dan isi di bawah hanya CONTOH, silakan diganti sesuai jadwal resmi sekolah.
  const PPDB = {
    status: "Dibuka",
    tahun: "2027/2028",
    intro: "Selamat datang calon siswa baru! Ikuti alur pendaftaran berikut, siapkan berkas persyaratan, lalu daftar secara online atau lewat WhatsApp panitia.",
    jadwal: ["Gelombang 1: 1 November – 31 Desember 2026", "Gelombang 2: 1 Januari – 28 Februari 2027", "Pengumuman hasil seleksi: 15 Maret 2027", "Daftar ulang: 16–31 Maret 2027"],
    alur: ["Siapkan berkas persyaratan (lihat daftar di bawah)", "Isi formulir pendaftaran online, atau kirim data awal lewat WhatsApp panitia", "Unggah atau serahkan berkas persyaratan", "Verifikasi berkas oleh panitia PPDB", "Lihat pengumuman hasil seleksi, lalu lakukan daftar ulang"],
    formUrl: "",
    // Countdown di beranda & halaman PPDB. Format: 2026-12-31 23:59 (WIB). Kosongkan untuk menyembunyikan.
    deadline: "2026-12-31 23:59",
    deadlineLabel: "Gelombang 1 ditutup dalam",
    // FAQ Biaya & Beasiswa (accordion). Isi di bawah hanya CONTOH, ganti lewat admin.html menu FAQ PPDB.
    faq: [
      { id: 1, aktif: true, kategori: "Biaya", q: "Apa saja komponen biaya masuk?", a: "Umumnya terdiri dari biaya pendaftaran, uang pangkal, seragam, dan perlengkapan praktik. Nominal resmi diisi panitia lewat admin; hubungi panitia PPDB untuk rincian terbaru." },
      { id: 2, aktif: true, kategori: "Biaya", q: "Bagaimana pembayaran SPP dan apakah bisa dicicil?", a: "SPP dibayar setiap bulan. Skema cicilan uang pangkal dapat dikonsultasikan langsung dengan panitia PPDB." },
      { id: 3, aktif: true, kategori: "Beasiswa", q: "Apakah tersedia keringanan untuk pemegang KIP?", a: "Calon siswa pemegang Kartu Indonesia Pintar (KIP) dapat mengajukan keringanan biaya. Siapkan fotokopi KIP dan serahkan saat verifikasi berkas." },
      { id: 4, aktif: true, kategori: "Beasiswa", q: "Bagaimana syarat beasiswa prestasi?", a: "Siswa berprestasi akademik maupun non-akademik (dibuktikan sertifikat atau piagam) dapat dipertimbangkan mendapat potongan biaya." },
      { id: 5, aktif: true, kategori: "Beasiswa", q: "Apakah ada beasiswa Tahfiz?", a: "Calon siswa penghafal Al-Qur'an dapat mengikuti tes tahfiz. Besar keringanan menyesuaikan capaian hafalan." },
      { id: 6, aktif: true, kategori: "Umum", q: "Apakah bisa mendaftar lewat WhatsApp?", a: "Bisa. Klik tombol Daftar Cepat, isi data singkat, dan pesan otomatis terkirim ke WhatsApp panitia." }
    ],
    catatan: "Ada pertanyaan seputar pendaftaran? Hubungi panitia PPDB melalui kontak sekolah.",
    berkas: [
      { id: 1, nama: "Formulir pendaftaran", ket: "Diisi lengkap oleh calon siswa dan orang tua/wali", link: "" },
      { id: 2, nama: "Fotokopi ijazah atau SKL SMP/MTs", ket: "Dilegalisir, 1 lembar", link: "" },
      { id: 3, nama: "Fotokopi rapor kelas 7-9", ket: "Dilegalisir", link: "" },
      { id: 4, nama: "Fotokopi Kartu Keluarga", ket: "1 lembar", link: "" },
      { id: 5, nama: "Fotokopi akta kelahiran", ket: "1 lembar", link: "" },
      { id: 6, nama: "Pas foto ukuran 3x4", ket: "4 lembar, latar merah", link: "" },
      { id: 7, nama: "Surat pernyataan orang tua/wali", ket: "Bermaterai, format sesuai ketentuan sekolah", link: "" }
    ]
  };

  // POSTER di beranda. Diatur lewat admin.html menu Poster (bisa dinyalakan/dimatikan satu per satu).
  // Tiga poster di bawah hanyalah CONTOH, silakan diedit atau dinonaktifkan.
  const POSTER = [
    { id: 1, aktif: true, judul: "PPDB 2027/2028 Telah Dibuka", keterangan: "Daftarkan putra-putri Anda sekarang. Kuota terbatas.", foto: "", link: "#ppdb", tombol: "Daftar Sekarang", warna: "Emas", tampilTeks: true },
    { id: 2, aktif: true, judul: "Tiga Program Keahlian Unggulan", keterangan: "TKJ, DKV, dan TBSM: belajar langsung di laboratorium dan bengkel praktik.", foto: "", link: "#jurusan", tombol: "Lihat Jurusan", warna: "Biru", tampilTeks: true },
    { id: 3, aktif: false, judul: "Tempat Pengumuman Sekolah", keterangan: "Poster ini nonaktif. Aktifkan lewat admin, lalu ganti teks atau unggah gambar posternya.", foto: "", link: "", tombol: "", warna: "Hijau", tampilTeks: true }
  ];

  const settings = {
    namaLengkap: "SMK Islamiyah Ciledug",
    namaSekolah: "SMK ISLAMIYAH",
    subNama: "CILEDUG",
    heroJudul: "SMK Islamiyah Ciledug",
    heroDeskripsi: "Membangun generasi cerdas, berkarakter mulia, dan berprestasi unggul.",
    alumni: "250+",
    akreditasi: "A",
    akreditasiKet: "Terakreditasi BAN-S/M",
    jumlahSiswa: "500+",
    jumlahGuru: "40+",
    mitra: "5+",
    alamat: "Jl. Raden Fatah No. 36, Sudimara Barat, Kec. Ciledug, Kota Tangerang, Banten 15151",
    telepon: "(021) 730-4257",
    email: "smk.islamiyah13@gmail.com",
    jam: "12.30 - 17.30",
    // Boleh lebih dari satu nomor, dipisah "/" atau koma. Awalan 0 otomatis menjadi 62.
    whatsapp: "0858-8977-6778 / 0813-1058-8366",
    // Section "Info dan Pengumuman (Poster)" di beranda: bawaan mati, dinyalakan lewat admin.
    posterTampil: false,
    // Section "Mitra Industri" (marquee logo) di beranda: bawaan mati, dinyalakan lewat admin.
    mitraTampil: false,
    // Section "Cerita Alumni" (testimoni) di beranda: bawaan mati, dinyalakan lewat admin.
    testimoniTampil: false,
    visi: "Menjadi SMK unggulan yang menghasilkan lulusan kompeten, mandiri, dan berakhlak mulia.",
    misi: [
      "Menyelenggarakan pembelajaran kejuruan berbasis kompetensi industri",
      "Menanamkan nilai-nilai keislaman dalam setiap aktivitas sekolah",
      "Membangun kemitraan aktif dengan dunia usaha dan dunia industri",
      "Mengembangkan potensi, minat, dan bakat siswa secara menyeluruh"
    ],
    npsn: "",
    jamLayanan: "",
    statKerja: "90%",
    videoUrl: "",
    videoJudul: "Tur Fasilitas Lab dan Bengkel Praktik",
    waSapaan: "Halo, ada yang bisa kami bantu terkait PPDB?",
    logo: "",
    heroBg: "assets/img/gedung-halaman.webp",
    bannerBg: "",
    fotoProfil: "assets/img/gedung-gerbang.webp",
    fotoVisi: "assets/img/gedung-gerbang.webp"
  };
  // TESTIMONI alumni dan MITRA industri. Isi di bawah hanya CONTOH, ganti lewat admin.html menu Testimoni Alumni / Mitra Industri.
  const TESTIMONI = [
    { id: 1, aktif: true, nama: "Nama Alumni 1", tahun: "2023", pekerjaan: "Network Engineer, PT Contoh Teknologi", pesan: "Praktik langsung di lab dan PKL membuat saya siap kerja begitu lulus.", foto: "" },
    { id: 2, aktif: true, nama: "Nama Alumni 2", tahun: "2022", pekerjaan: "Desainer Grafis, Studio Contoh Kreatif", pesan: "Guru-guru membimbing sampai portofolio saya layak dilirik industri.", foto: "" },
    { id: 3, aktif: true, nama: "Nama Alumni 3", tahun: "2024", pekerjaan: "Teknisi Servis, Bengkel Contoh Motor", pesan: "Ilmu dari bengkel sekolah terpakai setiap hari di tempat kerja.", foto: "" }
  ];
  const MITRA = ["Mitra Industri 1", "Mitra Industri 2", "Mitra Industri 3", "Mitra Industri 4", "Mitra Industri 5", "Mitra Industri 6"].map((nama, i) => ({ id: i + 1, nama, foto: "" }));

  // UNDUHAN (Pusat Berkas): dokumen dan formulir resmi. Contoh di bawah hanya kerangka; "url" sengaja kosong sampai file diisi
  // lewat admin.html > menu Unduhan (path file di folder unduhan/ atau link Google Drive).
  const UNDUHAN = [
    { id: 1, aktif: true, kategori: "Surat & Pernyataan", judul: "Surat Izin Tidak Masuk Sekolah", deskripsi: "Format surat izin dari orang tua/wali siswa.", url: "", jenis: "", ukuran: "", tanggal: "" },
    { id: 2, aktif: true, kategori: "Surat & Pernyataan", judul: "Surat Pernyataan Orang Tua/Wali", deskripsi: "Surat pernyataan bermaterai sesuai ketentuan sekolah.", url: "", jenis: "", ukuran: "", tanggal: "" },
    { id: 3, aktif: true, kategori: "PKL / Prakerin", judul: "Formulir Pendaftaran PKL", deskripsi: "Diisi siswa kelas XI sebelum penempatan Praktik Kerja Lapangan.", url: "", jenis: "", ukuran: "", tanggal: "" },
    { id: 4, aktif: true, kategori: "PKL / Prakerin", judul: "Jurnal Harian PKL", deskripsi: "Lembar catatan kegiatan harian selama PKL.", url: "", jenis: "", ukuran: "", tanggal: "" },
    { id: 5, aktif: true, kategori: "Administrasi", judul: "Formulir Perubahan Data Siswa", deskripsi: "Untuk memperbarui data diri atau data orang tua di sekolah.", url: "", jenis: "", ukuran: "", tanggal: "" },
    { id: 6, aktif: true, kategori: "Administrasi", judul: "Surat Permohonan Legalisir", deskripsi: "Permohonan legalisir ijazah atau dokumen akademik.", url: "", jenis: "", ukuran: "", tanggal: "" }
  ];

  // CHATBOT: jawaban tambahan buatan admin (menu "Chatbot (Tanya Jawab)"). Kosong secara bawaan; jawaban seputar PPDB, jurusan,
  // ekskul, kontak, dan FAQ sudah otomatis diambil dari data situs oleh js/chatbot.js.
  const CHATBOT = [];

  window.SITE_DEFAULT = { settings, JURUSAN, PRESTASI, EKSKUL, KEGIATAN, PPDB, POSTER, TESTIMONI, MITRA, UNDUHAN, CHATBOT };
})();

window.SiteStore = (function () {
  const DB = 'smk_cms', ST = 'kv', KEY = 'site';
  const clone = o => JSON.parse(JSON.stringify(o));

  function openDB() {
    return new Promise((res, rej) => {
      try {
        const r = indexedDB.open(DB, 1);
        r.onupgradeneeded = () => r.result.createObjectStore(ST);
        r.onsuccess = () => res(r.result);
        r.onerror = () => rej(r.error);
      } catch (e) { rej(e); }
    });
  }
  async function idbGet() {
    const db = await openDB();
    return new Promise((res, rej) => { const q = db.transaction(ST).objectStore(ST).get(KEY); q.onsuccess = () => res(q.result || null); q.onerror = () => rej(q.error); });
  }
  async function idbSet(v) {
    const db = await openDB();
    return new Promise((res, rej) => { const t = db.transaction(ST, 'readwrite'); t.objectStore(ST).put(v, KEY); t.oncomplete = () => res(); t.onerror = () => rej(t.error); });
  }
  async function idbDel() {
    const db = await openDB();
    return new Promise((res, rej) => { const t = db.transaction(ST, 'readwrite'); t.objectStore(ST).delete(KEY); t.oncomplete = () => res(); t.onerror = () => rej(t.error); });
  }
  async function getLocal() {
    try { return await idbGet(); } catch (e) {
      try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (_) { return null; }
    }
  }
  // Gabungkan data tersimpan dengan bawaan supaya field baru tidak pernah hilang
  function merge(d) {
    const base = clone(SITE_DEFAULT);
    if (!d) return base;
    return {
      settings: Object.assign(base.settings, d.settings || {}),
      JURUSAN: d.JURUSAN || base.JURUSAN,
      PRESTASI: d.PRESTASI || base.PRESTASI,
      EKSKUL: d.EKSKUL || base.EKSKUL,
      KEGIATAN: d.KEGIATAN || base.KEGIATAN,
      PPDB: Object.assign(base.PPDB, d.PPDB || {}),
      POSTER: d.POSTER || base.POSTER,
      TESTIMONI: d.TESTIMONI || base.TESTIMONI,
      MITRA: d.MITRA || base.MITRA,
      UNDUHAN: d.UNDUHAN || base.UNDUHAN,
      CHATBOT: d.CHATBOT || base.CHATBOT
    };
  }
  // MODE SERVER: kalau api.php ada di hosting, data dibaca dari database di server (langsung up-to-date).
  // Mengembalikan: objek data | null (server ada tapi masih kosong) | undefined (tidak ada server, pakai cara statis)
  // Hosting statis (Netlify, GitHub Pages, dll) tidak punya api.php: setelah terbukti tidak ada, jangan ditanya lagi di tiap halaman.
  const NOSRV = 'smk_nosrv';
  const noServer = () => { try { return sessionStorage.getItem(NOSRV) === '1'; } catch (e) { return false; } };
  const markNoServer = () => { try { sessionStorage.setItem(NOSRV, '1'); } catch (e) { } };
  async function fromServer() {
    if (noServer()) return undefined;
    try {
      const r = await fetch('api/api.php?action=data', { cache: 'no-store', credentials: 'same-origin' });
      if (!r.ok) { markNoServer(); return undefined; }
      const j = await r.json().catch(() => null);
      if (!j || typeof j !== 'object') { markNoServer(); return undefined; }
      return j.empty ? null : j;
    } catch (e) { return undefined; }   // gangguan jaringan sesaat: jangan ditandai "tidak ada server"
  }
  // data.json mulai diunduh begitu skrip ini jalan (paralel dengan permintaan lain), dan di-revalidate (304) bukan diunduh ulang
  let _filePromise = null;
  function fetchFile() { return fetch('content/data.json', { cache: 'no-cache' }).then(r => r.ok ? r.json() : null).catch(() => null); }
  function prefetchFile() { _filePromise = fetchFile(); }
  function takeFile() { const p = _filePromise || fetchFile(); _filePromise = null; return p; }
  prefetchFile();
  async function load() {
    const srv = await fromServer();
    if (srv !== undefined) {
      return srv ? { data: merge(srv), source: 'server' } : { data: clone(SITE_DEFAULT), source: 'server-empty' };
    }
    const local = await getLocal();
    if (local) return { data: merge(local), source: 'draft' };
    const file = await takeFile();   // null bila file:// atau data.json belum ada: pakai bawaan
    if (file && typeof file === 'object') return { data: merge(file), source: 'file' };
    return { data: clone(SITE_DEFAULT), source: 'default' };
  }
  async function save(data) {
    try { await idbSet(data); }
    catch (e) { localStorage.setItem(KEY, JSON.stringify(data)); }
  }
  async function clearDraft() {
    try { await idbDel(); } catch (e) { }
    try { localStorage.removeItem(KEY); } catch (e) { }
  }
  return { load, save, clearDraft, clone, merge, getLocal };
})();
