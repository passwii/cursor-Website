<!-- About.vue -->
<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>{{ $t('about-page.hero.title') }}</h1>
        <p>{{ $t('about-page.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="overview">
      <div class="container">
        <h2>{{ $t('about-page.overview.title') }}</h2>
        <div class="overview-grid">
          <div v-for="(item, key) in $t('about-page.overview.items')" :key="key" class="overview-item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values">
      <div class="container">
        <h2>{{ $t('about-page.values.title') }}</h2>
        <div class="values-grid">
          <div v-for="(value, key) in $t('about-page.values.items')" :key="key" class="value-item">
            <div class="value-icon">
              <i :class="value.icon"></i>
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team">
      <div class="container">
        <h2>{{ $t('about-page.team.title') }}</h2>
        <p class="team-intro">{{ $t('about-page.team.description') }}</p>
        <div class="team-grid">
          <div v-for="(member, key) in $t('about-page.team.members')" :key="key" class="team-member">
            <div class="member-image">
              <img :src="member.image" :alt="member.name">
            </div>
            <h3>{{ member.name }}</h3>
            <p class="member-title">{{ member.title }}</p>
            <p class="member-description">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Presence -->
    <section class="presence">
      <div class="container">
        <h2>{{ $t('about-page.presence.title') }}</h2>
        <div class="presence-content">
          <div class="presence-text">
            <p>{{ $t('about-page.presence.description') }}</p>
            <ul class="presence-stats">
              <li v-for="(stat, key) in $t('about-page.presence.stats')" :key="key">
                <strong>{{ stat.value }}</strong>
                <span>{{ stat.label }}</span>
              </li>
            </ul>
          </div>
          <div class="presence-map">
            <!-- Add a world map visualization here -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

onMounted(() => {
  // Any initialization code if needed
});
</script>

<style scoped lang="scss">
.about-page {
  section {
    padding: 4rem 0;

    &:nth-child(even) {
      background-color: #f8f9fa;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .hero {
    background-color: var(--primary-color);
    color: white;
    text-align: center;
    padding: 6rem 0;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.5rem;
      max-width: 800px;
      margin: 0 auto;
    }
  }

  .overview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;

    .value-item {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      .value-icon {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
      }
    }
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;

    .team-member {
      text-align: center;

      .member-image {
        width: 200px;
        height: 200px;
        margin: 0 auto 1rem;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .member-title {
        color: var(--primary-color);
        font-weight: 600;
        margin: 0.5rem 0;
      }
    }
  }

  .presence-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;

    .presence-stats {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      margin-top: 2rem;

      li {
        text-align: center;

        strong {
          display: block;
          font-size: 2rem;
          color: var(--primary-color);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .presence-content {
      grid-template-columns: 1fr;
    }

    .hero {
      padding: 4rem 0;

      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
