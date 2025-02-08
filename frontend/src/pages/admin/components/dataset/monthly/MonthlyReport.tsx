import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MonthlyReport.module.css';

const MonthlyReport: React.FC = () => {
    const [formData, setFormData] = useState({
        projectName: '',
        reportDate: '',
        paymentRangeReport: null as File | null
    });

    // 生成月份选项
    const generateMonthOptions = () => {
        const options = [];
        const currentYear = new Date().getFullYear();
        
        for (let month = 1; month <= 12; month++) {
            const monthStr = month.toString().padStart(2, '0');
            const value = `${currentYear}-${monthStr}`;
            options.push(
                <option key={value} value={value}>
                    {value}
                </option>
            );
        }
        return options;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const files = (e.target as HTMLInputElement).files;
        
        if (files) {
            setFormData(prev => ({
                ...prev,
                [name]: files[0]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        formDataToSend.append('project_name', formData.projectName);
        formDataToSend.append('report_date', formData.reportDate);
        if (formData.paymentRangeReport) {
            formDataToSend.append('payment_range_report', formData.paymentRangeReport);
        }

        try {
            const response = await fetch('/api/monthly-report', {
                method: 'POST',
                body: formDataToSend
            });
            
            if (response.ok) {
                alert('月报生成成功！');
            } else {
                alert('月报生成失败，请重试。');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('提交失败，请检查网络连接。');
        }
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Amazon Monthly Report 
                    <br/>月报（财报）
                </h1>
                
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="projectName">项目名称:</label>
                    <input
                        list="projects"
                        name="projectName"
                        id="projectName"
                        value={formData.projectName}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="reportDate">报表日期:</label>
                    <select
                        name="reportDate"
                        id="reportDate"
                        value={formData.reportDate}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">请选择日期</option>
                        {generateMonthOptions()}
                    </select>

                    <div className={styles.labelWithHelp}>
                        <label htmlFor="paymentRangeReport">
                            付款报告:
                            <Link 
                                to="/admin/help/payment-report#payment-report" 
                                target="_blank"
                                className={styles.helpIcon}
                            >
                                ?
                            </Link>
                        </label>
                    </div>
                    <input
                        type="file"
                        name="paymentRangeReport"
                        accept=".csv"
                        onChange={handleInputChange}
                        required
                    />

                    <button type="submit">生成月报</button>
                </form>
            </div>
        </div>
    );
};

export default MonthlyReport; 