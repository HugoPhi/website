document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let isTransitioning = false;

    function updateCarousel() {
        if (isTransitioning) return; // 如果正在过渡，直接返回
        isTransitioning = true;

        // 移除所有卡片和圆点的 active 类
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // 添加当前卡片和圆点的 active 类
        items[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');

        // 设置过渡完成后解除过渡状态
        setTimeout(() => {
            isTransitioning = false;
        }, 700); // 与过渡时间相同
    }

    function goToNextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function goToPreviousItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    // 自动切换
    setInterval(goToNextItem, 3000);

    // 事件监听：点击圆点跳转到指定卡片
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // 初次调用更新
    updateCarousel();
});
