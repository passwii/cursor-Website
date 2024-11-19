<template>
  <main>
    <section class="hero">
      <div class="hero-content">
        <h1>{{ t('hero.title') }}</h1>
        <p>{{ t('hero.subtitle') }}</p>
        <router-link to="/services" class="cta-button">
          {{ t('hero.cta') }}
        </router-link>
      </div>
    </section>

    <section id="services-overview" class="services-overview services-ai">
      <h2>{{ t('services.title') }}</h2>
      <div class="services-grid">
        <div v-for="service in services" :key="service.id" class="service-card">
          <div class="service-card-header" :style="{ background: service.gradient }"></div>
          <div class="service-card-content">
            <h3>{{ t(`services.items.${service.id}.title`) }}</h3>
            <p>{{ t(`services.items.${service.id}.description`) }}</p>
            <router-link :to="service.link" class="learn-more">
              {{ t('services.learnMore') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="how-it-works">
      <h2>{{ t('competencies.title') }}</h2>
      <p class="subtitle-underline">{{ t('competencies.subtitle') }}</p>
      <div class="steps">
        <div v-for="step in competencies" :key="step.id" class="step">
          <div class="step-icon">
            <i :class="step.icon"></i>
          </div>
          <h3>{{ t(`competencies.items.${step.id}.title`) }}</h3>
          <p>{{ t(`competencies.items.${step.id}.description`) }}</p>
        </div>
      </div>
    </section>

    <section class="samples">
      <div class="container">
        <h2>{{ t('cases.title') }}</h2>
        <div class="samples-grid">
          <div v-for="sample in cases" :key="sample.id" class="sample-card">
            <img :src="sample.image" :alt="t(`cases.items.${sample.id}.title`)" />
            <div class="sample-content">
              <h3>{{ t(`cases.items.${sample.id}.title`) }}</h3>
              <p>{{ t(`cases.items.${sample.id}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const services = [
  {
    id: 'crossBorder',
    gradient: 'linear-gradient(to right, #3b82f6, #60a5fa)',
    link: '/services#cross-border'
  },
  {
    id: 'aiEmpowerment',
    gradient: 'linear-gradient(to right, #10b981, #34d399)',
    link: '/services#ai-empowerment'
  },
  {
    id: 'marketResearch',
    gradient: 'linear-gradient(to right, #f59e0b, #fbbf24)',
    link: '/services#market-research'
  }
]

const competencies = [
  {
    id: 'expertise',
    icon: 'fas fa-users'
  },
  {
    id: 'ai',
    icon: 'fas fa-robot'
  },
  {
    id: 'global',
    icon: 'fas fa-globe'
  }
]

const cases = [
  {
    id: 'case1',
    image: new URL('@/assets/images/case1.webp', import.meta.url).href
  },
  {
    id: 'case2',
    image: new URL('@/assets/images/case2.webp', import.meta.url).href
  },
  {
    id: 'case3',
    image: new URL('@/assets/images/case3.webp', import.meta.url).href
  }
]
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/images/hero-bg.webp') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  margin-top: -4rem;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #3b82f6;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
}

.services-overview {
  padding: 4rem 2rem;
  background-color: #f9fafb;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
}

.service-card-header {
  height: 150px;
}

.service-card-content {
  padding: 2rem;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
}

.learn-more {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
}

.how-it-works {
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  .subtitle-underline {
    color: #666;
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 2px;
      background-color: #3b82f6;
    }
  }
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.step {
  padding: 2rem;

  .step-icon {
    font-size: 2.5rem;
    color: #3b82f6;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  p {
    color: #666;
  }
}

.samples {
  padding: 4rem 2rem;
  background-color: #f9fafb;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }
}

.samples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.sample-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}

.sample-content {
  padding: 1.5rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
  }
}

@media (max-width: 768px) {
  .hero-content {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  .services-grid,
  .steps,
  .samples-grid {
    grid-template-columns: 1fr;
  }
}
</style>
