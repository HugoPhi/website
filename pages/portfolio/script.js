
document.addEventListener('DOMContentLoaded', function () {
    // 获取所有类别按钮
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectItems = document.querySelectorAll('.project-item');

    // 为每个按钮添加点击事件
    categoryButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const category = button.getAttribute('data-category');

            // 显示所有项目或根据类别显示项目
            projectItems.forEach(function (item) {
                if (category === 'all' || item.classList.contains(category)) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            });
        });
    });

    // 默认显示所有项目
    window.onload = () => {
        projectItems.forEach(item => item.classList.add('show'));
    };
});
