document.addEventListener('DOMContentLoaded', function() {
        // --- Animasi Judul Mewah (Letter by Letter) ---
        const animatedTitle = document.getElementById('animated-title');
        if (animatedTitle) {
            const originalText = animatedTitle.textContent.trim();
            const words = originalText.split(' '); // Pecah teks menjadi kata-kata
            animatedTitle.innerHTML = ''; // Kosongkan judul asli

            let letterIndex = 0; // Indeks global untuk delay animasi

            words.forEach((word, index) => {
                const wordWrapper = document.createElement('span');
                wordWrapper.className = 'word'; // Bungkus setiap kata agar tidak pecah

                // Pecah setiap kata menjadi huruf untuk dianimasikan
                word.split('').forEach(letter => {
                    const letterSpan = document.createElement('span');
                    letterSpan.className = 'letter';
                    letterSpan.textContent = letter;
                    letterSpan.style.animationDelay = `${letterIndex * 0.04}s`;
                    wordWrapper.appendChild(letterSpan);
                    letterIndex++;
                });

                animatedTitle.appendChild(wordWrapper);

                // Tambahkan spasi biasa setelah setiap kata, kecuali yang terakhir
                if (index < words.length - 1) {
                    animatedTitle.appendChild(document.createTextNode(' '));
                }
            });
        }

        // --- Konfigurasi ---
        const NOMOR_WHATSAPP = '6285767571976'; // Ganti dengan nomor WhatsApp tujuan

        // --- Cek Status Restoran ---
        const statusEl = document.getElementById('status-restoran');
        if (statusEl) {
            const jamBuka = 16; // Jam 4 sore
            // Jam tutup adalah 00:00, artinya restoran buka dari jam 16:00 hingga 23:59.
            
            const sekarang = new Date();
            const jamSekarang = sekarang.getHours();

            if (jamSekarang >= jamBuka) { // Buka jika jam sekarang 16, 17, ..., 23
                statusEl.textContent = '✅ Buka sekarang';
                statusEl.classList.add('buka');
            } else { // Tutup jika jam sekarang 0, 1, ..., 15
                statusEl.textContent = `❌ Tutup, buka lagi jam ${jamBuka}:00`;
                statusEl.classList.add('tutup');
            }
        }

        // --- Data Menu (Nama & Harga) ---
        // Anda bisa mengubah harga di sini
        const menuData = {
            "AYAM & BEBEK": [
                { name: "Bebek Goreng", price: 26000 }, { name: "Bebek Goreng + Nasi", price: 32000 },
                { name: "Bebek Cabe Ijo", price: 26000 }, { name: "Bebek Cabe Ijo + Nasi", price: 32000 },
                { name: "Bebek Cabe Merah", price: 26000 }, { name: "Bebek Cabe Merah + Nasi", price: 32000 },
                { name: "Ayam Kremes", price: 14000 }, { name: "Ayam Kremes + Nasi", price: 20000 },
                { name: "Ayam Cabe Ijo", price: 14000 }, { name: "Ayam Cabe Ijo + Nasi", price: 20000 },
                { name: "Ayam Geprek", price: 14000 }, { name: "Ayam Geprek + Nasi", price: 20000 },
                { name: "Ayam Penyet Kremes", price: 18000 }, { name: "Ayam Penyet Kremes + Nasi", price: 24000 },
                { name: "Ayam Penyet Cabe Ijo", price: 18000 }, { name: "Ayam Penyet Cabe Ijo + Nasi", price: 24000 },
                { name: "Ayam Penyet Cabe Merah", price: 18000 }, { name: "Ayam Penyet Cabe Merah + Nasi", price: 24000 },
            ],
            "IKAN & LAINNYA": [
                { name: "Pecel Lele", price: 15000 }, { name: "Pecel Lele + Nasi", price: 20000 },
                { name: "Lele Cabe Ijo", price: 16000 }, { name: "Lele Cabe Ijo + Nasi", price: 22000 },
                { name: "Lele Cabe Merah", price: 16000 }, { name: "Lele Cabe Merah + Nasi", price: 22000 },
                { name: "3T (Telur, Tahu, Tempe)", price: 14000 }, { name: "3T + Nasi", price: 20000 },
                { name: "Udang Goreng Tepung", price: 30000 }, { name: "Sotong Goreng Tepung", price: 30000 },
            ],
            "NASI GORENG": [
                { name: "Nasi Putih", price: 6000 },
                { name: "Nasgor Biasa", price: 16000 },
                { name: "Nasgor Biasa + Telur", price: 20000 },
                { name: "Nasgor Kampung", price: 18000 },
                { name: "Nasgor Kampung + Telur", price: 22000 },
                { name: "Nasgor Kampung + Ikan Teri", price: 25000 },
                { name: "Nasgor Kampung + Seafood", price: 28000 },
                { name: "Nasgor Pedas + Telur", price: 20000 },
                { name: "Nasgor Mie", price: 18000 }, { name: "Nasgor Mie + Telur", price: 22000 },
                { name: "Nasgor Semrawut", price: 18000 }, { name: "Nasgor Semrawut + Telur", price: 22000 },
                { name: "Nasgor Seafood + Telur", price: 30000 },
                { name: "Nasgor + Bakso", price: 22000 }, { name: "Nasgor + Sosis", price: 22000 },
                { name: "Nasgor + Ayam Goreng", price: 26000 }, { name: "Nasgor + Sayuran", price: 18000 },
            ],
            "MIE, KWETIAU, BIHUN": [
                { name: "Mie Goreng", price: 16000 }, { name: "Mie Goreng + Telur", price: 20000 },
                { name: "Mie Goreng Nyemek", price: 16000 }, { name: "Mie Goreng Nyemek + Telur", price: 20000 },
                { name: "Mie Rebus", price: 16000 }, { name: "Mie Rebus + Telur", price: 20000 },
                { name: "Kwetio Goreng", price: 17000 }, { name: "Kwetio Goreng + Telur", price: 21000 },
                { name: "Kwetio Nyemek", price: 17000 }, { name: "Kwetio Nyemek + Telur", price: 21000 },
                { name: "Kwetio Rebus", price: 17000 }, { name: "Kwetio Rebus + Telur", price: 21000 },
                { name: "Bihun Goreng", price: 16000 }, { name: "Bihun Goreng + Telur", price: 20000 },
                { name: "Bihun Nyemek", price: 16000 }, { name: "Bihun Nyemek + Telur", price: 20000 },
                { name: "Bihun Rebus", price: 16000 }, { name: "Bihun Rebus + Telur", price: 20000 },
            ],
            "SAYUR & SOP": [
                { name: "Cah Kangkung", price: 12000 }, { name: "Capcay", price: 20000 },
                { name: "Capcay + Ayam", price: 28000 }, { name: "Capcay + Seafood", price: 30000 },
                { name: "Soup Ayam", price: 25000 }, { name: "Soup Tulang", price: 30000 },
                { name: "Soup Telur", price: 20000 }, { name: "Soup Sayur", price: 20000 },
            ],
            "MINUMAN": [
                { name: "Teh O", price: 5000 }, { name: "Teh Obeng", price: 5000 },
                { name: "Kopi O", price: 6000 }, { name: "Es Jeruk", price: 8000 },
                { name: "Jeruk Hangat", price: 8000 }, { name: "Milo Es", price: 8000 },
                { name: "Milo Hangat", price: 8000 }, { name: "Aneka Juice", price: 12000 },
                { name: "Es Sirup", price: 6000 }, { name: "Nutri Sari", price: 8000 },
            ]
        };

        // --- Generate Menu Display & Order Form ---
        const menuGrid = document.querySelector('.menu-grid');
        const menuPilihan = document.querySelector('.menu-pilihan');
        let itemIdCounter = 1;
        
        // Cek jika kita berada di halaman menu.html
        if (menuGrid) {
            for (const kategori in menuData) {
                const kategoriDiv = document.createElement('div');
                kategoriDiv.className = 'menu-kategori animate-on-scroll';
                const kategoriJudul = document.createElement('h3');
                kategoriJudul.textContent = kategori;
                const ul = document.createElement('ul');

                menuData[kategori].forEach(item => {
                    const li = document.createElement('li');
                    
                    // Buat span untuk info nama dan harga
                    const itemInfo = document.createElement('span');
                    itemInfo.className = 'menu-item-info';
                    itemInfo.textContent = `${item.name} - Rp ${item.price.toLocaleString('id-ID')}`;

                    // Buat tombol "Tambah"
                    const addButton = document.createElement('a');
                    addButton.href = `pesan.html?menu=${encodeURIComponent(item.name)}`;
                    addButton.className = 'tombol-tambah-keranjang';
                    addButton.textContent = 'Tambah';

                    li.append(itemInfo, addButton);
                    ul.appendChild(li);
                });

                kategoriDiv.appendChild(kategoriJudul);
                kategoriDiv.appendChild(ul);
                menuGrid.appendChild(kategoriDiv);
            }
        }

        // Cek jika kita berada di halaman pesan.html
        if (menuPilihan) {
            for (const kategori in menuData) {
                const formKategoriContainer = document.createElement('div');
                formKategoriContainer.className = 'form-menu-kategori';
                const formKategoriJudul = document.createElement('h4');
                formKategoriJudul.textContent = kategori;
                formKategoriContainer.appendChild(formKategoriJudul);

                const itemsContainer = document.createElement('div');
                itemsContainer.className = 'form-menu-items-grid';

                menuData[kategori].forEach(item => {
                    const itemPilihanDiv = document.createElement('div');
                    itemPilihanDiv.className = 'item-pilihan';
                    const uniqueId = `item${itemIdCounter++}`;
                    itemPilihanDiv.innerHTML = `
                        <input type="checkbox" id="${uniqueId}" value="${item.name}" data-price="${item.price}">
                        <label for="${uniqueId}">${item.name}</label>
                        <input type="number" min="1" value="1" style="display: none;">
                    `;
                    itemsContainer.appendChild(itemPilihanDiv);
                });

                formKategoriContainer.appendChild(itemsContainer);
                menuPilihan.appendChild(formKategoriContainer);
            }
        }

        // --- Menu Search & Filter Logic ---
        const searchInput = document.getElementById('menu-search-input');
        const categoryFiltersContainer = document.getElementById('category-filters');

        // Pastikan elemen filter ada (hanya di halaman pesan.html)
        if (searchInput && categoryFiltersContainer) {
            const allMenuCategories = document.querySelectorAll('.form-menu-kategori');

            // 1. Generate Filter Buttons
            const categories = ['Semua', ...Object.keys(menuData)];
            categories.forEach(category => {
                const btn = document.createElement('button');
                btn.type = 'button'; // Mencegah form terkirim saat diklik
                btn.className = 'filter-btn';
                btn.textContent = category;
                btn.dataset.category = category;
                if (category === 'Semua') {
                    btn.classList.add('active');
                }
                categoryFiltersContainer.appendChild(btn);
            });

            // 2. The Filter Function
            function filterMenu() {
                const searchTerm = searchInput.value.toLowerCase().trim();
                const activeCategory = categoryFiltersContainer.querySelector('.filter-btn.active').dataset.category;

                allMenuCategories.forEach(kategoriDiv => {
                    const kategoriName = kategoriDiv.querySelector('h4').textContent;
                    let isCategoryVisible = false;

                    const categoryMatchesFilter = (activeCategory === 'Semua' || kategoriName === activeCategory);
                    
                    if (!categoryMatchesFilter) {
                        kategoriDiv.style.display = 'none';
                        return;
                    }

                    const items = kategoriDiv.querySelectorAll('.item-pilihan');
                    items.forEach(item => {
                        const itemName = item.querySelector('label').textContent.toLowerCase();
                        const itemMatchesSearch = itemName.includes(searchTerm);

                        if (itemMatchesSearch) {
                            // Menggunakan 'grid' agar konsisten dengan CSS dan mencegah bug layout
                            item.style.display = 'grid';
                            isCategoryVisible = true;
                        } else {
                            item.style.display = 'none';
                        }
                    });
                    kategoriDiv.style.display = isCategoryVisible ? 'block' : 'none';
                });
            }

            // 3. Add Event Listeners
            searchInput.addEventListener('input', filterMenu);
            categoryFiltersContainer.addEventListener('click', function(e) {
                if (e.target.classList.contains('filter-btn')) {
                    categoryFiltersContainer.querySelector('.filter-btn.active').classList.remove('active');
                    e.target.classList.add('active');
                    filterMenu();
                }
            });
        }

        // --- Dark/Light Mode Toggle ---
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        // Function to apply theme
        const applyTheme = (theme) => {
            if (theme === 'dark') {
                body.classList.add('dark-mode');
                themeToggle.checked = true;
            } else {
                body.classList.remove('dark-mode');
                themeToggle.checked = false;
            }
        };

        // Check for saved theme in localStorage
        const savedTheme = localStorage.getItem('theme');
        // Check for system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Apply saved theme or system preference, default to light
        applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

        themeToggle.addEventListener('change', () => {
            const newTheme = themeToggle.checked ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });

        // --- Hamburger Menu Logic ---
        const hamburger = document.querySelector('.hamburger-menu');
        const navMenu = document.querySelector('.navigasi');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navMenu.classList.toggle('open');
            document.body.classList.toggle('no-scroll');
        });
        document.querySelectorAll('.navigasi a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navMenu.classList.remove('open');
                document.body.classList.remove('no-scroll');
            });
        });

        // --- Total Calculation Logic ---
        const totalHargaEl = document.getElementById('total-harga');
        // Pastikan elemen form ada (hanya di halaman pesan.html)
        if (menuPilihan && totalHargaEl) {
            function calculateTotal() {
                let total = 0;
                const checkedItems = document.querySelectorAll('.item-pilihan input[type="checkbox"]:checked');
                checkedItems.forEach(item => {
                    const price = parseFloat(item.dataset.price);
                    const quantity = parseInt(item.parentElement.querySelector('input[type="number"]').value) || 1;
                    total += price * quantity;
                });
                totalHargaEl.textContent = `Rp ${total.toLocaleString('id-ID')}`;
            }

            // --- Event Listeners for Form ---
            menuPilihan.addEventListener('change', function(e) {
                if (e.target.type === 'checkbox') {
                    const inputJumlah = e.target.parentElement.querySelector('input[type="number"]');
                    inputJumlah.style.display = e.target.checked ? 'inline-block' : 'none';
                    if (!e.target.checked) { inputJumlah.value = 1; } // Reset jumlah jika di-uncheck
                    calculateTotal();
                }
            });
            menuPilihan.addEventListener('input', function(e) {
                if (e.target.type === 'number') {
                    calculateTotal();
                }
            });

            // --- Auto-check item from URL parameter ---
            // Cek apakah ada parameter 'menu' di URL (misal: pesan.html?menu=Nasi%20Goreng)
            const urlParams = new URLSearchParams(window.location.search);
            const menuFromUrl = urlParams.get('menu');

            if (menuFromUrl) {
                // Cari checkbox yang sesuai dengan nama menu dari URL
                const allCheckboxes = menuPilihan.querySelectorAll('input[type="checkbox"]');
                allCheckboxes.forEach(checkbox => {
                    if (checkbox.value === menuFromUrl) {
                        checkbox.checked = true;
                        // Tampilkan input jumlah
                        const inputJumlah = checkbox.parentElement.querySelector('input[type="number"]');
                        inputJumlah.style.display = 'inline-block';
                        calculateTotal(); // Hitung ulang total
                    }
                });
            };
        }

        // --- Logika untuk Opsi Pesanan (Card System) ---
        const orderOptionsContainer = document.getElementById('order-options-container');
        const alamatGrup = document.getElementById('alamat-grup');
        const alamatTextarea = document.getElementById('alamat');
        const nomorMejaGrup = document.getElementById('nomor-meja-grup');
        const nomorMejaSelect = document.getElementById('nomor-meja');
        const hiddenOrderOptionInput = document.getElementById('opsi-pesanan-terpilih');

        // Pastikan elemen-elemen ini ada (hanya di halaman pesan.html)
        if (orderOptionsContainer) {
            // Atur keadaan awal: sembunyikan semua field opsional
            alamatGrup.style.display = 'none';
            alamatTextarea.required = false;
            nomorMejaGrup.style.display = 'none';
            nomorMejaSelect.required = false;

            orderOptionsContainer.addEventListener('click', function(e) {
                const clickedCard = e.target.closest('.option-card');
                if (!clickedCard) return;

                const selectedOption = clickedCard.dataset.option;
                const allOptionCards = orderOptionsContainer.querySelectorAll('.option-card');

                // Reset semua field opsional sebelum menampilkan yang baru
                alamatGrup.style.display = 'none';
                alamatTextarea.required = false;
                nomorMejaGrup.style.display = 'none';
                nomorMejaSelect.required = false;

                allOptionCards.forEach(card => card.classList.remove('selected'));
                clickedCard.classList.add('selected');

                hiddenOrderOptionInput.value = selectedOption;

                if (selectedOption === 'Delivery') {
                    alamatGrup.style.display = 'block';
                    alamatTextarea.required = true;
                } else if (selectedOption === 'Makan di Tempat') {
                    nomorMejaGrup.style.display = 'block';
                    nomorMejaSelect.required = true;
                }
            });
        }

        // --- Form Submission to WhatsApp ---
        const orderForm = document.getElementById('form-pesan-online');
        if (orderForm) {
            orderForm.addEventListener('submit', function(event) {
                event.preventDefault();
                
                const nama = document.getElementById('nama').value;
                const telepon = document.getElementById('telepon').value;
                const opsiPesanan = document.getElementById('opsi-pesanan-terpilih').value;
                const alamat = document.getElementById('alamat').value;
                const nomorMeja = document.getElementById('nomor-meja').value;
                const catatan = document.getElementById('catatan').value;
                const totalHarga = document.getElementById('total-harga').textContent;

                if (!opsiPesanan) {
                    alert('Silakan pilih salah satu Opsi Pesanan terlebih dahulu.');
                    orderOptionsContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return;
                }

                let pesanan = '';
                const itemsPilihan = document.querySelectorAll('.item-pilihan input[type="checkbox"]:checked');

                if (itemsPilihan.length === 0) {
                    alert('Anda belum memilih menu apapun. Silakan pilih minimal satu menu.');
                    document.querySelector('.menu-pilihan').scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return;
                }

                itemsPilihan.forEach(item => {
                    const jumlah = item.parentElement.querySelector('input[type="number"]').value;
                    pesanan += `- ${item.value} (x${jumlah})\n`;
                });
                
                let pesanWhatsApp = `
Halo *Rumah Makan Setia Rasa*, saya ingin konfirmasi pesanan:

*Nama:* ${nama}
*No. HP:* ${telepon}
*Opsi Pesanan:* ${opsiPesanan}
`;
                if (opsiPesanan === 'Delivery') {
                    pesanWhatsApp += `*Alamat:* ${alamat}\n`;
                } else if (opsiPesanan === 'Makan di Tempat') {
                    pesanWhatsApp += `*Nomor Meja:* ${nomorMeja}\n`;
                }
                pesanWhatsApp += `
*Pesanan:*
${pesanan}
*Catatan:* ${catatan || '-'}
*==========================*
*Total Pembayaran:* ${totalHarga}

Pembayaran sudah dilakukan. *Saya akan segera mengirimkan bukti transfer di chat ini.* Mohon segera diproses. Terima kasih!`;

                const urlWhatsApp = `https://wa.me/${NOMOR_WHATSAPP}?text=${encodeURIComponent(pesanWhatsApp.trim())}`;
                window.open(urlWhatsApp, '_blank');
            });
        }

        // --- Floating WhatsApp Button ---
        const floatingBtn = document.getElementById('whatsapp-floating-btn');
        if (floatingBtn) {
            const pesanDefault = "Halo, saya tertarik untuk memesan dari Rumah Makan Setia Rasa.";
            floatingBtn.href = `https://wa.me/${NOMOR_WHATSAPP}?text=${encodeURIComponent(pesanDefault)}`;
        }

        // --- Animate on Scroll ---
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, observerOptions);

        // Find all elements to animate and observe them
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        elementsToAnimate.forEach(el => {
            observer.observe(el);
        });
    });
