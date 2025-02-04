import React from 'react';
import styles from './HeroSection.module.css';
import crossBoardImage from '../../../assets/images/cross-board.webp';

const HeroSection: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>跨境电商解决方案</h1>
                    <p className={styles.description}>
                        彼励扶致力于为跨境电商企业提供一站式智能营销解决方案，
                        通过AI技术赋能，助力企业实现全球化业务增长。
                    </p>
                    <button
                        className={styles.ctaButton}
                        onClick={() => window.location.href = '/contact'}
                    >
                        立即咨询
                    </button>
                </div>
                <div className={styles.imageContainer}>
                    <img
                        src={crossBoardImage}
                        alt="Cross Board Commerce"
                        className={styles.image}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;