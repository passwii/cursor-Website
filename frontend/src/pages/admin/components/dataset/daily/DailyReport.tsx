import React, { useState } from 'react';
import styles from './DailyReport.module.css';

const DailyReport: React.FC = () => {
    const [formData, setFormData] = useState({
        projectName: '',
        reportDate: '',
        salesReport: null as File | null,
        adReport: null as File | null,
        fbaReport: null as File | null
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        
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
        if (formData.salesReport) formDataToSend.append('sales_report', formData.salesReport);
        if (formData.adReport) formDataToSend.append('ad_report', formData.adReport);
        if (formData.fbaReport) formDataToSend.append('fba_report', formData.fbaReport);

        try {
            const response = await fetch('/api/daily-report', {
                method: 'POST',
                body: formDataToSend
            });
            
            if (response.ok) {
                alert('报告生成成功！');
            } else {
                alert('报告生成失败，请重试。');
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
                    Amazon Sales Report <br/>日/周报
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
                    <input
                        type="text"
                        name="reportDate"
                        placeholder="输入日期，月度则为2024-08"
                        value={formData.reportDate}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="salesReport">所有订单:</label>
                    <input
                        type="file"
                        name="salesReport"
                        accept=".txt"
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="adReport">广告报表:</label>
                    <input
                        type="file"
                        name="adReport"
                        accept=".xlsx"
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="fbaReport">FBA库存:</label>
                    <input
                        type="file"
                        name="fbaReport"
                        accept=".txt"
                        onChange={handleInputChange}
                        required
                    />

                    <button type="submit">生成日报</button>
                </form>
            </div>
        </div>
    );
};

export default DailyReport; 