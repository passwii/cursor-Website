document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        const menu = dropdown.querySelector('.dropdown-menu');

        // 鼠标悬停时显示下拉菜单
        dropdown.addEventListener('mouseenter', () => {
            menu.style.display = 'block';
        });

        // 鼠标离开时隐藏下拉菜单
        dropdown.addEventListener('mouseleave', () => {
            menu.style.display = 'none';
        });

        // 阻止点击事件的默认行为
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // 如果需要在点击时跳转到对应页面，可以添加以下代码：
            window.location.href = link.getAttribute('href');
        });
    });
});
