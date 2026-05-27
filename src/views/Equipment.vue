<template>
  <div class="pt-16">
    <section class="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">装备指南</h1>
        <p class="text-white/80">从新手到高手，帮你选择最适合的路亚装备</p>
      </div>
    </section>

    <section class="py-8 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex overflow-x-auto space-x-4 pb-2">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="activeCategory = category.id"
            class="px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200"
            :class="activeCategory === category.id 
              ? 'bg-primary text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <section class="py-12 bg-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="item in equipmentList" 
            :key="item.id"
            class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img :src="item.image" :alt="item.name" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ item.name }}</h3>
              <p class="text-gray-500 text-sm mb-3">{{ item.description }}</p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span 
                  v-for="tag in item.tags" 
                  :key="tag"
                  class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-secondary font-semibold">{{ item.price }}</span>
                <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                  查看详情
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">新手套装推荐</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="set in starterSets" 
            :key="set.id"
            class="bg-gradient-to-br rounded-xl p-6 text-white relative overflow-hidden"
            :class="set.gradient"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div class="relative">
              <span class="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-3">
                {{ set.level }}
              </span>
              <h3 class="text-xl font-bold mb-2">{{ set.name }}</h3>
              <ul class="space-y-2 mb-4">
                <li v-for="item in set.includes" :key="item" class="flex items-center text-sm">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  {{ item }}
                </li>
              </ul>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold">{{ set.price }}</span>
                <button class="px-4 py-2 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors text-sm font-medium">
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-8">选购建议</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="tip in tips" 
            :key="tip.id"
            class="bg-white rounded-xl p-6 shadow-sm"
          >
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path v-if="tip.icon === 'fish'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  <path v-else-if="tip.icon === 'scale'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  <path v-else-if="tip.icon === 'reel'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ tip.title }}</h3>
                <p class="text-gray-500 text-sm">{{ tip.content }}</p>
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

const activeCategory = ref('all')

const categories = [
  { id: 'all', name: '全部' },
  { id: 'rod', name: '鱼竿' },
  { id: 'reel', name: '渔轮' },
  { id: 'line', name: '鱼线' },
  { id: 'lure', name: '假饵' },
  { id: 'accessory', name: '配件' }
]

const equipmentList = [
  {
    id: 1,
    name: '入门级路亚竿套装',
    description: '适合新手的高性价比套装，包含鱼竿、渔轮和基础配件',
    tags: ['新手推荐', '套装'],
    price: '¥399',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fishing%20rod%20combo%20set%20complete%20kit&image_size=landscape_4_3'
  },
  {
    id: 2,
    name: '水滴轮路亚竿',
    description: '专业级水滴轮配置，适合精准抛投和控鱼',
    tags: ['水滴轮', '专业'],
    price: '¥699',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=baitcasting%20fishing%20rod%20and%20reel%20close%20up&image_size=landscape_4_3'
  },
  {
    id: 3,
    name: '纺车轮路亚竿',
    description: '操作简单，适合新手入门和远投',
    tags: ['纺车轮', '新手'],
    price: '¥459',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spinning%20fishing%20rod%20and%20reel%20outdoor&image_size=landscape_4_3'
  },
  {
    id: 4,
    name: 'PE编织线',
    description: '高强度编织线，适合远投和搏大鱼',
    tags: ['PE线', '高强度'],
    price: '¥129',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fishing%20braided%20line%20spool%20close%20up&image_size=landscape_4_3'
  },
  {
    id: 5,
    name: '米诺假饵套装',
    description: '多种颜色和尺寸，适合不同水层和鱼种',
    tags: ['硬饵', '套装'],
    price: '¥89',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=minnow%20fishing%20lures%20various%20colors&image_size=landscape_4_3'
  },
  {
    id: 6,
    name: '软饵套装',
    description: '卷尾蛆、软虫等多种软饵，适合精细钓法',
    tags: ['软饵', '精细'],
    price: '¥69',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=soft%20plastic%20fishing%20lures%20assorted&image_size=landscape_4_3'
  }
]

const starterSets = [
  {
    id: 1,
    name: '入门探索套装',
    level: '新手入门',
    includes: ['1.8m路亚竿', '纺车轮', '尼龙线', '假饵5个', '配件包'],
    price: '¥299',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    name: '进阶全能套装',
    level: '进阶提升',
    includes: ['2.1m路亚竿', '水滴轮', 'PE线', '假饵10个', '路亚盒', '控鱼器'],
    price: '¥599',
    gradient: 'from-secondary to-orange-600'
  },
  {
    id: 3,
    name: '专业竞技套装',
    level: '专业竞技',
    includes: ['2.4m专业竿', '高端水滴轮', '编织线', '假饵20个', '路亚箱', '控鱼器', '摘钩器'],
    price: '¥1299',
    gradient: 'from-purple-500 to-purple-700'
  }
]

const tips = [
  {
    id: 1,
    title: '根据目标鱼种选择',
    content: '不同鱼种需要不同的装备配置。例如钓翘嘴需要远投竿，钓鳜鱼则需要短而硬的竿子。',
    icon: 'fish'
  },
  {
    id: 2,
    title: '调性选择很重要',
    content: 'UL调适合小体型鱼，L调适合综合鱼种，M调适合大体型鱼，MH调适合路亚黑坑。',
    icon: 'scale'
  },
  {
    id: 3,
    title: '渔轮匹配原则',
    content: '纺车轮适合新手和远投，水滴轮适合精准抛投和控鱼。根据竿子的调性匹配渔轮大小。',
    icon: 'reel'
  },
  {
    id: 4,
    title: '线组搭配技巧',
    content: 'PE线适合远投和感知咬口，尼龙线适合新手和低障碍水域，碳线适合防磨和水下隐蔽。',
    icon: 'line'
  }
]
</script>
