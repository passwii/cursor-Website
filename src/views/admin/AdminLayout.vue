<template>
  <div class="admin-layout">
    <el-container>
      <el-aside width="200px">
        <div class="logo">
          <img src="@/assets/logo.png" alt="Logo" />
          <span>BLF Admin</span>
        </div>
        <el-menu
          router
          :default-active="$route.path"
          class="el-menu-vertical">
          <el-menu-item index="/admin/dashboard">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </el-menu-item>
          <el-menu-item index="/admin/services">
            <i class="fas fa-cogs"></i>
            <span>Services</span>
          </el-menu-item>
          <el-menu-item index="/admin/news">
            <i class="fas fa-newspaper"></i>
            <span>News</span>
          </el-menu-item>
          <el-menu-item index="/admin/inquiries">
            <i class="fas fa-envelope"></i>
            <span>Inquiries</span>
          </el-menu-item>
          <el-menu-item index="/admin/settings">
            <i class="fas fa-cog"></i>
            <span>Settings</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header-content">
            <el-breadcrumb>
              <el-breadcrumb-item :to="{ path: '/admin' }">Home</el-breadcrumb-item>
              <el-breadcrumb-item>{{ $route.name }}</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="user-menu">
              <el-dropdown>
                <span class="user-info">
                  <el-avatar size="small" src="https://avatars.githubusercontent.com/u/1?v=4"></el-avatar>
                  <span>Admin</span>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Profile</el-dropdown-item>
                    <el-dropdown-item>Settings</el-dropdown-item>
                    <el-dropdown-item divided>Logout</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped>
.admin-layout {
  min-height: 100vh;

  .el-container {
    min-height: 100vh;
  }

  .el-aside {
    background-color: #304156;
    color: #fff;

    .logo {
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      border-bottom: 1px solid #1f2d3d;

      img {
        width: 32px;
        margin-right: 12px;
      }
    }

    .el-menu {
      border-right: none;
      background-color: transparent;

      .el-menu-item {
        color: #bfcbd9;

        i {
          color: #bfcbd9;
          margin-right: 12px;
        }

        &:hover, &.is-active {
          background-color: #263445;
          color: #fff;

          i {
            color: #fff;
          }
        }
      }
    }
  }

  .el-header {
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 20px;

    .header-content {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .el-breadcrumb {
        line-height: 60px;
      }

      .user-menu {
        .user-info {
          display: flex;
          align-items: center;
          cursor: pointer;

          .el-avatar {
            margin-right: 8px;
          }
        }
      }
    }
  }

  .el-main {
    background-color: #f0f2f5;
    padding: 20px;
  }
}
</style>
