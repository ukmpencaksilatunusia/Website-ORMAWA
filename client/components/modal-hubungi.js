




function showConfirm() {
    Swal.fire({
        title: "Kirim pesan?",
        text: "Pastikan semua data sudah benar.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Kirim!",
        cancelButtonText: "Batal"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Terkirim!", "Pesan kamu sudah dikirim.", "success");
        }
    });
}