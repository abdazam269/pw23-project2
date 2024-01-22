// Menammbahkan item class pada daftar yg dipilih
let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach((item) =>{
        item.classList.remove("hovered");
    })
    this.classList.add("hovered");   
}

list.forEach(item => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};

// Tables
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const orderRows = document.querySelectorAll('.order-row');
    const tableBody = document.querySelector('.recentOrders table tbody');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        // Filter the rows based on the search term
        const matchingRows = Array.from(orderRows).filter(row => {
            const foodName = row.querySelector('td:first-child').textContent.toLowerCase();
            return foodName.includes(searchTerm);
        });

        // Hapus semua baris table 
        tableBody.innerHTML = '';

        // Memindahkan barisan yg cocok ke bagian atas table
        matchingRows.forEach(row => tableBody.appendChild(row));

        // Menambahkan baris yg tersisa ke dalam table
        orderRows.forEach(row => {
            if (!matchingRows.includes(row)) {
                tableBody.appendChild(row);
            }
        });
    });
});


// document.addEventListener('DOMContentLoaded', function () {
//     const searchInput = document.getElementById('searchInput');
//     const orderRows = document.querySelectorAll('.order-row');

//     searchInput.addEventListener('input', function () {
//         const searchTerm = searchInput.value.toLowerCase();

//         orderRows.forEach(function (row) {
//             const foodName = row.querySelector('td:first-child').textContent.toLowerCase();

//             if (foodName.includes(searchTerm)) {
//                 row.style.display = '';
//             } else {
//                 row.style.display = 'none';
//             }
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const searchInput = document.getElementById('searchInput');
//     const orderTable = document.getElementById('orderTable');

//     searchInput.addEventListener('input', function () {
//         const searchTerm = searchInput.value.toLowerCase();
//         const orderRows = document.querySelectorAll('.order-row');

//         orderRows.forEach(function (row) {
//             const foodName = row.querySelector('td:first-child').textContent.toLowerCase();

//             if (foodName.includes(searchTerm)) {
//                 // Memindahkan baris ke atas tabel
//                 orderTable.insertBefore(row, orderTable.firstChild);
//                 row.style.display = '';  // Menampilkan baris yang diubah posisinya
//             } else {
//                 row.style.display = 'none';
//             }
//         });
//     });
// });


