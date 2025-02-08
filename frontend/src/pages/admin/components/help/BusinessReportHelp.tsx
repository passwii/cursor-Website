import React from 'react';
import styles from './Help.module.css';

const BusinessReportHelp: React.FC = () => {
    return (
        <div className={styles.guideContainer}>
            <div className={styles.content}>
                <h1 className={styles.title}>商业报告下载指南</h1>

                <div className={styles.step}>
                    <h2 className={styles.stepTitle}>进入报告页面</h2>
                    <p className={styles.stepContent}>1. 点击菜单，选择"报告"</p>
                    <p className={styles.stepContent}>2. 点击"商业报告"</p>
                    <img 
                        className={styles.stepImage}
                        src="/static/images/help/business_report_menu.png" 
                        alt="商业报告菜单"
                    />
                </div>

                <div className={styles.step}>
                    <h2 className={styles.stepTitle}>销售报告</h2>
                    <p className={styles.stepContent}>1. 选择"销售"标签页</p>
                    <p className={styles.stepContent}>2. 选择日期范围（建议不超过90天）</p>
                    <p className={styles.stepContent}>3. 选择报告类型（日报/周报/月报）</p>
                    <p className={styles.stepContent}>4. 点击"下载报告"按钮</p>
                    <img 
                        className={styles.stepImage}
                        src="/static/images/help/sales_report.png" 
                        alt="销售报告"
                    />
                </div>

                <div className={styles.step}>
                    <h2 className={styles.stepTitle}>库存报告</h2>
                    <p className={styles.stepContent}>1. 切换到"库存"标签页</p>
                    <p className={styles.stepContent}>2. 选择仓库（可多选）</p>
                    <p className={styles.stepContent}>3. 选择商品类别（可选）</p>
                    <p className={styles.stepContent}>4. 点击"生成报告"</p>
                </div>

                <div className={styles.note}>
                    <h3 className={styles.noteTitle}>注意事项：</h3>
                    <ul className={styles.noteList}>
                        <li>销售数据每日凌晨3点更新；</li>
                        <li>库存数据实时更新；</li>
                        <li>报告格式支持CSV和Excel；</li>
                        <li>建议选择合适的时间范围，避免数据量过大；</li>
                        <li>可以使用筛选功能精确查找所需数据；</li>
                        <li>重要数据建议定期备份保存。</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BusinessReportHelp; 