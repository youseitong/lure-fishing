<template>
  <nav class="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>
            </svg>
            <span class="text-xl font-bold text-primary">路亚钓鱼</span>
          </router-link>
        </div>

        <div class="hidden md:flex space-x-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path"
            class="nav-link"
            :class="{ 'text-primary': $route.path === item.path }"
          >
            {{ item.label }}
          </router-link>
        </div>

        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.path"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50"
          :class="{ 'text-primary bg-gray-50': $route.path === item.path }"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/', label: '首页' },
  { name: 'Equipment', path: '/equipment', label: '装备指南' },
  { name: 'Skills', path: '/skills', label: '钓鱼技巧' },
  { name: 'Fish', path: '/fish', label: '鱼种图鉴' },
  { name: 'Spots', path: '/spots', label: '钓点分享' },
  { name: 'Catches', path: '/catches', label: '钓获记录' }
]
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-primary transition-colors duration-200 font-medium;
}
</style>
