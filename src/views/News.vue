<!-- News.vue -->
<template>
  <div class="news-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>{{ $t('news-page.hero.title') }}</h1>
        <p>{{ $t('news-page.hero.subtitle') }}</p>
      </div>
    </section>

    <div class="container main-content">
      <!-- News Categories -->
      <div class="categories">
        <button 
          v-for="(category, key) in $t('news-page.categories')" 
          :key="key"
          :class="['category-btn', { active: currentCategory === key }]"
          @click="currentCategory = key"
        >
          {{ category }}
        </button>
      </div>

      <!-- News Grid -->
      <div class="news-grid">
        <article 
          v-for="(article, index) in filteredArticles" 
          :key="index"
          class="news-card"
        >
          <div class="news-image">
            <img :src="article.image" :alt="article.title">
            <span class="category-tag">{{ $t(`news-page.categories.${article.category}`) }}</span>
          </div>
          <div class="news-content">
            <div class="news-meta">
              <span class="date">
                <i class="far fa-calendar"></i>
                {{ formatDate(article.date) }}
              </span>
              <span class="author">
                <i class="far fa-user"></i>
                {{ article.author }}
              </span>
            </div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.summary }}</p>
            <router-link :to="article.link" class="read-more">
              {{ $t('news-page.readMore') }}
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </article>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <button 
          class="page-btn prev"
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
          <i class="fas fa-chevron-left"></i>
          {{ $t('news-page.pagination.prev') }}
        </button>
        <div class="page-numbers">
          <button 
            v-for="page in totalPages" 
            :key="page"
            :class="['page-number', { active: currentPage === page }]"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
        </div>
        <button 
          class="page-btn next"
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          {{ $t('news-page.pagination.next') }}
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const currentCategory = ref('all');
const currentPage = ref(1);
const itemsPerPage = 6;

// Mock news data - replace with actual API call
const newsArticles = ref([
  {
    title: t('news-page.articles.article1.title'),
    summary: t('news-page.articles.article1.summary'),
    image: '/images/news/article1.jpg',
    category: 'industry',
    date: '2024-01-15',
    author: 'John Doe',
    link: '/news/article1'
  },
  // Add more articles here
]);

const filteredArticles = computed(() => {
  let articles = newsArticles.value;
  if (currentCategory.value !== 'all') {
    articles = articles.filter(article => article.category === currentCategory.value);
  }
  
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return articles.slice(start, end);
});

const totalPages = computed(() => {
  const filteredTotal = currentCategory.value === 'all' 
    ? newsArticles.value.length 
    : newsArticles.value.filter(article => article.category === currentCategory.value).length;
  return Math.ceil(filteredTotal / itemsPerPage);
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};
</script>

<style scoped lang="scss">
.news-page {
  .hero {
    background-color: var(--primary-color);
    color: white;
    text-align: center;
    padding: 4rem 0;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .main-content {
    padding: 4rem 0;
  }

  .categories {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;

    .category-btn {
      padding: 0.5rem 1rem;
      border: 1px solid var(--primary-color);
      border-radius: 20px;
      background: none;
      color: var(--primary-color);
      cursor: pointer;
      transition: all 0.3s;

      &:hover,
      &.active {
        background: var(--primary-color);
        color: white;
      }
    }
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .news-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }

    .news-image {
      position: relative;
      height: 200px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .category-tag {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: var(--primary-color);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.875rem;
      }
    }

    .news-content {
      padding: 1.5rem;

      .news-meta {
        display: flex;
        gap: 1rem;
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 1rem;

        i {
          margin-right: 0.5rem;
        }
      }

      h2 {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        line-height: 1.4;
      }

      p {
        color: #666;
        margin-bottom: 1.5rem;
      }

      .read-more {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .page-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: none;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: #f5f5f5;
      }
    }

    .page-numbers {
      display: flex;
      gap: 0.5rem;

      .page-number {
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ddd;
        border-radius: 4px;
        background: none;
        cursor: pointer;

        &.active {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }

        &:not(.active):hover {
          background: #f5f5f5;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .news-grid {
      grid-template-columns: 1fr;
    }

    .pagination {
      flex-wrap: wrap;
    }
  }
}
</style>
