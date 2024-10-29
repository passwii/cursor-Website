document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const reportTitle = document.getElementById('report-title');
    const dataPreview = document.getElementById('data-preview');
    const salesMenu = document.querySelector('.has-submenu');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const reportType = this.getAttribute('data-report');
            updateContent(reportType);
        });
    });

    if (salesMenu) {
        salesMenu.querySelector('> a').addEventListener('click', function (e) {
            e.preventDefault();
            this.parentElement.classList.toggle('active');
            const submenu = this.nextElementSibling;
            if (submenu) {
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    }

    function updateContent(reportType) {
        let title, content;
        switch (reportType) {
            case 'sales':
                title = '销售报表';
                content = '这里显示销售报表的总览数据...';
                break;
            case 'all-orders':
                title = '所有订单';
                content = '这里显示所有订单的数据...';
                break;
            case 'sales-statistics':
                title = '销售统计';
                content = '这里显示销售统计数据...';
                break;
            case 'product-analysis':
                title = '产品分析';
                content = '这里显示产品分析数据...';
                break;
            case 'inventory':
                title = '库存报表';
                content = '这里显示库存报表的数据...';
                break;
            case 'finance':
                title = '财务报表';
                content = '这里显示财务报表的数据...';
                break;
            case 'users':
                title = '用户管理';
                content = '这里显示用户管理的数据...';
                break;
            case 'settings':
                title = '系统设置';
                content = '这里显示系统设置的选项...';
                break;
            default:
                title = '数据预览';
                content = '请从左侧选择要查看的报表类型';
        }
        reportTitle.textContent = title;
        dataPreview.innerHTML = `<p>${content}</p>`;
    }
});
