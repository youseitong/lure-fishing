<template>
  <footer class="bg-gray-800 text-white py-8 mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>
            </svg>
            <span class="text-xl font-bold">路亚钓鱼</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            专注于为新手钓友提供系统的路亚入门知识，包括装备选择、抛投技巧、标点选择、目标水层等基础知识的科普教育。
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">快速导航</h3>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.name">
              <router-link :to="item.path" class="text-gray-400 hover:text-white transition-colors">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">联系我们</h3>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>contact@lurefishing.com</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>400-888-8888</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2024 路亚钓鱼. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navItems = [
  { name: 'Home', path: '/', label: '首页' },
  { name: 'Equipment', path: '/equipment', label: '装备指南' },
  { name: 'Skills', path: '/skills', label: '钓鱼技巧' },
  { name: 'Fish', path: '/fish', label: '鱼种图鉴' },
  { name: 'Spots', path: '/spots', label: '钓点分享' },
  { name: 'Catches', path: '/catches', label: '钓获记录' }
]
</script>
