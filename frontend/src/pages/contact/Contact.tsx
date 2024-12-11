import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Code, TrendingUp } from 'lucide-react';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      message: ''
    });
  };

  const departments = [
    {
      title: '技术部',
      icon: Code,
      hrName: '张经理',
      email: 'tech@believeboy.com'
    },
    {
      title: '运营部',
      icon: TrendingUp,
      hrName: '李经理',
      email: 'operations@believeboy.com'
    },
    {
      title: '人力资源部',
      icon: Users,
      hrName: '王经理',
      email: 'hr@believeboy.com'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Business Cooperation Section */}
      <section className={styles.section}>
        <div className={styles['business-section']}>
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
              <label htmlFor="message">合作留言</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="请输入您的合作意向"
                rows={5}
              />
            </div>

            <button type="submit" className={styles['submit-button']}>
              提交
            </button>
          </motion.form>
        </div>
      </section>

      {/* Recruitment Section */}
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
                <p>我们正在寻找优秀的人才加入我们的团队</p>
                <div className={styles['hr-info']}>
                  <div className={styles['hr-name']}>
                    招聘负责人：{dept.hrName}
                  </div>
                  <div className={styles['hr-contact']}>
                    联系邮箱：{dept.email}
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
