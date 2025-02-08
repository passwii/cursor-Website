import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductAnalysis.module.css';

interface FormData {
    projectName: string;
    reportStartDate: string;
    reportEndDate: string;
    businessReport: File | null;
    paymentReport: File | null;
    adProductReport: File | null;
    basicReport: File | null;
}

const ProductAnalysis: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        projectName: '',
        reportStartDate: '',
        reportEndDate: '',
        businessReport: null,
        paymentReport: null,
        adProductReport: null,
        basicReport: null
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
        formDataToSend.append('report_start_date', formData.reportStartDate);
        formDataToSend.append('report_end_date', formData.reportEndDate);
        
        if (formData.businessReport) {
            formDataToSend.append('business_report', formData.businessReport);
        }
        if (formData.paymentReport) {
            formDataToSend.append('payment_report', formData.paymentReport);
        }
        if (formData.adProductReport) {
            formDataToSend.append('ad_product_report', formData.adProductReport);
        }
        if (formData.basicReport) {
            formDataToSend.append('basic_report', formData.basicReport);
        }

        try {
            const response = await fetch('/api/product-analysis', {
                method: 'POST',
                body: formDataToSend
            });
            
            if (response.ok) {
                alert('产品分析报告生成成功！');
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
                    Amazon Product Analysis
                    <br/>产品分析
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

                    <label htmlFor="reportStartDate">报表日期范围:</label>
                    <div className={styles.dateRange}>
                        <input
                            type="date"
                            name="reportStartDate"
                            id="reportStartDate"
                            value={formData.reportStartDate}
                            onChange={handleInputChange}
                            required
                        />
                        <span>至</span>
                        <input
                            type="date"
                            name="reportEndDate"
                            id="reportEndDate"
                            value={formData.reportEndDate}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <label htmlFor="businessReport">业务报告:</label>
                    <input
                        type="file"
                        name="businessReport"
                        id="businessReport"
                        accept=".csv"
                        onChange={handleInputChange}
                        required
                    />

                    <div className={styles.labelWithHelp}>
                        <label htmlFor="paymentReport">
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
                        name="paymentReport"
                        id="paymentReport"
                        accept=".csv"
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="adProductReport">广告报表:</label>
                    <input
                        type="file"
                        name="adProductReport"
                        id="adProductReport"
                        accept=".xlsx"
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="basicReport">基础信息表:</label>
                    <input
                        type="file"
                        name="basicReport"
                        id="basicReport"
                        accept=".csv"
                        onChange={handleInputChange}
                        required
                    />

                    <button type="submit">生成产品分析</button>
                </form>
            </div>
        </div>
    );
};

export default ProductAnalysis; 