import React, { useState } from 'react';
import styles from './FbaRevisePdf.module.css';

const FbaRevisePdf: React.FC = () => {
    const [originalText, setOriginalText] = useState('');
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [replacementText, setReplacementText] = useState('FBA');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!selectedFiles || !originalText) return;

        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('fba_label_pdf', selectedFiles[i]);
        }
        formData.append('original_text', originalText);
        formData.append('replacement_text', replacementText);

        try {
            const response = await fetch('/api/main_fba_revise_pdf/process_fba_revise_pdf', {
                method: 'POST',
                body: formData,
            });
            // 处理响应...
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <h1>FBA标签 - 文字替换</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="label_pdf">FBA 标签文件</label>
                    <input
                        type="file"
                        id="label_pdf"
                        accept=".pdf"
                        multiple
                        required
                        onChange={(e) => setSelectedFiles(e.target.files)}
                    />

                    <label htmlFor="original_text">原始文本</label>
                    <input
                        type="text"
                        id="original_text"
                        required
                        value={originalText}
                        onChange={(e) => setOriginalText(e.target.value)}
                    />

                    <label htmlFor="replacement_text">替换文本</label>
                    <select
                        id="replacement_text"
                        className={styles.customSelect}
                        value={replacementText}
                        onChange={(e) => setReplacementText(e.target.value)}
                    >
                        <option value="FBA">FBA</option>
                        <option value="">空</option>
                        <option value="Amazon">Amazon</option>
                        <option value="Warehouse">Warehouse</option>
                    </select>

                    <button type="submit">处理新标签</button>
                </form>
                <p className={styles.copyright}>Copyright © 纪亚伟</p>
            </div>
        </div>
    );
};

export default FbaRevisePdf; 