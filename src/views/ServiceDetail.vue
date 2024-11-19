<template>
  <div class="service-detail">
    <div v-if="loading" class="loading-state">
      <el-skeleton :rows="3" animated />
    </div>

    <div v-else-if="error" class="error-state">
      <el-alert
        :title="$t('common.error')"
        :description="error"
        type="error"
        show-icon
      />
    </div>

    <div v-else class="service-content">
      <div class="hero">
        <div class="container">
          <h1>{{ service.title }}</h1>
          <p>{{ service.description }}</p>
        </div>
      </div>

      <div class="container">
        <div class="service-details">
          <div class="service-info">
            <h2>{{ $t('services.details.overview') }}</h2>
            <div class="info-grid">
              <div class="info-item">
                <h3>{{ $t('services.details.category') }}</h3>
                <p>{{ service.category }}</p>
              </div>
              <div class="info-item">
                <h3>{{ $t('services.details.duration') }}</h3>
                <p>{{ service.duration }}</p>
              </div>
              <div class="info-item">
                <h3>{{ $t('services.details.price') }}</h3>
                <p>{{ service.price }}</p>
              </div>
            </div>
          </div>

          <div class="service-features">
            <h2>{{ $t('services.details.features') }}</h2>
            <ul>
              <li v-for="(feature, index) in service.features" :key="index">
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="service-process">
            <h2>{{ $t('services.details.process') }}</h2>
            <div class="process-timeline">
              <div v-for="(step, index) in service.process" :key="index" class="process-step">
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-content">
                  <h3>{{ step.title }}</h3>
                  <p>{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="service-cta">
          <h2>{{ $t('services.details.cta.title') }}</h2>
          <p>{{ $t('services.details.cta.description') }}</p>
          <el-button type="primary" size="large" @click="$router.push('/contact')">
            {{ $t('services.details.cta.button') }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import axios from 'axios';

const route = useRoute();
const { t } = useI18n();

const service = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchService = async () => {
  loading.value = true;
  try {
    const response = await axios.get(`http://localhost:8800/api/services/${route.params.id}`);
    service.value = response.data;
  } catch (err) {
    error.value = err.message;
    console.error('Error fetching service:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchService();
});
</script>

<style lang="scss" scoped>
.service-detail {
  .hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: white;
    padding: 4rem 0;
    margin-bottom: 3rem;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      max-width: 800px;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .loading-state,
  .error-state {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
  }

  .service-details {
    display: grid;
    gap: 3rem;
    margin-bottom: 4rem;

    h2 {
      color: var(--primary-color);
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;

    .info-item {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 8px;

      h3 {
        color: var(--primary-color);
        margin-bottom: 0.5rem;
      }

      p {
        color: #666;
      }
    }
  }

  .service-features {
    ul {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;

      li {
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 8px;
        color: #666;

        &::before {
          content: '✓';
          color: var(--primary-color);
          margin-right: 0.5rem;
        }
      }
    }
  }

  .process-timeline {
    .process-step {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;

      .step-number {
        width: 40px;
        height: 40px;
        background: var(--primary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
      }

      .step-content {
        h3 {
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        p {
          color: #666;
        }
      }
    }
  }

  .service-cta {
    text-align: center;
    background: #f8f9fa;
    padding: 3rem;
    border-radius: 10px;
    margin: 4rem 0;

    h2 {
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    p {
      color: #666;
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 3rem 0;

      h1 {
        font-size: 2rem;
      }
    }

    .service-details {
      gap: 2rem;
    }

    .info-grid {
      grid-template-columns: 1fr;
    }

    .service-features ul {
      grid-template-columns: 1fr;
    }
  }
}
</style>
