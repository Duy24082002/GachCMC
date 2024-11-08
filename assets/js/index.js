document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a, .header-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();  // Ngăn chuyển trang

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

// Lấy slider container
const sliderContainer = document.querySelector('.slider-container');
let index = 0;  // Chỉ số của ảnh hiện tại

// Số lượng hình ảnh trong slider
const totalImages = document.querySelectorAll('.slider-image').length;

// Hàm chuyển đổi hình ảnh tự động
function moveSlider() {
    if (index >= totalImages) {
        index = 0; // Nếu đã hết ảnh, quay lại ảnh đầu tiên
    }
    const offset = -index * 100; // Tính toán offset để chuyển slider
    sliderContainer.style.transform = `translateX(${offset}%)`;  // Di chuyển slider
    index++;  // Tăng chỉ số
}

// Chạy chức năng di chuyển mỗi 3 giây
setInterval(moveSlider, 3000);
