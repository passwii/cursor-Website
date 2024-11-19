<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>{{ $t('services-page.hero.title') }}</h1>
        <p>{{ $t('services-page.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- Ecosystem Services Grid -->
    <section class="ecosystem-services">
      <div class="container">
        <h2>{{ $t('services-page.ecosystem.title') }}</h2>
        <div class="services-grid">
          <div v-for="(service, index) in $t('services-page.ecosystem.services')" :key="index" class="service-card">
            <i :class="service.icon"></i>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Empowerment Features -->
    <section class="ai-features">
      <div class="container">
        <h2>{{ $t('services-page.ai.title') }}</h2>
        <div class="features-grid">
          <div v-for="(feature, index) in $t('services-page.ai.features')" :key="index" class="feature-card">
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Process Timeline -->
    <section class="service-process">
      <div class="container">
        <h2>{{ $t('services-page.process.title') }}</h2>
        <div class="timeline">
          <div v-for="(step, index) in $t('services-page.process.steps')" :key="index" class="timeline-item">
            <div class="timeline-number">{{ index + 1 }}</div>
            <div class="timeline-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <div class="container">
        <h2>{{ $t('services-page.cta.title') }}</h2>
        <p>{{ $t('services-page.cta.description') }}</p>
        <router-link to="/contact" class="cta-button">
          {{ $t('services-page.cta.button') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.services-page {
  .hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: white;
    padding: 6rem 0;
    text-align: center;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  section {
    padding: 5rem 0;

    h2 {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 2.5rem;
      color: var(--primary-color);
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .services-grid, .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    
    .service-card, .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      i {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      h3 {
        margin: 1rem 0;
        font-size: 1.5rem;
      }

      p {
        color: #666;
        line-height: 1.6;
      }
    }
  }

  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background: var(--primary-color);
    }

    .timeline-item {
      display: flex;
      align-items: center;
      margin-bottom: 3rem;

      &:nth-child(odd) {
        flex-direction: row-reverse;
        .timeline-content {
          text-align: right;
        }
      }

      .timeline-number {
        width: 40px;
        height: 40px;
        background: var(--primary-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        z-index: 1;
      }

      .timeline-content {
        flex: 1;
        padding: 0 2rem;

        h3 {
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        p {
          color: #666;
          line-height: 1.6;
        }
      }
    }
  }

  .cta {
    background: #f8f9fa;
    text-align: center;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      max-width: 600px;
      margin: 0 auto 2rem;
      color: #666;
    }

    .cta-button {
      display: inline-block;
      padding: 1rem 2rem;
      background: var(--primary-color);
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      transition: background 0.3s ease;

      &:hover {
        background: darken(var(--primary-color), 10%);
      }
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 4rem 0;
      
      h1 {
        font-size: 2.5rem;
      }
    }

    .timeline {
      &::before {
        left: 0;
      }

      .timeline-item {
        flex-direction: row !important;
        margin-left: 20px;

        .timeline-content {
          text-align: left !important;
        }
      }
    }
  }
}
</style>
