document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.querySelector(".carousel-next");
    const prevButton = document.querySelector(".carousel-prev");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".dot");
    let activeIndex = 0; // 当前显示的卡片索引
    let autoPlayInterval;

    let touchStartX = 0;
    let touchEndX = 0;

    function updateCarousel() {
        carouselItems.forEach(item => item.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        carouselItems[activeIndex].classList.add("active");
        dots[activeIndex].classList.add("active");
    }

    function goToNextItem() {
        activeIndex = (activeIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function goToPreviousItem() {
        activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(goToNextItem, 3000); // 每3秒自动切换到下一张
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        setTimeout(startAutoPlay, 0); // 5秒后重新开始自动播放
    }

    nextButton.addEventListener("click", function () {
        goToNextItem();
        resetAutoPlay();
    });

    prevButton.addEventListener("click", function () {
        goToPreviousItem();
        resetAutoPlay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            activeIndex = index;
            updateCarousel();
            resetAutoPlay();
        });
    });

    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX; // 获取触摸开始时的X位置
    }

    function handleTouchEnd(event) {
        touchEndX = event.changedTouches[0].clientX; // 获取触摸结束时的X位置

        if (touchEndX < touchStartX) {
            goToNextItem(); // 向左滑动，切换到下一张卡片
        }
        if (touchEndX > touchStartX) {
            goToPreviousItem(); // 向右滑动，切换到上一张卡片
        }

        resetAutoPlay(); // 滑动后暂停自动播放并恢复
    }

    document.querySelector(".carousel-wrapper").addEventListener("touchstart", handleTouchStart);
    document.querySelector(".carousel-wrapper").addEventListener("touchend", handleTouchEnd);

    updateCarousel();

    startAutoPlay();
});
