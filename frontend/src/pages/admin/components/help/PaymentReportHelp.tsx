import React from 'react';
import styles from './Help.module.css';

const PaymentReportHelp: React.FC = () => {
    return (
        <div className={styles.guideContainer}>
            <div className={styles.content}>
                <h1 className={styles.title}>支付报告下载指南</h1>

                <div className={styles.step}>
                    <h2 className={styles.stepTitle}>进入支付报告</h2>
                    <p className={styles.stepContent}>1. 点击"财务"菜单</p>
                    <p className={styles.stepContent}>2. 选择"支付报告"</p>
                    <img 
                        className={styles.stepImage}
                        src="/static/images/help/payment_menu.png" 
                        alt="支付菜单"
                    />
                </div>

                <div className={styles.step}>
                    <h2 className={styles.stepTitle}>交易明细报告</h2>
                    <p className={styles.stepContent}>1. 选择日期范围</p>
                    <p className={styles.stepContent}>2. 选择交易类型（收入/支出/退款等）</p>
                    <p className={styles.stepContent}>3. 选择支付方式（可选）</p>
                    <p className={styles.stepContent}>4. 点击"导出报告"</p>
                    <img 
                        className={styles.stepImage}
                        src="/static/images/help/transaction_report.png" 
                        alt="交易报告"
                    />
                </div>

                <div className={styles.step}>
                    <h2 className={styles.stepTitle}>结算报告</h2>
                    <p className={styles.stepContent}>1. 切换到"结算"标签</p>
                    <p className={styles.stepContent}>2. 选择结算周期</p>
                    <p className={styles.stepContent}>3. 选择账户（如有多个）</p>
                    <p className={styles.stepContent}>4. 下载结算报告</p>
                </div>

                <div className={styles.note}>
                    <h3 className={styles.noteTitle}>注意事项：</h3>
                    <ul className={styles.noteList}>
                        <li>交易数据通常有1-2天延迟；</li>
                        <li>结算报告每月生成一次；</li>
                        <li>可导出PDF或Excel格式；</li>
                        <li>建议定期核对交易记录；</li>
                        <li>异常交易请及时联系客服处理；</li>
                        <li>重要财务数据请妥善保存。</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PaymentReportHelp; 