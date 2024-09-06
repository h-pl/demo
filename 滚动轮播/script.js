
// 获取carousel元素
const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
const totalItems = items.length;

// 确定每个item的高度
const itemHeight = items[0].offsetHeight;

// 定义滚动函数
function scrollNextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    const offset = -currentIndex * itemHeight; // 使用实际高度
    carousel.style.transform = `translateY(${offset}px)`;
}

// 每次滚动后暂停1秒
setInterval(scrollNextItem, 2000);






