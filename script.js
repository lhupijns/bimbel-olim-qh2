// DATABASE MATERI & SOAL (100% PERSIS DARI PDF TEKS)
const db = [
    {
        id: 'yatim',
        emoji: '👦',
        title: 'Menyayangi Anak Yatim',
        arabic: 'أَنَا وَكَافِلُ الْيَتِيمِ لَهُ أَوْ لِغَيْرِهِ فِي الْجَنَّةِ هَكَذَا، وَأَشَارَ بِالسَّبَّابَةِ وَالْوُسْطَى',
        translation: '"Aku dan orang yang menanggung anak yatim (miliknya atau orang lain) akan berada di surga seperti ini — dan beliau mengisyaratkan dengan jari telunjuk dan jari tengah." (HR. Bukhari)',
        desc: 'Hadis ini diriwayatkan oleh Imam Bukhari. Inti hadis ini adalah kabar gembira luar biasa: siapa yang merawat anak yatim, ia akan berdampingan dengan Nabi Muhammad SAW di surga. Ini salah satu janji surga yang paling indah dalam Islam!',
        questions: [
            { q: 'Kata "أَنَا" dalam hadis di atas merujuk kepada...', options: ['A. Malaikat Jibril', 'B. Nabi Muhammad SAW', 'C. Sahabat Abu Bakar', 'D. Allah SWT'], answer: 1, exp: 'Kata "Anā" artinya "Aku". Dalam hadis ini yang berbicara adalah Rasulullah sendiri, sehingga "Aku" merujuk langsung kepada beliau. Ini menunjukkan betapa mulianya kedudukan hadis ini.' },
            { q: 'Arti kata "كَافِلُ الْيَتِيمِ" dalam hadis tersebut adalah...', options: ['A. Orang yang menzalimi anak yatim', 'B. Orang yang menanggung/memelihara anak yatim', 'C. Orang yang mengabaikan anak yatim', 'D. Anak yatim itu sendiri'], answer: 1, exp: '"Kāfil" berasal dari kata "kafala" yang artinya menanggung, memelihara, dan bertanggung jawab. Jadi "kāfilul yatīm" adalah orang yang bertanggung jawab penuh mengurus anak yatim.' },
            { q: 'Kata "الْيَتِيمِ" dalam Islam merujuk kepada...', options: ['A. Anak yang ditinggal pergi orang tuanya', 'B. Anak yang belum baligh dan telah ditinggal wafat ayahnya', 'C. Anak yang tidak punya saudara', 'D. Anak yang fakir miskin'], answer: 1, exp: 'Yatim dalam istilah Islam adalah anak yang belum mencapai usia baligh (dewasa) dan telah meninggal ayahnya. Jika ibunya yang wafat, disebut "laqith". Batas yatim berakhir saat anak sudah baligh.' },
            { q: 'Frasa "لَهُ أَوْ لِغَيْرِهِ" dalam hadis ini memiliki makna...', options: ['A. Untuk dirinya sendiri saja', 'B. Untuk orang lain saja', 'C. Baik yatim dari keluarganya sendiri maupun dari orang lain', 'D. Untuk fakir miskin saja'], answer: 2, exp: '"Lahū" = miliknya (masih ada hubungan keluarga), "lighairihī" = milik orang lain (tidak ada hubungan keluarga). Hadis ini menegaskan bahwa pahala merawat yatim berlaku untuk siapa pun, baik kerabat maupun bukan.' },
            { q: 'Nabi mengisyaratkan dua jari saat menyampaikan hadis ini. Dua jari tersebut adalah...', options: ['A. Jempol dan telunjuk', 'B. Telunjuk dan jari tengah', 'C. Jari tengah dan jari manis', 'D. Kelingking dan jari manis'], answer: 1, exp: 'Dalam hadis: "wa asyāra bis-sabbābati wal wusthā" — "as-sabbābah" = jari telunjuk, "al-wusthā" = jari tengah. Isyarat ini menggambarkan betapa dekatnya kedudukan pengasuh yatim dengan Nabi di surga.' },
            { q: 'Pesan utama yang disampaikan Rasulullah melalui hadis ini adalah...', options: ['A. Anak yatim harus tinggal di panti asuhan', 'B. Orang yang merawat anak yatim akan bersama Nabi di surga', 'C. Anak yatim tidak boleh disekolahkan', 'D. Merawat yatim hanya kewajiban pemerintah'], answer: 1, exp: 'Inti hadis ini adalah kabar gembira luar biasa: siapa yang merawat anak yatim, ia akan berdampingan dengan Nabi Muhammad di surga. Ini salah satu janji surga yang paling indah dalam Islam!' },
            { q: 'Isyarat jari telunjuk dan jari tengah yang berdekatan dalam hadis ini melambangkan...', options: ['A. Pengasuh yatim akan kaya raya di dunia', 'B. Kedekatan derajat pengasuh yatim dengan Nabi di surga', 'C. Dua kali lipat pahala yang diterima', 'D. Dua syarat wajib merawat yatim'], answer: 1, exp: 'Bayangkan jarak antara jari telunjuk dan jari tengah — sangat dekat! Begitulah gambaran Nabi tentang betapa dekatnya kedudukan orang yang merawat yatim dengan beliau di surga. Subhanallah!' },
            { q: 'Hadis ini diriwayatkan oleh Imam Bukhari. Kitab hadis karya Imam Bukhari yang paling terkenal bernama...', options: ['A. Shahih Muslim', 'B. Sunan Abu Dawud', 'C. Shahih Bukhari (Al-Jami\' As-Shahih)', 'D. Muwatha\' Malik'], answer: 2, exp: 'Imam Bukhari menulis kitab "Al-Jami\' As-Shahih" yang dikenal sebagai "Shahih Bukhari". Kitab ini dianggap sebagai kitab hadis paling sahih setelah Al-Qur\'an. Imam Bukhari sangat teliti dalam memilih hadis.' },
            { q: 'Dalam Al-Qur\'an, Allah SWT juga melarang keras memperlakukan anak yatim dengan buruk. Larangan ini terdapat dalam surah...', options: ['A. Al-Fatihah ayat 1', 'B. Al-Ma\'un ayat 2', 'C. Al-Ikhlas ayat 1', 'D. Al-Falaq ayat 3'], answer: 1, exp: 'Surah Al-Ma\'un ayat 2: "Itulah orang yang menghardik anak yatim." Allah menyebut orang yang menghardik yatim sebagai pendusta agama. Ini menunjukkan betapa seriusnya Islam dalam melindungi anak yatim.' },
            { q: 'Bentuk nyata merawat anak yatim yang paling utama menurut para ulama adalah...', options: ['A. Memberikan mainan mewah', 'B. Memenuhi kebutuhan makan, pakaian, pendidikan, dan kasih sayang', 'C. Mengajaknya liburan setiap bulan', 'D. Memberikan uang saku yang banyak'], answer: 1, exp: 'Merawat yatim bukan hanya soal materi. Yang paling penting adalah memberikan kasih sayang, pendidikan, perlindungan, dan memenuhi kebutuhan dasarnya. Sentuhan kasih sayang lebih berharga dari sekadar harta.' },
            { q: 'Di sekolah Fatimah ada teman bernama Hasan yang yatim. Teman-teman lain sering mengejeknya. Sikap Fatimah yang sesuai hadis adalah...', options: ['A. Ikut mengejek agar tidak dikucilkan teman', 'B. Diam saja dan tidak peduli', 'C. Membela, berteman baik, dan memperlakukannya dengan kasih sayang', 'D. Melaporkan ke guru lalu pergi'], answer: 2, exp: 'Menyayangi yatim bukan hanya soal memberi makan, tapi juga melindunginya dari perundungan (bullying), berteman dengan tulus, dan membuatnya merasa dihargai. Itu pun sudah termasuk memuliakan yatim!' },
            { q: 'Udin ingin mendapatkan pahala merawat yatim tapi ia masih kelas 5 SD. Apa yang bisa dilakukan Udin?', options: ['A. Menunggu sampai dewasa dan kaya dulu', 'B. Berbagi bekal, berteman baik, dan mendoakan teman yatimnya', 'C. Tidak bisa berbuat apa-apa karena masih kecil', 'D. Menyuruh orang tuanya saja yang beramal'], answer: 1, exp: 'Anak-anak pun bisa meraih pahala menyayangi yatim! Caranya: berbagi makanan, bermain bersama, berkata baik, tersenyum, dan mendoakannya. Amal kecil yang dilakukan dengan ikhlas sangat berarti di mata Allah.' },
            { q: 'Keluarga Pak Ahmad mengasuh anak yatim bernama Bilal sejak kecil, memberinya makan, sekolah, dan kasih sayang. Berdasarkan hadis, apa yang dijanjikan Allah bagi keluarga Pak Ahmad?', options: ['A. Mendapat pujian dari masyarakat', 'B. Kaya raya di dunia', 'C. Berdampingan dengan Nabi di surga', 'D. Terhindar dari semua musibah'], answer: 2, exp: 'Hadis ini adalah janji langsung dari Nabi. Keluarga yang merawat yatim dengan sungguh-sungguh akan mendapatkan tempat bersama Nabi di surga. Tidak ada balasan yang lebih indah dari itu!' },
            { q: 'Seseorang yang mengambil harta anak yatim secara zalim termasuk perbuatan...', options: ['A. Makruh (tidak disukai)', 'B. Dosa besar yang diancam azab neraka', 'C. Boleh jika darurat', 'D. Mubah (boleh-boleh saja)'], answer: 1, exp: 'Allah berfirman dalam QS. An-Nisa: 10 bahwa orang yang memakan harta anak yatim secara zalim, seolah-olah ia menelan api ke dalam perutnya dan akan masuk neraka. Harta yatim wajib dijaga dengan amanah.' },
            { q: 'Perhatikan pernyataan berikut: (1) Merawat anak yatim kerabat sendiri tidak mendapat pahala (2) Pengasuh yatim dijanjikan berdampingan dengan Nabi di surga (3) Yatim adalah anak yang belum baligh dan telah wafat ayahnya (4) Merawat yatim orang lain lebih utama daripada yatim kerabat sendiri. Pernyataan yang benar dan sesuai dengan hadis serta ajaran Islam adalah...', options: ['A. (1) dan (4)', 'B. (2) dan (3)', 'C. (1), (3), dan (4)', 'D. Semua benar'], answer: 1, exp: 'Pernyataan (2) dan (3) adalah benar. Pernyataan (1) salah karena merawat yatim kerabat tetap berpahala. Pernyataan (4) salah karena hadis menyebut keduanya (lahū au lighairihī) setara dalam pahala.' }
        ]
    },
    {
        id: 'munafik',
        emoji: '🎭',
        title: 'Tanda-Tanda Orang Munafik',
        arabic: 'آيَةُ الْمُنَافِقِ ثَلَاثٌ: إِذَا حَدَّثَ كَذَبَ، وَإِذَا وَعَدَ أَخْلَفَ، وَإِذَا اؤْتُمِنَ خَانَ',
        translation: '"Tanda-tanda orang munafik itu ada tiga: apabila berbicara ia berdusta, apabila berjanji ia mengingkari, dan apabila dipercaya ia berkhianat." (HR. Bukhari dan Muslim)',
        desc: 'Hadis tentang tanda munafik ini diriwayatkan oleh dua imam besar hadis sekaligus, yaitu Imam Bukhari dan Imam Muslim. Ketiga tanda tersebut berkaitan erat dengan kejujuran dan amanah.',
        questions: [
            { q: 'Kata "آيَةُ الْمُنَافِقِ" dalam hadis di atas memiliki arti...', options: ['A. Kisah orang munafik', 'B. Tanda-tanda orang munafik', 'C. Hukuman orang munafik', 'D. Dosa orang munafik'], answer: 1, exp: '"Āyah" dalam bahasa Arab bisa berarti "tanda" atau "pertanda". Jadi "āyatul munāfiq" artinya tanda-tanda atau ciri-ciri orang munafik. Kata ini berbeda dengan "āyah" dalam Al-Qur\'an yang berarti "ayat".' },
            { q: 'Arti kata "إِذَا حَدَّثَ كَذَبَ" dalam hadis tersebut adalah...', options: ['A. Apabila berbicara ia jujur', 'B. Apabila berbicara ia berdusta', 'C. Apabila diam ia berdosa', 'D. Apabila mendengar ia lupa'], answer: 1, exp: '"Haddatsa" artinya berbicara/bercerita, "kadzaba" artinya berdusta/berbohong. Ini adalah tanda pertama munafik: setiap kali membuka mulut, yang keluar adalah kebohongan.' },
            { q: 'Makna "إِذَا وَعَدَ أَخْلَفَ" adalah...', options: ['A. Apabila berjanji ia menepati', 'B. Apabila berjanji ia mengingkari/melanggar', 'C. Apabila berjanji ia ragu-ragu', 'D. Apabila berjanji ia meminta ganti'], answer: 1, exp: '"Wa\'ada" artinya berjanji, "akhlafa" artinya mengingkari atau tidak menepati. Orang munafik suka berjanji manis di depan, tapi di belakang sama sekali tidak dipenuhi janjinya.' },
            { q: 'Arti frasa "إِذَا اؤْتُمِنَ خَانَ" dalam hadis ini adalah...', options: ['A. Apabila dipercaya ia bersyukur', 'B. Apabila dipercaya ia berkhianat', 'C. Apabila dipercaya ia diam', 'D. Apabila dipercaya ia menolak'], answer: 1, exp: '"Utumina" dari kata "amanah" artinya dipercaya, "khāna" artinya berkhianat atau mengkhianati. Tanda ketiga munafik: saat diberi kepercayaan, justru ia gunakan untuk mengkhianati orang yang percaya padanya.' },
            { q: 'Hadis tentang tanda munafik ini diriwayatkan oleh dua imam besar hadis sekaligus, yaitu...', options: ['A. Imam Abu Dawud dan Imam Tirmidzi', 'B. Imam Bukhari dan Imam Muslim', 'C. Imam Nasa\'i dan Imam Ibnu Majah', 'D. Imam Ahmad dan Imam Malik'], answer: 1, exp: 'Hadis yang diriwayatkan bersama oleh Imam Bukhari dan Imam Muslim disebut "Muttafaq \'Alaih" artinya disepakati keshahihannya. Ini adalah derajat hadis paling tinggi dan paling kuat dalam ilmu hadis.' },
            { q: 'Menurut hadis ini, tanda-tanda orang munafik ada berapa?', options: ['A. Dua', 'B. Empat', 'C. Tiga', 'D. Lima'], answer: 2, exp: 'Hadis ini menyebut dengan tegas "tsalātsun" artinya tiga. Tiga tanda itu adalah: (1) berdusta saat berbicara, (2) mengingkari janji, (3) berkhianat saat dipercaya.' },
            { q: 'Secara bahasa, kata "munafik" berasal dari kata Arab "nifaq" yang artinya...', options: ['A. Keberanian', 'B. Kemunduran', 'C. Lubang tikus yang tembus dua sisi / bermuka dua', 'D. Kemalasan'], answer: 2, exp: '"Nifāq" berasal dari kata "nafaq" yaitu terowongan atau lubang tikus yang memiliki dua pintu — masuk dari satu sisi, keluar dari sisi lain. Ini menggambarkan orang yang bermuka dua: berbeda antara luar dan dalam.' },
            { q: 'Apa perbedaan antara munafik i\'tiqadi dan munafik amali?', options: ['A. Munafik i\'tiqadi lebih ringan dosanya', 'B. Munafik i\'tiqadi adalah kemunafikan dalam keyakinan, munafik amali adalah kemunafikan dalam perbuatan', 'C. Keduanya sama saja', 'D. Munafik amali lebih berbahaya dari munafik i\'tiqadi'], answer: 1, exp: 'Munafik i\'tiqadi (keyakinan): pura-pura Islam tapi hatinya kafir — ini dosa terbesar. Munafik amali (perbuatan): seorang Muslim yang memiliki sifat-sifat munafik seperti dalam hadis ini.' },
            { q: 'Dalam Al-Qur\'an, orang munafik ditempatkan di tingkatan neraka yang paling...', options: ['A. Ringan', 'B. Tengah', 'C. Bawah (paling dalam)', 'D. Sama dengan orang kafir biasa'], answer: 2, exp: 'Allah berfirman dalam QS. An-Nisa: 145 bahwa orang munafik berada di "ad-darkil asfal minan-nār" — dasar neraka yang paling bawah. Ini karena mereka lebih berbahaya dari orang kafir terang-terangan.' },
            { q: 'Kebalikan dari sifat munafik dalam hadis ini adalah tiga sifat mulia, yaitu...', options: ['A. Pemberani, dermawan, dan sabar', 'B. Jujur, menepati janji, dan amanah', 'C. Rajin shalat, puasa, dan zakat', 'D. Cerdas, kuat, dan sehat'], answer: 1, exp: 'Lawannya satu per satu: lawan dusta = jujur (shidq), lawan ingkar janji = menepati janji (wafa), lawan khianat = amanah (amanah). Ketiga sifat ini adalah akhlak mulia yang menjadi ciri seorang Mukmin sejati.' },
            { q: 'Riko meminjam pensil temannya dan berjanji akan mengembalikan besok. Namun seminggu berlalu pensil itu tidak dikembalikan dan Riko pura-pura lupa. Tindakan Riko mencerminkan tanda munafik yang ke...', options: ['A. Pertama — berdusta saat berbicara', 'B. Kedua — mengingkari janji', 'C. Ketiga — berkhianat saat dipercaya', 'D. Bukan termasuk tanda munafik'], answer: 1, exp: 'Riko membuat janji (mengembalikan pensil) lalu tidak menepatinya. Ini adalah tanda kedua munafik: "Apabila berjanji ia mengingkari."' },
            { q: 'Ibu guru menitipkan uang kas kelas kepada Sari. Namun Sari diam-diam menggunakan sebagian uang itu untuk jajan sendiri. Perbuatan Sari termasuk tanda munafik yang ke...', options: ['A. Pertama — berdusta', 'B. Kedua — ingkar janji', 'C. Ketiga — berkhianat saat dipercaya', 'D. Bukan termasuk kemunafikan'], answer: 2, exp: 'Sari diberi kepercayaan (amanah) memegang uang kas, lalu ia mengkhianatinya. Ini adalah tanda ketiga munafik: "Apabila dipercaya ia berkhianat." Mengkhianati amanah adalah dosa besar.' },
            { q: 'Danu sering bercerita kepada teman-temannya tentang hal-hal yang tidak benar untuk mendapat perhatian. Danu menunjukkan tanda munafik yang ke...', options: ['A. Pertama — berdusta saat berbicara', 'B. Kedua — ingkar janji', 'C. Ketiga — khianat', 'D. Belum termasuk tanda munafik'], answer: 0, exp: 'Berbicara dengan kebohongan — meski tujuannya hanya untuk mendapat perhatian — sudah termasuk tanda pertama munafik. Islam mengajarkan agar setiap ucapan kita adalah kebenaran.' },
            { q: 'Laila ingin menghindari sifat munafik. Langkah terbaik yang harus ia lakukan dalam kehidupan sehari-hari adalah...', options: ['A. Rajin shalat saja sudah cukup', 'B. Selalu jujur, menepati setiap janji, dan menjaga amanah yang diberikan', 'C. Menghindari pergaulan dengan banyak orang', 'D. Banyak berdiam diri agar tidak berbuat salah'], answer: 1, exp: 'Cara terbaik menghindari sifat munafik adalah dengan melatih tiga kebalikannya setiap hari: berkata jujur walaupun berat, menepati janji sekecil apapun, dan menjaga kepercayaan.' },
            { q: 'Perhatikan pernyataan berikut: (1) Sifat munafik hanya ada pada orang yang tidak shalat (2) Berdusta, ingkar janji, dan khianat adalah tiga tanda munafik dalam hadis (3) Seorang Muslim bisa memiliki sifat munafik amali meskipun tetap beriman (4) Hadis tentang tanda munafik ini termasuk hadis dha\'if (lemah). Pernyataan yang benar sesuai hadis dan ajaran Islam adalah...', options: ['A. (1) dan (4)', 'B. (2) dan (3)', 'C. (1), (2), dan (3)', 'D. Semua benar'], answer: 1, exp: 'Pernyataan (2) dan (3) adalah benar. Pernyataan (1) salah karena sifat munafik bisa ada pada siapa saja termasuk yang shalat. Pernyataan (4) salah karena hadis ini justru "Muttafaq \'Alaih" — derajat paling sahih.' }
        ]
    },
    {
        id: 'memberi',
        emoji: '🎁',
        title: 'Keutamaan Memberi',
        arabic: 'الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى',
        translation: '"Tangan yang di atas lebih baik daripada tangan yang di bawah." (HR. Bukhari dan Muslim)',
        desc: 'Hadis ini diriwayatkan oleh Hakim bin Hizam radhiyallahu \'anhu. Semangat hadis ini adalah mendorong kita untuk produktif, mandiri, dan dermawan. Islam mengajarkan agar kita berusaha menjadi pemberi, bukan peminta.',
        questions: [
            { q: 'Arti kata "الْيَدُ الْعُلْيَا" dalam hadis di atas adalah...', options: ['A. Tangan yang di bawah', 'B. Tangan yang di atas', 'C. Tangan yang kanan', 'D. Tangan yang kiri'], answer: 1, exp: '"Al-yad" artinya tangan, "al-\'ulyā" artinya yang di atas/lebih tinggi. Para ulama menafsirkan "tangan yang di atas" sebagai tangan orang yang memberi. Memberi itu posisinya lebih tinggi dan mulia daripada meminta.' },
            { q: 'Arti kata "الْيَدِ السُّفْلَى" dalam hadis tersebut adalah...', options: ['A. Tangan yang memberi', 'B. Tangan yang kuat', 'C. Tangan yang di bawah', 'D. Tangan yang lemah'], answer: 2, exp: '"As-suflā" artinya yang di bawah/lebih rendah. Para ulama menafsirkan "tangan yang di bawah" sebagai tangan orang yang meminta atau menerima. Ini bukan berarti hina, tapi menunjukkan bahwa derajat memberi lebih tinggi.' },
            { q: 'Kata "خَيْرٌ" dalam penggalan "خَيْرٌ مِنَ" memiliki arti...', options: ['A. Lebih buruk', 'B. Sama saja', 'C. Lebih baik', 'D. Lebih sedikit'], answer: 2, exp: '"Khairun" adalah bentuk kata perbandingan (isim tafdhil) dari kata "khayr" yang artinya kebaikan. "Khairun min" artinya "lebih baik daripada".' },
            { q: 'Perawi hadis ini yang disebutkan langsung dalam teks adalah...', options: ['A. Umar bin Khattab', 'B. Hakim bin Hizam', 'C. Abu Hurairah', 'D. Abdullah bin Mas\'ud'], answer: 1, exp: 'Hakim bin Hizam adalah sahabat Nabi yang meriwayatkan hadis ini langsung dari Nabi. Ia adalah keponakan Sayyidah Khadijah dan termasuk saudagar kaya Makkah yang dikenal dermawan.' },
            { q: 'Singkatan "radhiyallahu \'anhu" memiliki arti...', options: ['A. Semoga Allah merahmatinya', 'B. Semoga Allah meridhainya', 'C. Semoga Allah mengampuninya', 'D. Semoga Allah memberkatinya'], answer: 1, exp: '"Radhiyallahu \'anhu" artinya "semoga Allah meridhainya". Ungkapan ini khusus digunakan untuk para sahabat Nabi.' },
            { q: 'Maksud utama hadis "tangan yang di atas lebih baik dari tangan yang di bawah" adalah...', options: ['A. Orang yang bertubuh tinggi lebih mulia', 'B. Orang yang memberi lebih mulia daripada orang yang meminta/menerima', 'C. Tangan kanan lebih baik dari tangan kiri', 'D. Orang kaya selalu lebih baik dari orang miskin'], answer: 1, exp: 'Hadis ini menggunakan gaya bahasa kiasan (majaz). "Tangan di atas" = tangan orang yang memberi, "tangan di bawah" = tangan orang yang meminta.' },
            { q: 'Hadis ini memberikan motivasi kepada kita untuk...', options: ['A. Sebanyak mungkin meminta bantuan kepada orang lain', 'B. Hidup hemat dan tidak berbagi', 'C. Giat bekerja agar bisa memberi dan tidak bergantung pada orang lain', 'D. Menabung semua harta tanpa berbagi'], answer: 2, exp: 'Semangat hadis ini adalah mendorong kita untuk produktif, mandiri, dan dermawan. Bekerja keras agar kita punya kemampuan untuk membantu.' },
            { q: 'Hadis ini diriwayatkan secara bersamaan oleh Imam Bukhari dan Muslim. Istilah untuk hadis yang disepakati oleh keduanya adalah...', options: ['A. Hadis Hasan', 'B. Hadis Dha\'if', 'C. Muttafaq \'Alaih', 'D. Hadis Gharib'], answer: 2, exp: '"Muttafaq \'Alaih" artinya "disepakati atasnya" — yaitu disepakati keshahihannya oleh Imam Bukhari dan Muslim sekaligus. Ini adalah derajat hadis paling tinggi.' },
            { q: 'Dalam Islam, bentuk "memberi" yang paling wajib dan termasuk rukun Islam adalah...', options: ['A. Sedekah sunnah', 'B. Hadiah', 'C. Zakat', 'D. Hibah'], answer: 2, exp: 'Zakat adalah satu-satunya bentuk memberi yang hukumnya wajib dan termasuk Rukun Islam ke-4. Selain zakat, ada infak dan sedekah yang sifatnya sunnah.' },
            { q: 'Menurut ajaran Islam, harta yang kita sedekahkan tidak akan berkurang, justru akan...', options: ['A. Habis sepenuhnya', 'B. Bertambah dan diberkahi oleh Allah', 'C. Tetap sama jumlahnya', 'D. Berkurang tapi diganti di akhirat saja'], answer: 1, exp: 'Rasulullah bersabda: "Sedekah tidak akan mengurangi harta." (HR. Muslim). Allah menjanjikan balasan berlipat ganda bagi orang yang bersedekah.' },
            { q: 'Setiap hari Jumat, Pak Budi selalu menyisihkan sebagian penghasilannya untuk diberikan kepada fakir miskin di sekitar rumahnya. Perilaku Pak Budi mencerminkan makna hadis ini karena...', options: ['A. Pak Budi ingin dipuji tetangganya', 'B. Pak Budi berusaha menjadi "tangan di atas" yaitu orang yang suka memberi', 'C. Pak Budi takut hartanya dicuri', 'D. Pak Budi ingin mengurangi pajaknya'], answer: 1, exp: 'Memberi secara rutin meskipun sedikit lebih dicintai Allah. Pak Budi mencontohkan semangat hadis ini: berusaha selalu menjadi tangan yang di atas.' },
            { q: 'Nisa memiliki dua pensil warna. Temannya, Rina, tidak punya sama sekali. Nisa memilih untuk tidak meminjamkan karena takut rusak. Sikap Nisa ini...', options: ['A. Benar, karena pensil itu miliknya sendiri', 'B. Kurang sesuai semangat hadis karena melewatkan kesempatan menjadi "tangan di atas"', 'C. Benar, karena berbagi hanya wajib bagi orang dewasa', 'D. Salah besar dan termasuk dosa besar'], answer: 1, exp: 'Hadis ini mendorong kita untuk selalu mencari peluang memberi atau berbagi, sekecil apapun. Meminjamkan pensil pun sudah termasuk sedekah.' },
            { q: 'Amir selalu meminta uang jajan tambahan kepada orang tuanya padahal sudah cukup, dan malas menabung. Kebiasaan Amir bertentangan dengan semangat hadis ini karena...', options: ['A. Meminta uang kepada orang tua adalah dosa', 'B. Ia terbiasa menjadi "tangan di bawah" dan tidak berusaha mandiri serta berbagi', 'C. Amir tidak rajin shalat', 'D. Amir tidak hormat kepada orang tua'], answer: 1, exp: 'Islam mendorong kita untuk tidak membiasakan diri meminta-minta tanpa keperluan. Biasakanlah memberi, bukan meminta!' },
            { q: 'Bu Aminah seorang guru yang gajinya pas-pasan, namun ia selalu menyempatkan memberi makanan kepada pengemis di depan sekolah. Pelajaran dari Bu Aminah adalah...', options: ['A. Memberi hanya boleh jika sudah kaya', 'B. Memberi tidak harus menunggu kaya — yang penting niat ikhlas dan semampunya', 'C. Guru tidak perlu bersedekah karena sudah mengajar', 'D. Lebih baik menabung dulu sampai banyak baru bersedekah'], answer: 1, exp: 'Rasulullah bersabda: "Selamatkan dirimu dari api neraka walaupun hanya dengan separuh butir kurma." Memberi tidak harus banyak dan tidak harus nunggu kaya.' },
            { q: 'Perhatikan pernyataan berikut: (1) "Tangan di atas" dalam hadis ini berarti orang yang bertubuh tinggi (2) Hadis ini diriwayatkan oleh Hakim bin Hizam dari Nabi (3) Memberi lebih mulia daripada meminta menurut hadis ini (4) Hadis ini termasuk Muttafaq \'Alaih. Pernyataan yang benar dan sesuai dengan hadis serta ajaran Islam adalah...', options: ['A. (1) dan (2)', 'B. (1), (2), dan (3)', 'C. (2), (3), dan (4)', 'D. Semua benar'], answer: 2, exp: 'Pernyataan (1) SALAH — "tangan di atas" adalah kiasan untuk orang yang memberi, bukan soal tinggi badan. Pernyataan (2), (3), dan (4) semuanya BENAR sesuai isi hadis.' }
        ]
    }
];

// STATE MANAGEMENT
let currentThemeId = null;
let currentQuestions = [];
let currentQIndex = 0;
let correctCount = 0;
let hasAnsweredCurrent = false;

// INIT
document.addEventListener("DOMContentLoaded", () => {
    renderDashboard();
    
    document.getElementById('btn-home').addEventListener('click', () => {
        showView('view-dashboard');
    });
});

// UI NAVIGATION
function showView(viewId) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    const view = document.getElementById(viewId);
    view.classList.remove('hidden');
    
    const btnHome = document.getElementById('btn-home');
    if(viewId === 'view-dashboard') {
        btnHome.classList.add('hidden');
        renderDashboard(); // Update scores
    } else {
        btnHome.classList.remove('hidden');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// DASHBOARD
function renderDashboard() {
    const list = document.getElementById('materi-list');
    list.innerHTML = '';
    
    db.forEach(theme => {
        const savedScore = localStorage.getItem(`score_${theme.id}`);
        let scoreBadge = '';
        if(savedScore !== null) {
            const scoreNum = parseInt(savedScore);
            const color = scoreNum > 70 ? 'bg-green-100 text-green-700 border-green-200' : 'bg-orange-100 text-orange-700 border-orange-200';
            scoreBadge = `<span class="${color} border-2 text-xs font-bold px-3 py-1.5 rounded-full inline-block mt-2">Skor Tertinggi: ${savedScore} 🏆</span>`;
        } else {
            scoreBadge = `<span class="bg-slate-100 text-slate-500 border-2 border-slate-200 text-xs font-bold px-3 py-1.5 rounded-full inline-block mt-2">Belum dikerjakan ⏳</span>`;
        }

        list.innerHTML += `
            <div onclick="openMaterial('${theme.id}')" class="bg-white p-5 rounded-3xl shadow-sm border-2 border-blue-100 cursor-pointer hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all">
                <div class="flex justify-between items-start mb-2">
                    <div class="flex gap-3">
                        <div class="text-3xl bg-blue-50 p-2 rounded-2xl h-14 w-14 flex items-center justify-center">${theme.emoji}</div>
                        <div>
                            <h4 class="font-bold text-blue-700 text-lg font-fredoka">${theme.title}</h4>
                            <p class="text-xs text-slate-500 font-bold mt-1">15 Soal Latihan</p>
                        </div>
                    </div>
                </div>
                ${scoreBadge}
            </div>
        `;
    });
}

// MATERIAL VIEW
function openMaterial(id) {
    const theme = db.find(t => t.id === id);
    if(!theme) return;
    
    currentThemeId = theme.id;
    currentQuestions = theme.questions;
    
    document.getElementById('mat-title').innerText = theme.emoji + " " + theme.title;
    document.getElementById('mat-arabic').innerText = theme.arabic;
    document.getElementById('mat-translation').innerText = theme.translation;
    document.getElementById('mat-desc').innerText = theme.desc;
    
    showView('view-material');
}

// QUIZ LOGIC
function startQuiz() {
    currentQIndex = 0;
    correctCount = 0;
    showView('view-quiz');
    renderQuestion();
}

function renderQuestion() {
    hasAnsweredCurrent = false;
    const qData = currentQuestions[currentQIndex];
    
    // Update Header & Progress
    document.getElementById('quiz-progress-text').innerText = `Soal ${currentQIndex + 1} dari ${currentQuestions.length}`;
    const progressPercent = ((currentQIndex) / currentQuestions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;
    
    // Hide Explanation Box & Next Button
    document.getElementById('quiz-explanation-box').classList.add('hidden');
    document.getElementById('btn-next-question').classList.add('hidden');
    
    // Render Question & Options
    document.getElementById('quiz-question').innerText = qData.q;
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option text-sm md:text-base';
        btn.innerText = opt;
        btn.onclick = () => selectOption(idx, btn, qData);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(selectedIndex, btnElement, qData) {
    if(hasAnsweredCurrent) return;
    hasAnsweredCurrent = true;

    // Disable all options
    const buttons = document.querySelectorAll('.quiz-option');
    buttons.forEach(b => b.disabled = true);
    
    const isCorrect = selectedIndex === qData.answer;
    const expBox = document.getElementById('quiz-explanation-box');
    const expText = document.getElementById('quiz-explanation-text');
    const expIcon = document.getElementById('quiz-feedback-icon');
    
    if(isCorrect) {
        correctCount++;
        btnElement.classList.add('correct-answer');
        expIcon.innerText = '🤩';
        expBox.className = 'mt-6 bg-green-50 border-2 border-green-300 rounded-2xl p-4 fade-in';
        expBox.querySelector('div.text-lg').className = 'flex items-center gap-2 mb-2 font-bold text-green-800 text-lg';
        expText.className = 'text-green-900 text-sm font-semibold leading-relaxed';
    } else {
        btnElement.classList.add('wrong-answer');
        buttons[qData.answer].classList.add('correct-answer'); // Show correct answer
        expIcon.innerText = '😅';
        expBox.className = 'mt-6 bg-red-50 border-2 border-red-300 rounded-2xl p-4 fade-in';
        expBox.querySelector('div.text-lg').className = 'flex items-center gap-2 mb-2 font-bold text-red-800 text-lg';
        expText.className = 'text-red-900 text-sm font-semibold leading-relaxed';
    }
    
    expText.innerText = qData.exp;
    expBox.classList.remove('hidden');
    
    // Setup Next Button
    const nextBtn = document.getElementById('btn-next-question');
    nextBtn.classList.remove('hidden');
    if(currentQIndex === currentQuestions.length - 1) {
        nextBtn.innerText = 'Selesai & Lihat Nilai 🏆';
        nextBtn.className = 'w-full mt-5 bg-green-500 hover:bg-green-600 text-white font-bold font-fredoka text-lg py-4 px-4 rounded-2xl border-b-4 border-green-700 active:border-b-0 active:translate-y-1 transition-all fade-in';
    } else {
        nextBtn.innerText = 'Lanjut Soal Berikutnya 👉';
        nextBtn.className = 'w-full mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold font-fredoka text-lg py-4 px-4 rounded-2xl border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all fade-in';
    }
    
    // Scroll a bit to show the explanation completely
    setTimeout(() => {
        window.scrollBy({ top: 150, behavior: 'smooth' });
    }, 100);
}

function nextQuestion() {
    currentQIndex++;
    if(currentQIndex < currentQuestions.length) {
        renderQuestion();
    } else {
        finishQuiz();
    }
}

// RESULT VIEW
function finishQuiz() {
    document.getElementById('quiz-progress-bar').style.width = `100%`;
    
    const finalScore = Math.round((correctCount / currentQuestions.length) * 100);
    
    // Save to LocalStorage (simpan nilai tertinggi)
    const prevScore = localStorage.getItem(`score_${currentThemeId}`);
    if(!prevScore || finalScore > parseInt(prevScore)) {
        localStorage.setItem(`score_${currentThemeId}`, finalScore);
    }
    
    document.getElementById('result-score').innerText = finalScore;
    document.getElementById('result-stats').innerText = `Kamu benar ${correctCount} dari ${currentQuestions.length} soal!`;
    
    let greeting = '';
    let emoji = '';
    if(finalScore >= 90) { greeting = 'Luar Biasa Hebat! 🌟'; emoji = '🥳'; }
    else if(finalScore >= 70) { greeting = 'Bagus Sekali! 👍'; emoji = '😄'; }
    else { greeting = 'Tetap Semangat! 💪'; emoji = '😉'; }
    
    document.getElementById('result-greeting').innerText = greeting;
    document.getElementById('result-emoji').innerText = emoji;
    
    showView('view-result');
}

// WA AUTOMATION
function sendToWhatsApp() {
    const finalScore = Math.round((correctCount / currentQuestions.length) * 100);
    const themeTitle = db.find(t => t.id === currentThemeId).title;
    
    // Nomor tujuan WA
    const targetPhone = "62881026158156"; 
    
    // Template Pesan
    const textMessage = `Assalamu'alaikum Pak Rozak, 
Saya telah selesai mengerjakan soal *Qur'an Hadis Kelas 5*.

📚 *Materi:* ${themeTitle}
🏆 *Nilai Saya:* ${finalScore}
✅ *Benar:* ${correctCount} dari ${currentQuestions.length} soal

Mohon dicatat ya Pak. Terima kasih! 🙏`;

    // Encode text untuk URL
    const waUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(textMessage)}`;
    
    // Buka WhatsApp di tab baru
    window.open(waUrl, '_blank');
}

function goHome() {
    showView('view-dashboard');
}