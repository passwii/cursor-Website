import React from 'react';
import styles from './ExchangeRate.module.css';

interface ExchangeRateData {
    date: string;
    usd: number;
    cad: number;
    jpy: number;
    eur: number;
    gbp: number;
    mxn: number;
}

const ExchangeRate: React.FC = () => {
    const currentMonthData: ExchangeRateData[] = [
        { date: '2023-05-01', usd: 6.91, cad: 5.08, jpy: 0.051, eur: 7.62, gbp: 8.65, mxn: 0.38 },
        { date: '2023-05-08', usd: 6.92, cad: 5.15, jpy: 0.052, eur: 7.65, gbp: 8.70, mxn: 0.39 },
        { date: '2023-05-15', usd: 6.93, cad: 5.12, jpy: 0.050, eur: 7.60, gbp: 8.68, mxn: 0.39 },
        { date: '2023-05-22', usd: 6.94, cad: 5.10, jpy: 0.051, eur: 7.63, gbp: 8.72, mxn: 0.40 },
        { date: '2023-05-29', usd: 6.95, cad: 5.13, jpy: 0.053, eur: 7.66, gbp: 8.75, mxn: 0.40 },
    ];

    const lastMonthData: ExchangeRateData[] = [
        { date: '2023-04-03', usd: 6.88, cad: 5.05, jpy: 0.050, eur: 7.58, gbp: 8.60, mxn: 0.37 },
        { date: '2023-04-10', usd: 6.89, cad: 5.07, jpy: 0.051, eur: 7.59, gbp: 8.62, mxn: 0.38 },
        { date: '2023-04-17', usd: 6.90, cad: 5.09, jpy: 0.052, eur: 7.61, gbp: 8.64, mxn: 0.38 },
        { date: '2023-04-24', usd: 6.91, cad: 5.10, jpy: 0.051, eur: 7.62, gbp: 8.66, mxn: 0.39 },
    ];

    const twoMonthsAgoData: ExchangeRateData[] = [
        { date: '2023-03-06', usd: 6.85, cad: 5.02, jpy: 0.049, eur: 7.55, gbp: 8.57, mxn: 0.36 },
        { date: '2023-03-13', usd: 6.86, cad: 5.03, jpy: 0.050, eur: 7.56, gbp: 8.58, mxn: 0.37 },
        { date: '2023-03-20', usd: 6.87, cad: 5.04, jpy: 0.051, eur: 7.57, gbp: 8.59, mxn: 0.37 },
        { date: '2023-03-27', usd: 6.88, cad: 5.05, jpy: 0.050, eur: 7.58, gbp: 8.60, mxn: 0.38 },
    ];

    const renderTable = (data: ExchangeRateData[], caption: string) => (
        <table className={styles.table}>
            <caption className={styles.caption}>{caption}</caption>
            <thead>
                <tr>
                    <th>日期</th>
                    <th>美元</th>
                    <th>加元</th>
                    <th>日元</th>
                    <th>欧元</th>
                    <th>英镑</th>
                    <th>墨西哥比索</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.date}>
                        <td>{row.date}</td>
                        <td>{row.usd}</td>
                        <td>{row.cad}</td>
                        <td>{row.jpy}</td>
                        <td>{row.eur}</td>
                        <td>{row.gbp}</td>
                        <td>{row.mxn}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.title}>全球汇率</h1>
                    <a
                        href="https://srh.bankofchina.com/search/whpj/search_cn.jsp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.rightLink}
                    >
                        中国银行外汇牌价
                    </a>
                </div>

                {renderTable(currentMonthData, '当月汇率')}
                {renderTable(lastMonthData, '上个月汇率')}
                {renderTable(twoMonthsAgoData, '前2个月汇率')}
            </div>
        </div>
    );
};

export default ExchangeRate; 