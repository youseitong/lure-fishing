<template>
  <div class="pt-16">
    <section class="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">钓获记录</h1>
        <p class="text-white/80">分享你的渔获，记录精彩瞬间</p>
      </div>
    </section>

    <section class="py-8 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex flex-wrap gap-3">
            <button 
              v-for="filter in filters" 
              :key="filter.id"
              @click="activeFilter = filter.id"
              class="px-4 py-2 rounded-full transition-all duration-200"
              :class="activeFilter === filter.id 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
            >
              {{ filter.name }}
            </button>
          </div>
          <button class="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors text-sm font-medium flex items-center space-x-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            <span>分享钓获</span>
          </button>
        </div>
      </div>
    </section>

    <section class="py-12 bg-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div 
            v-for="catchItem in catches" 
            :key="catchItem.id"
            class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <div class="relative aspect-square overflow-hidden">
              <img 
                :src="catchItem.image" 
                :alt="catchItem.title" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex items-center justify-between">
                  <span class="text-white text-sm font-medium">{{ catchItem.title }}</span>
                  <span class="text-white/80 text-xs">{{ catchItem.weight }}</span>
                </div>
              </div>
            </div>
            <div class="p-3">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-500">{{ catchItem.date }}</span>
                <div class="flex items-center space-x-1">
                  <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span class="text-xs text-gray-600">{{ catchItem.likes }}</span>
                </div>
              </div>
              <p class="text-sm text-gray-700 font-medium truncate">{{ catchItem.author }}</p>
              <p class="text-xs text-gray-400">{{ catchItem.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">今日热门钓获</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="(highlight, index) in highlights" 
            :key="index"
            class="relative rounded-xl overflow-hidden"
            :class="index === 0 ? 'md:col-span-2' : ''"
          >
            <img :src="highlight.image" :alt="highlight.title" class="w-full h-64 object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <div class="flex items-center space-x-2 mb-2">
                  <span 
                    class="px-3 py-1 rounded-full text-sm font-medium"
                    :class="index === 0 ? 'bg-secondary text-white' : 'bg-white/20 text-white'"
                  >
                    {{ index === 0 ? 'TOP 1' : index === 1 ? 'TOP 2' : 'TOP 3' }}
                  </span>
                  <span class="text-white/80 text-sm">{{ highlight.date }}</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-1">{{ highlight.title }}</h3>
                <p class="text-white/80 text-sm mb-3">{{ highlight.description }}</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-4 text-white/80 text-sm">
                    <span>{{ highlight.weight }}</span>
                    <span>{{ highlight.location }}</span>
                  </div>
                  <div class="flex items-center space-x-1 text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ highlight.likes }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">钓获排行榜</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(rank, index) in rankings" 
            :key="index"
            class="bg-white rounded-xl p-6 text-center"
          >
            <div 
              class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              :class="index === 0 ? 'bg-secondary text-white' : index === 1 ? 'bg-gray-400 text-white' : index === 2 ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-600'"
            >
              <span class="text-2xl font-bold">{{ index + 1 }}</span>
            </div>
            <h4 class="font-semibold text-gray-800 mb-1">{{ rank.name }}</h4>
            <p class="text-gray-400 text-sm mb-3">{{ rank.location }}</p>
            <div class="flex justify-center space-x-4 text-sm">
              <div>
                <p class="text-primary font-bold">{{ rank.catches }}</p>
                <p class="text-gray-400 text-xs">钓获数</p>
              </div>
              <div>
                <p class="text-primary font-bold">{{ rank.weight }}</p>
                <p class="text-gray-400 text-xs">总重量</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeFilter = ref('all')

const filters = [
  { id: 'all', name: '全部' },
  { id: 'bass', name: '鲈鱼' },
  { id: 'culter', name: '翘嘴' },
  { id: 'mandarin', name: '鳜鱼' },
  { id: 'catfish', name: '鲶鱼' },
  { id: 'other', name: '其他' }
]

const catches = [
  {
    id: 1,
    title: '巨鲈上钩',
    weight: '5.2kg',
    date: '2024-01-15',
    author: '路亚小王子',
    location: '千岛湖',
    likes: 256,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    title: '凶猛翘嘴',
    weight: '3.8kg',
    date: '2024-01-15',
    author: '渔乐无穷',
    location: '长江',
    likes: 189,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    title: '桂花鱼',
    weight: '1.5kg',
    date: '2024-01-14',
    author: '山野钓客',
    location: '青龙山水库',
    likes: 145,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    title: '大鲶鱼',
    weight: '8.0kg',
    date: '2024-01-14',
    author: '夜钓达人',
    location: '太湖',
    likes: 312,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop'
  },
  {
    id: 5,
    title: '红尾鲌',
    weight: '2.1kg',
    date: '2024-01-13',
    author: '钓鱼新手',
    location: '天目湖',
    likes: 98,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop'
  },
  {
    id: 6,
    title: '鳡鱼上钩',
    weight: '6.5kg',
    date: '2024-01-13',
    author: '路亚高手',
    location: '鄱阳湖',
    likes: 423,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop'
  },
  {
    id: 7,
    title: '黑鱼',
    weight: '3.2kg',
    date: '2024-01-12',
    author: '雷强猎手',
    location: '湿地',
    likes: 178,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop'
  },
  {
    id: 8,
    title: '马口鱼群',
    weight: '0.5kg',
    date: '2024-01-12',
    author: '溪流玩家',
    location: '小溪',
    likes: 134,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop'
  }
]

const highlights = [
  {
    title: '8公斤鲶鱼上岸！',
    description: '夜钓太湖，意外收获巨型鲶鱼，使用蛙饵跳底中鱼。',
    weight: '8.0kg',
    location: '太湖',
    date: '2024-01-14',
    likes: 312,
    image: 'https://images.unsplash.com/photo-1512058793329-d35425958520?w=1920&h=1080&fit=crop'
  },
  {
    title: '千岛湖巨鲈',
    description: '5.2公斤鲈鱼成功上岸，使用复合亮片搜索。',
    weight: '5.2kg',
    location: '千岛湖',
    date: '2024-01-15',
    likes: 256,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop'
  },
  {
    title: '鳡鱼王者',
    description: '6.5公斤鳡鱼，水中猎豹名不虚传！',
    weight: '6.5kg',
    location: '鄱阳湖',
    date: '2024-01-13',
    likes: 423,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop'
  }
]

const rankings = [
  { name: '路亚小王子', location: '浙江', catches: 128, weight: '256kg' },
  { name: '渔乐无穷', location: '江苏', catches: 96, weight: '189kg' },
  { name: '夜钓达人', location: '安徽', catches: 85, weight: '167kg' },
  { name: '山野钓客', location: '江西', catches: 72, weight: '134kg' }
]
</script>
