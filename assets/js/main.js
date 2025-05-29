const text = " Dear Phương Linh";  
let index = 0;  

// Hàm để hiển thị văn bản theo kiểu gõ  
function typeWriter() {  
    if (index < text.length) {  
        document.getElementById("typingText").innerHTML += text.charAt(index);  
        index++;  
        setTimeout(typeWriter, 150);  
    }  
}  

// Hàm để thực hiện hiệu ứng tải  
function loadContent() {  
    console.log(1111)
    const c = setTimeout(() => {  
        document.body.classList.remove("not-loaded");  
        clearTimeout(c);  
    }, 3000);  
}  

// Gán sự kiện click cho button  
document.getElementById('loadButton').addEventListener('click', () => {  
    loadContent(); // Gọi hàm loadContent  
    const audio = document.getElementById('mySound'); // Lấy đối tượng audio  
    audio.play(); // Phát âm thanh  
});  

// Sự kiện load trang  
window.addEventListener('load', () => {  
    // Bạn có thể gọi loadContent() ở đây nếu muốn tự động load khi trang được tải  
    // loadContent(); // Nếu bạn muốn tự động load khi trang được tải  
});  

// Bắt đầu gõ chữ khi trang được tải  
window.onload = typeWriter;