document.addEventListener('DOMContentLoaded', function () {

    const cariProdi = document.getElementById('cariProdi');
    const itemProdi = document.querySelectorAll('.item-prodi');

    if (cariProdi) {
        cariProdi.addEventListener('keyup', function () {
            const kataKunci = cariProdi.value.toLowerCase();

            itemProdi.forEach(function (card) {
                const teksCard = card.innerText.toLowerCase();
                if (teksCard.includes(kataKunci)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const loginAlert = document.getElementById('loginAlert');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = loginEmail.value.trim();
            const pass = loginPassword.value.trim();

            loginAlert.classList.add('d-none');
            loginAlert.classList.remove('alert-danger', 'alert-success');

            if (email === '' || pass === '') {
                loginAlert.classList.remove('d-none');
                loginAlert.classList.add('alert-danger');
                loginAlert.innerText = 'Email dan Password tidak boleh kosong!';
            } else if (!email.includes('@')) {
                loginAlert.classList.remove('d-none');
                loginAlert.classList.add('alert-danger');
                loginAlert.innerText = 'Email harus menggunakan tanda @!';
            } else if (pass.length < 6) {
                loginAlert.classList.remove('d-none');
                loginAlert.classList.add('alert-danger');
                loginAlert.innerText = 'Password minimal 6 karakter!';
            } else {
                loginAlert.classList.remove('d-none');
                loginAlert.classList.add('alert-success');
                loginAlert.innerText = `Login Berhasil! Selamat datang, ${email}.`;
                loginForm.reset();
            }
        });
    }

    const daftarForm = document.getElementById('daftarForm');
    const namaLengkap = document.getElementById('namaLengkap');
    const emailPendaftaran = document.getElementById('emailPendaftaran');
    const pilihanProdi = document.getElementById('pilihanProdi');
    const daftarAlert = document.getElementById('daftarAlert');

    if (daftarForm) {
        daftarForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const nama = namaLengkap.value.trim();
            const email = emailPendaftaran.value.trim();
            const prodi = pilihanProdi.value;

            daftarAlert.classList.add('d-none');
            daftarAlert.classList.remove('alert-danger', 'alert-success');

            if (nama === '' || email === '' || prodi === '') {
                daftarAlert.classList.remove('d-none');
                daftarAlert.classList.add('alert-danger');
                daftarAlert.innerText = 'Semua kolom formulir wajib diisi!';
            } else if (!email.includes('@')) {
                daftarAlert.classList.remove('d-none');
                daftarAlert.classList.add('alert-danger');
                daftarAlert.innerText = 'Format email tidak valid (harus ada @)!';
            } else {
                daftarAlert.classList.remove('d-none');
                daftarAlert.classList.add('alert-success');
                daftarAlert.innerText = `Pendaftaran Berhasil! Terima kasih, ${nama}. Informasi PMB prodi ${prodi} dikirim ke ${email}.`;
                daftarForm.reset();
            }
        });
    }

});