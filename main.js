document.querySelector('form').addEventListener('submit', function(e) {
    const nama = document.querySelector('input[name="nama"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const pesan = document.querySelector('textarea[name="pesan"]').value.trim();
    
    if (!nama || !email || !pesan) {
        e.preventDefault();
        alert('Semua field harus diisi!');
    } else {
        setTimeout(() => {
            alert('Pesan berhasil terkirim!');
            this.reset();
        }, 500);
    }
});

document.querySelector('img').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
});

document.querySelector('img').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

document.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('focus', function() {
        this.style.borderColor = '#3498db';
    });
});
