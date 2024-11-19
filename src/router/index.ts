import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('@/views/Services.vue')
    },
    {
      path: '/services/:id',
      name: 'ServiceDetail',
      component: () => import('@/views/ServiceDetail.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/Contact.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('@/views/News.vue')
    },
    {
      path: '/tools',
      name: 'Tools',
      component: () => import('@/views/Tools.vue'),
      children: [
        {
          path: 'daily-report',
          component: () => import('@/views/tools/DailyReport.vue')
        },
        {
          path: 'weekly-report',
          component: () => import('@/views/tools/WeeklyReport.vue')
        },
        {
          path: 'monthly-report',
          component: () => import('@/views/tools/MonthlyReport.vue')
        },
        {
          path: 'product-analysis',
          component: () => import('@/views/tools/ProductAnalysis.vue')
        },
        {
          path: 'mic-pdf',
          component: () => import('@/views/tools/MicPdf.vue')
        },
        {
          path: 'resize-image',
          component: () => import('@/views/tools/ResizeImage.vue')
        },
        {
          path: 'fba-revise-pdf',
          component: () => import('@/views/tools/FbaRevisePdf.vue')
        },
        {
          path: 'database',
          component: () => import('@/views/tools/Database.vue')
        }
      ]
    },
    // Admin routes
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/AdminLayout.vue'),
      children: [
        {
          path: 'services',
          name: 'admin-services',
          component: () => import('@/views/admin/Services.vue')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
