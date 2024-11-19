<!-- Contact.vue -->
<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>{{ $t('contact-page.hero.title') }}</h1>
        <p>{{ $t('contact-page.hero.subtitle') }}</p>
      </div>
    </section>

    <div class="container main-content">
      <div class="contact-grid">
        <!-- Contact Form -->
        <section class="contact-form">
          <h2>{{ $t('contact-page.form.title') }}</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">{{ $t('contact-page.form.name') }}</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                :placeholder="$t('contact-page.form.namePlaceholder')"
                required
              >
            </div>
            <div class="form-group">
              <label for="email">{{ $t('contact-page.form.email') }}</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                :placeholder="$t('contact-page.form.emailPlaceholder')"
                required
              >
            </div>
            <div class="form-group">
              <label for="company">{{ $t('contact-page.form.company') }}</label>
              <input 
                type="text" 
                id="company" 
                v-model="formData.company" 
                :placeholder="$t('contact-page.form.companyPlaceholder')"
              >
            </div>
            <div class="form-group">
              <label for="service">{{ $t('contact-page.form.service') }}</label>
              <select id="service" v-model="formData.service" required>
                <option value="" disabled>{{ $t('contact-page.form.servicePlaceholder') }}</option>
                <option v-for="(service, key) in $t('contact-page.form.serviceOptions')" 
                        :key="key" 
                        :value="key">
                  {{ service }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">{{ $t('contact-page.form.message') }}</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                :placeholder="$t('contact-page.form.messagePlaceholder')"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" class="submit-button">
              {{ $t('contact-page.form.submit') }}
            </button>
          </form>
        </section>

        <!-- Contact Information -->
        <section class="contact-info">
          <h2>{{ $t('contact-page.info.title') }}</h2>
          
          <div class="info-cards">
            <div class="info-card">
              <i class="fas fa-map-marker-alt"></i>
              <h3>{{ $t('contact-page.info.address.title') }}</h3>
              <p>{{ $t('contact-page.info.address.content') }}</p>
            </div>

            <div class="info-card">
              <i class="fas fa-phone"></i>
              <h3>{{ $t('contact-page.info.phone.title') }}</h3>
              <p>{{ $t('contact-page.info.phone.content') }}</p>
            </div>

            <div class="info-card">
              <i class="fas fa-envelope"></i>
              <h3>{{ $t('contact-page.info.email.title') }}</h3>
              <p>{{ $t('contact-page.info.email.content') }}</p>
            </div>

            <div class="info-card">
              <i class="fas fa-clock"></i>
              <h3>{{ $t('contact-page.info.hours.title') }}</h3>
              <p>{{ $t('contact-page.info.hours.content') }}</p>
            </div>
          </div>

          <!-- Social Media Links -->
          <div class="social-links">
            <h3>{{ $t('contact-page.social.title') }}</h3>
            <div class="social-icons">
              <a v-for="(social, key) in $t('contact-page.social.links')"
                 :key="key"
                 :href="social.url"
                 :title="social.name"
                 target="_blank"
                 rel="noopener noreferrer">
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const formData = ref({
  name: '',
  email: '',
  company: '',
  service: '',
  message: ''
});

const handleSubmit = async () => {
  try {
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData.value);
    // Reset form after successful submission
    formData.value = {
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    };
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
</script>

<style scoped lang="scss">
.contact-page {
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

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .contact-form {
    h2 {
      margin-bottom: 2rem;
    }

    .form-group {
      margin-bottom: 1.5rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
      }

      input,
      select,
      textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;

        &:focus {
          outline: none;
          border-color: var(--primary-color);
        }
      }
    }

    .submit-button {
      background-color: var(--primary-color);
      color: white;
      padding: 1rem 2rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: darken(var(--primary-color), 10%);
      }
    }
  }

  .contact-info {
    h2 {
      margin-bottom: 2rem;
    }

    .info-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .info-card {
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 8px;
      text-align: center;

      i {
        font-size: 2rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      h3 {
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
      }
    }

    .social-links {
      text-align: center;
      margin-top: 2rem;

      h3 {
        margin-bottom: 1rem;
      }

      .social-icons {
        display: flex;
        justify-content: center;
        gap: 1rem;

        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          transition: transform 0.3s;

          &:hover {
            transform: translateY(-3px);
          }
        }
      }
    }
  }
}
</style>
