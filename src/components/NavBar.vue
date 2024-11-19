<template>
  <nav class="main-nav">
    <router-link to="/" class="logo-link">
      <div class="logo">
        <img src="@/assets/images/blf_logo_1.webp" :alt="t('company-logo')" />
        <div class="company-info">
          <router-link to="/" class="company-name">{{ t('company-name') }}</router-link>
          <span class="company-slogan">{{ t('company-slogan') }}</span>
        </div>
      </div>
    </router-link>

    <div class="hamburger-menu" @click="toggleMenu" :class="{ active: isMenuOpen }">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>

    <ul class="nav-links" :class="{ active: isMenuOpen }">
      <li>
        <router-link to="/" class="nav-link">{{ t('home') }}</router-link>
      </li>
      <li class="dropdown">
        <router-link to="/services" class="nav-link">{{ t('services') }}</router-link>
        <ul class="dropdown-menu">
          <li>
            <router-link to="/services#service-detail" class="dropdown-item">
              {{ t('market-research') }}
            </router-link>
          </li>
          <li>
            <router-link to="/services#ai-empowerment" class="dropdown-item">
              {{ t('ai-operation') }}
            </router-link>
          </li>
        </ul>
      </li>
      <li class="dropdown">
        <router-link to="/about" class="nav-link">{{ t('about-us') }}</router-link>
        <ul class="dropdown-menu">
          <li>
            <router-link to="/about#company-overview" class="dropdown-item">
              {{ t('company-overview') }}
            </router-link>
          </li>
          <li>
            <router-link to="/about#company-culture" class="dropdown-item">
              {{ t('company-culture') }}
            </router-link>
          </li>
          <li>
            <router-link to="/about#partners" class="dropdown-item">
              {{ t('partners') }}
            </router-link>
          </li>
          <li>
            <router-link to="/about#future-outlook" class="dropdown-item">
              {{ t('future-outlook') }}
            </router-link>
          </li>
        </ul>
      </li>
      <li class="dropdown">
        <router-link to="/contact" class="nav-link">{{ t('contact-us') }}</router-link>
        <ul class="dropdown-menu">
          <li>
            <router-link to="/contact#social-media" class="dropdown-item">
              {{ t('official-social-media') }}
            </router-link>
          </li>
          <li>
            <router-link to="/contact#recruitment" class="dropdown-item">
              {{ t('talent-recruitment') }}
            </router-link>
          </li>
        </ul>
      </li>
      <li class="dropdown">
        <router-link to="/news" class="nav-link">{{ t('news-center') }}</router-link>
        <ul class="dropdown-menu">
          <li>
            <router-link to="/news#cross-border" class="dropdown-item">
              {{ t('cross-border-news') }}
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <select v-model="currentLocale" @change="changeLanguage" class="language-selector">
          <option value="zh">中文</option>
          <option value="en">English</option>
        </select>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isMenuOpen = ref(false)
const currentLocale = ref(locale.value)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const changeLanguage = () => {
  locale.value = currentLocale.value
}
</script>

<style lang="scss" scoped>
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    height: 40px;
    width: auto;
  }
}

.company-info {
  display: flex;
  flex-direction: column;
}

.company-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.company-slogan {
  font-size: 0.9rem;
  color: #666;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #3b82f6;
  }

  &.router-link-active {
    color: #3b82f6;
  }
}

.dropdown {
  position: relative;

  &:hover .dropdown-menu {
    display: block;
  }
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 200px;
}

.dropdown-item {
  display: block;
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f3f4f6;
  }
}

.language-selector {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
}

.hamburger-menu {
  display: none;
  cursor: pointer;

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: #333;
    transition: transform 0.3s;
  }

  &.active {
    .bar:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    .bar:nth-child(2) {
      opacity: 0;
    }
    .bar:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }
}

@media (max-width: 768px) {
  .hamburger-menu {
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &.active {
      display: flex;
    }
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    display: none;
    padding-left: 1rem;
  }

  .dropdown:hover .dropdown-menu {
    display: none;
  }

  .dropdown.active .dropdown-menu {
    display: block;
  }
}
</style>
