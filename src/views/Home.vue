<template>
  <div class="pt-16">
    <section class="relative h-[400px] md:h-[500px] overflow-hidden">
      <div 
        class="absolute inset-0 transition-opacity duration-500"
        :style="{ opacity: currentSlide === index ? 1 : 0 }"
        v-for="(slide, index) in slides"
        :key="index"
      >
        <img 
          :src="slide.image" 
          :alt="slide.title" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <h2 class="text-2xl md:text-4xl font-bold text-white mb-2">{{ slide.title }}</h2>
          <p class="text-gray-200 text-sm md:text-lg">{{ slide.description }}</p>
        </div>
      </div>
      
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button 
          v-for="(_, index) in slides" 
          :key="index"
          @click="currentSlide = index"
          class="w-3 h-3 rounded-full transition-colors"
          :class="currentSlide === index ? 'bg-primary' : 'bg-white/50 hover:bg-white/70'"
        ></button>
      </div>
    </section>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">快速导航</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <router-link 
            v-for="item in quickNavItems" 
            :key="item.name"
            :to="item.path"
            class="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-md group"
          >
            <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
              <svg v-if="item.icon === 'rod'" class="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <svg v-else-if="item.icon === 'skill'" class="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
              </svg>
              <svg v-else-if="item.icon === 'fish'" class="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
              <svg v-else-if="item.icon === 'spot'" class="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <svg v-else-if="item.icon === 'catch'" class="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <svg v-else class="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <span class="text-sm font-medium text-gray-700">{{ item.label }}</span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="py-12 bg-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-bold text-gray-800">热门内容</h2>
          <router-link to="/skills" class="text-primary hover:text-primary/80 text-sm font-medium">查看更多</router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="article in articles" 
            :key="article.id"
            class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover" />
            <div class="p-4">
              <span class="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-2">
                {{ article.category }}
              </span>
              <h3 class="text-lg font-semibold text-gray-800 mb-2 hover:text-primary transition-colors">
                {{ article.title }}
              </h3>
              <p class="text-gray-500 text-sm line-clamp-2">{{ article.summary }}</p>
              <div class="flex items-center mt-4 text-xs text-gray-400">
                <span>{{ article.date }}</span>
                <span class="mx-2">·</span>
                <span>{{ article.views }} 阅读</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-bold text-gray-800">最新钓获</h2>
          <router-link to="/catches" class="text-primary hover:text-primary/80 text-sm font-medium">查看更多</router-link>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            v-for="catchItem in catches" 
            :key="catchItem.id"
            class="relative aspect-square rounded-xl overflow-hidden group"
          >
            <img :src="catchItem.image" :alt="catchItem.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div class="absolute bottom-0 left-0 right-0 p-3">
                <p class="text-white text-sm font-medium">{{ catchItem.title }}</p>
                <p class="text-gray-300 text-xs">{{ catchItem.weight }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
let slideInterval = null

const slides = [
  {
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=lure%20fishing%20in%20beautiful%20lake%20sunset%20scenery&image_size=landscape_16_9',
    title: '路亚钓鱼入门指南',
    description: '从零开始学习路亚钓鱼，掌握必备技巧'
  },
  {
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=professional%20fishing%20equipment%20rod%20reel%20lures%20on%20wooden%20table&image_size=landscape_16_9',
    title: '新手装备推荐',
    description: '精选适合新手的入门装备组合'
  },
  {
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=big%20fish%20catch%20proud%20angler%20holding%20fish%20by%20the%20water&image_size=landscape_16_9',
    title: '钓获分享',
    description: '钓友们的精彩渔获展示'
  }
]

const quickNavItems = [
  { name: 'Equipment', path: '/equipment', label: '装备指南', icon: 'rod' },
  { name: 'Skills', path: '/skills', label: '钓鱼技巧', icon: 'skill' },
  { name: 'Fish', path: '/fish', label: '鱼种图鉴', icon: 'fish' },
  { name: 'Spots', path: '/spots', label: '钓点分享', icon: 'spot' },
  { name: 'Catches', path: '/catches', label: '钓获记录', icon: 'catch' },
  { name: 'Home', path: '/', label: '关于我们', icon: 'home' }
]

const articles = [
  {
    id: 1,
    title: '新手路亚装备选择指南',
    summary: '作为路亚新手，如何选择适合自己的第一套装备？本文详细介绍鱼竿、渔轮、鱼线和假饵的选择要点。',
    category: '装备指南',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fishing%20rod%20and%20reel%20combo%20close%20up%20detailed&image_size=landscape_4_3',
    date: '2024-01-15',
    views: 3280
  },
  {
    id: 2,
    title: '水滴轮抛投技巧详解',
    summary: '水滴轮是路亚钓法中常用的渔轮类型，掌握正确的抛投技巧是入门的关键。本文图文并茂讲解水滴轮抛投方法。',
    category: '钓鱼技巧',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fishing%20casting%20technique%20water%20splashing%20action%20shot&image_size=landscape_4_3',
    date: '2024-01-12',
    views: 2856
  },
  {
    id: 3,
    title: '翘嘴鲌钓法全攻略',
    summary: '翘嘴鲌是路亚爱好者最喜爱的目标鱼种之一，本文介绍翘嘴鲌的习性、栖息环境和最佳钓法。',
    category: '鱼种图鉴',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=top%20mouth%20culter%20fish%20close%20up%20freshwater&image_size=landscape_4_3',
    date: '2024-01-10',
    views: 4120
  }
]

const catches = [
  { id: 1, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=big%20bass%20fish%20catch%20close%20up%20freshwater&image_size=square', title: '巨鲈上钩', weight: '5.2kg' },
  { id: 2, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=large%20pike%20fish%20catch%20by%20angler&image_size=square', title: '凶猛翘嘴', weight: '3.8kg' },
  { id: 3, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=mandarin%20fish%20catch%20freshwater%20beautiful&image_size=square', title: '桂花鱼', weight: '1.5kg' },
  { id: 4, image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=catfish%20catch%20big%20size%20freshwater&image_size=square', title: '大鲶鱼', weight: '8.0kg' }
]

onMounted(() => {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 4000)
})

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
})
</script>
