import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './News.module.css';

interface NewsItem {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  featured?: boolean;
}

const categories = ['全部', '公司动态', '行业资讯', '跨境洞察'];

const newsData: NewsItem[] = [
  {
    id: 1,
    category: '公司动态',
    title: '彼励扶跨境荣获2025年度最具创新力企业奖',
    excerpt: '在刚刚结束的2025年度跨境电商创新大会上，彼励扶凭借其在AI技术应用和全球化运营方面的突出表现...',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80',
    date: '2025-12-15',
    featured: true
  },
  {
    id: 2,
    category: '行业资讯',
    title: '2024年跨境电商行业趋势展望',
    excerpt: '随着全球数字化转型的深入，跨境电商行业在2024年将迎来新的发展机遇...',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    date: '2024-12-10',
    featured: true
  },
  {
    id: 3,
    category: '跨境洞察',
    title: 'AI技术如何改变跨境电商运营模式',
    excerpt: '人工智能技术的快速发展正在深刻改变跨境电商的运营方式，从智能选品到精准营销...',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    date: '2024-12-05',
    featured: true
  },
  {
    id: 4,
    category: '公司动态',
    title: '彼励扶跨境完成新一轮融资',
    excerpt: '彼励扶跨境宣布完成新一轮融资，将进一步加强技术研发和全球市场拓展...',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80',
    date: '2025-12-01'
  },
  {
    id: 5,
    category: '行业资讯',
    title: '全球供应链新变化与机遇',
    excerpt: '全球供应链格局正在发生深刻变化，为跨境电商带来新的机遇与挑战...',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    date: '2024-11-28'
  },
  {
    id: 6,
    category: '跨境洞察',
    title: '新兴市场跨境电商发展分析',
    excerpt: '东南亚、拉美等新兴市场的跨境电商发展潜力巨大，市场规模持续扩大...',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80',
    date: '2024-11-25'
  }
];

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredNews = newsData.filter(
    news => activeCategory === '全部' || news.category === activeCategory
  );

  const featuredNews = newsData.filter(news => news.featured);
  const regularNews = filteredNews.slice(0, visibleCount);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles['hero-section']}>
        <div 
          className={styles['hero-background']}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80")'
          }}
        />
        <div className={styles['hero-overlay']} />
        <div className={styles['hero-content']}>
          <motion.h1 
            className={styles['hero-title']}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            新闻资讯
          </motion.h1>
          <motion.p 
            className={styles['hero-subtitle']}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            了解最新的跨境电商动态与行业趋势
          </motion.p>
        </div>
      </div>

      {/* Categories */}
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <motion.div
            key={category}
            className={`${styles.category} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {category}
          </motion.div>
        ))}
      </div>

      {/* Featured News */}
      <section className={styles['featured-section']}>
        <h2 className={styles['featured-title']}>热门资讯</h2>
        <div className={styles['featured-grid']}>
          {featuredNews.slice(0, 3).map((news, index) => (
            <motion.div
              key={news.id}
              className={styles['featured-card']}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={news.image} alt={news.title} className={styles['featured-image']} />
              <div className={styles['featured-overlay']}>
                <span className={styles['featured-category']}>{news.category}</span>
                <div className={styles['featured-title']} style={{ color: '#fff' }}>
                  <h3>{news.title}</h3>
                </div>
                <p className={styles['featured-excerpt']}>{news.excerpt}</p>
                <div className={styles['news-meta']}>
                  <span>{news.date}</span>
                  <a href="#" className={styles['read-more']}>
                    阅读更多 <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          {featuredNews.slice(3).map((news, index) => (
            <motion.div
              key={news.id}
              className={styles['featured-card']}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
            >
              <img src={news.image} alt={news.title} className={styles['featured-image']} />
              <div className={styles['featured-overlay']}>
                <span className={styles['featured-category']}>{news.category}</span>
                <div className={styles['featured-title']}>
                  <h3>{news.title}</h3>
                </div>
                <p className={styles['featured-excerpt']}>{news.excerpt}</p>
                <div className={styles['news-meta']}>
                  <span>{news.date}</span>
                  <a href="#" className={styles['read-more']}>
                    阅读更多 <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <div className={styles['news-grid']}>
        {regularNews.map((news, index) => (
          <motion.div
            key={news.id}
            className={styles['news-card']}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img src={news.image} alt={news.title} className={styles['news-image']} />
            <div className={styles['news-content']}>
              <span className={styles['news-category']}>{news.category}</span>
              <h3 className={styles['news-title']}>{news.title}</h3>
              <p className={styles['news-excerpt']}>{news.excerpt}</p>
              <div className={styles['news-meta']}>
                <span>{news.date}</span>
                <a href="#" className={styles['read-more']}>
                  阅读更多 <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {filteredNews.length > visibleCount && (
        <motion.button
          className={styles['load-more']}
          onClick={() => setVisibleCount(prev => prev + 3)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          加载更多
        </motion.button>
      )}
    </div>
  );
};

export default News;
