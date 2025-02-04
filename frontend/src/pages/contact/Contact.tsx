import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import styles from './Contact.module.css';
import contactBg from '../../assets/images/contact-handshake.webp';
import { departments } from './departments';

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    document.title = '联系我们 - BELIEVE';
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: 实现表单提交逻辑
      console.log('Form submitted:', formData);
      // 重置表单
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        message: ''
      });
      alert('提交成功！我们会尽快与您联系。');
    } catch (error) {
      console.error('提交失败:', error);
      alert('提交失败，请稍后重试。');
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div 
          className={styles['business-section']}
          style={{
            backgroundImage: `url(${contactBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div className={styles.overlay} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div 
              className={styles['section-title']}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>商务合作</h2>
              <p>期待与您建立长期稳定的合作关系</p>
            </motion.div>

            <motion.form 
              className={styles['contact-form']}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles['form-group']}>
                <label htmlFor="name">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="请输入您的姓名"
                />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="company">公司名称</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder="请输入您的公司名称"
                />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="email">电子邮箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="请输入您的电子邮箱"
                />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="phone">联系电话</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="请输入您的联系电话"
                />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="message">合作意向</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="请详细描述您的合作意向"
                  rows={5}
                />
              </div>

              <button type="submit" className={styles['submit-button']}>
                <Send size={20} style={{ marginRight: '8px' }} />
                提交
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles['recruitment-section']}>
          <motion.div 
            className={styles['section-title']}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>人才招聘</h2>
            <p>加入我们，开启跨境电商新征程</p>
          </motion.div>

          <div className={styles['departments-grid']}>
            {departments.map((dept, index) => (
              <motion.div
                key={dept.title}
                className={styles['department-card']}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <dept.icon className={styles['department-icon']} />
                <h3 className={styles['department-title']}>{dept.title}</h3>
                <p>{dept.description}</p>
                <div className={styles['hr-info']}>
                  <div className={styles['hr-name']}>
                    招聘负责人：{dept.hrName}
                  </div>
                  <div className={styles['hr-contact']}>
                    <Mail size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    {dept.email}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
