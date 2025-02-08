import React from 'react';
import styles from './Help.module.css';

const AdProductReportHelp: React.FC = () => {
    return (
        <div className={styles.guideContainer}>
            <div className={styles.content}>
                <h1 className={styles.title}>广告报告下载指南</h1>

                <div className={styles.step}>
                    <h2 className={styles.stepTitle}>进入报告页面</h2>
                    <p className={styles.stepContent}>1. 点击菜单，选择"广告"</p>
                    <p className={styles.stepContent}>2. 点击"报告中心"</p>
                    <img 
                        className={styles.stepImage}
                        src="/static/images/help/ad_report_menu.png" 
                        alt="报告菜单"
                    />
                </div>

                <div className={styles.step} id="ad-product-report">
                    <h2 className={styles.stepTitle}>已推广商品报告：</h2>
                    <p className={styles.stepContent}>1. 在"报告类型"下拉菜单中选择<strong>商品推广</strong></p>
                    <p className={styles.stepContent}>2. 选择需要分析的时间范围（最长支持90天）</p>
                    <p className={styles.stepContent}>3. 选择需要的维度（如：商品、广告组等）</p>
                    <p className={styles.stepContent}>4. 点击生成报告，选择<strong>CSV</strong>格式</p>
                    <img 
                        className={styles.stepImage}
                        src="/static/images/help/ad_product_generate.png" 
                        alt="生成报告"
                    />
                </div>

                <div className={styles.step} id="ad-performance">
                    <h2 className={styles.stepTitle}>广告效果报告</h2>
                    <p className={styles.stepContent}>1. 在报告类型中选择"广告效果"</p>
                    <p className={styles.stepContent}>2. 选择需要的指标（如：展示量、点击率、转化等）</p>
                    <p className={styles.stepContent}>3. 下载生成的 CSV 文件</p>
                    <img 
                        className={styles.stepImage}
                        src="/static/images/help/ad_performance.png" 
                        alt="下载报告"
                    />
                </div>

                <div className={styles.note}>
                    <h3 className={styles.noteTitle}>注意事项：</h3>
                    <ul className={styles.noteList}>
                        <li>广告数据每日凌晨更新，建议在每天早上8点后下载；</li>
                        <li>请确保下载的是CSV格式的报告；</li>
                        <li>单次下载数据量建议不超过90天；</li>
                        <li>如需查看更多历史数据，请分多次下载；</li>
                        <li>报告生成时间与所选数据量相关，请耐心等待；</li>
                        <li>如遇数据异常，请检查广告账户状态或联系技术支持。</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdProductReportHelp; 