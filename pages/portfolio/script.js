document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('category-select');
    const projectItems = document.querySelectorAll('.project-item');

    // 监听下拉选择的变化
    categorySelect.addEventListener('change', function () {
        const category = categorySelect.value;

        // 显示所有项目或根据类别显示项目
        projectItems.forEach(function (item) {
            if (category === 'all' || item.classList.contains(category)) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    });

    // 默认显示所有项目
    window.onload = () => {
        projectItems.forEach(item => item.classList.add('show'));
    };
});
