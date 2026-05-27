<template>
  <div class="pt-16">
    <section class="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">钓鱼技巧</h1>
        <p class="text-white/80">掌握路亚技巧，提升钓鱼成功率</p>
      </div>
    </section>

    <section class="py-12 bg-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-6">
            <div 
              v-for="article in articles" 
              :key="article.id"
              class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="flex flex-col md:flex-row gap-4">
                <img :src="article.image" :alt="article.title" class="w-full md:w-48 h-32 object-cover rounded-lg flex-shrink-0" />
                <div class="flex-1">
                  <span class="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-2">
                    {{ article.category }}
                  </span>
                  <h3 class="text-xl font-semibold text-gray-800 mb-2 hover:text-primary transition-colors cursor-pointer">
                    {{ article.title }}
                  </h3>
                  <p class="text-gray-500 text-sm mb-3 line-clamp-2">{{ article.summary }}</p>
                  <div class="flex items-center justify-between text-sm text-gray-400">
                    <span>{{ article.date }}</span>
                    <span>{{ article.views }} 阅读</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">技巧分类</h3>
              <ul class="space-y-2">
                <li v-for="category in skillCategories" :key="category.id">
                  <button 
                    @click="activeCategory = category.id"
                    class="w-full flex items-center justify-between p-3 rounded-lg transition-colors"
                    :class="activeCategory === category.id 
                      ? 'bg-primary/10 text-primary' 
                      : 'hover:bg-gray-50 text-gray-600'"
                  >
                    <span>{{ category.name }}</span>
                    <span class="text-sm opacity-75">{{ category.count }}</span>
                  </button>
                </li>
              </ul>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">热门技巧</h3>
              <ul class="space-y-3">
                <li v-for="(tip, index) in hotTips" :key="index" class="flex items-start space-x-3">
                  <span class="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {{ index + 1 }}
                  </span>
                  <div>
                    <p class="text-gray-800 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                      {{ tip.title }}
                    </p>
                    <p class="text-gray-400 text-xs">{{ tip.views }} 阅读</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">抛投技巧图解</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="step in castSteps" 
            :key="step.id"
            class="text-center p-6 bg-gray-50 rounded-xl"
          >
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <span class="text-2xl font-bold text-primary">{{ step.step }}</span>
            </div>
            <h4 class="font-semibold text-gray-800 mb-2">{{ step.title }}</h4>
            <p class="text-gray-500 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">标点选择指南</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="spot in spots" 
            :key="spot.id"
            class="bg-white rounded-xl overflow-hidden shadow-sm"
          >
            <img :src="spot.image" :alt="spot.name" class="w-full h-40 object-cover" />
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-2">{{ spot.name }}</h3>
              <p class="text-gray-500 text-sm mb-3">{{ spot.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in spot.tags" 
                  :key="tag"
                  class="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                >
                  {{ tag }}
                </span>
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

const articles = [
  {
    id: 1,
    title: '水滴轮侧抛技巧详解',
    summary: '侧抛是水滴轮最常用的抛投方式，适合近距离精准投放。本文详细讲解侧抛的动作要领和注意事项。',
    category: '抛投技巧',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fishing%20side%20casting%20technique%20water&image_size=landscape_4_3',
    date: '2024-01-18',
    views: 3520
  },
  {
    id: 2,
    title: '纺车轮远投技巧',
    summary: '纺车轮适合远距离抛投，掌握正确的抛投姿势和发力技巧是关键。本文图文并茂讲解纺车轮远投方法。',
    category: '抛投技巧',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fishing%20long%20cast%20spinning%20reel&image_size=landscape_4_3',
    date: '2024-01-15',
    views: 2890
  },
  {
    id: 3,
    title: '如何寻找有效钓点',
    summary: '找到好的钓点是钓鱼成功的一半。本文介绍如何根据地形、水流、季节等因素寻找路亚标点。',
    category: '标点选择',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fishing%20spot%20selection%20lake%20shore&image_size=landscape_4_3',
    date: '2024-01-12',
    views: 4150
  },
  {
    id: 4,
    title: '目标水层控制技巧',
    summary: '不同鱼种活跃在不同水层，掌握水层控制技巧能大大提高中鱼率。本文介绍如何根据假饵类型控制水层。',
    category: '水层控制',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fishing%20depth%20control%20underwater%20view&image_size=landscape_4_3',
    date: '2024-01-10',
    views: 3280
  },
  {
    id: 5,
    title: '假饵操作手法大全',
    summary: '不同假饵需要不同的操控手法。本文详细介绍米诺、铅笔、波扒、软饵等常见假饵的操作技巧。',
    category: '操作手法',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fishing%20lure%20retrieval%20techniques&image_size=landscape_4_3',
    date: '2024-01-08',
    views: 4520
  }
]

const skillCategories = [
  { id: 'all', name: '全部技巧', count: 56 },
  { id: 'cast', name: '抛投技巧', count: 12 },
  { id: 'spot', name: '标点选择', count: 8 },
  { id: 'depth', name: '水层控制', count: 6 },
  { id: 'retrieve', name: '操作手法', count: 15 },
  { id: 'season', name: '季节攻略', count: 15 }
]

const hotTips = [
  { title: '新手如何避免炒粉', views: 5230 },
  { title: '如何判断咬口', views: 4180 },
  { title: '线结绑法大全', views: 3890 },
  { title: '如何选择假饵颜色', views: 3560 },
  { title: '夜钓技巧分享', views: 3210 }
]

const castSteps = [
  { id: 1, step: '1', title: '准备姿势', description: '双脚与肩同宽，身体侧对目标，鱼竿与地面成45度角' },
  { id: 2, step: '2', title: '蓄力阶段', description: '将假饵后摆至身后，感受鱼竿的弹性弯曲' },
  { id: 3, step: '3', title: '发力抛投', description: '利用腰部和手臂力量，向前挥杆并适时出线' },
  { id: 4, step: '4', title: '控制落点', description: '根据目标距离控制刹车，确保假饵精准落位' }
]

const spots = [
  {
    id: 1,
    name: '水草区',
    description: '水草区是鱼类的天然栖息地，适合使用软饵跳底或水面系假饵。',
    tags: ['障碍物', '伏击点', '夏季'],
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fishing%20weed%20bed%20aquatic%20plants&image_size=landscape_4_3'
  },
  {
    id: 2,
    name: '桥墩附近',
    description: '桥墩周围有丰富的饵食和隐蔽空间，是大型鱼类的聚集地。',
    tags: ['结构点', '深水', '全年'],
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fishing%20bridge%20pier%20structure&image_size=landscape_4_3'
  },
  {
    id: 3,
    name: '深浅交界处',
    description: '深浅交界处是鱼类觅食的必经之路，适合守株待兔。',
    tags: ['过渡区', '洄游路线', '春秋季'],
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fishing%20depth%20transition%20zone%20underwater&image_size=landscape_4_3'
  },
  {
    id: 4,
    name: '进出水口',
    description: '水流交汇处氧气充足、饵食丰富，是绝佳的路亚标点。',
    tags: ['活水', '觅食区', '夏季'],
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fishing%20inflow%20outflow%20water%20current&image_size=landscape_4_3'
  }
]
</script>
