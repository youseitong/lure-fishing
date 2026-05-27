<template>
  <div class="pt-16">
    <section class="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">钓点分享</h1>
        <p class="text-white/80">发现优质钓点，分享钓鱼体验</p>
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
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-500">排序:</span>
            <select 
              v-model="sortBy"
              class="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="newest">最新发布</option>
              <option value="popular">最热门</option>
              <option value="rating">评分最高</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 space-y-6">
            <div 
              v-for="spot in spots" 
              :key="spot.id"
              class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="flex flex-col md:flex-row">
                <img :src="spot.image" :alt="spot.name" class="w-full md:w-1/3 h-48 md:h-auto object-cover" />
                <div class="flex-1 p-4">
                  <div class="flex items-start justify-between mb-2">
                    <div>
                      <h3 class="text-lg font-bold text-gray-800">{{ spot.name }}</h3>
                      <p class="text-sm text-gray-400">{{ spot.location }}</p>
                    </div>
                    <div class="flex items-center space-x-1">
                      <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span class="text-sm font-medium text-gray-700">{{ spot.rating }}</span>
                    </div>
                  </div>
                  <p class="text-gray-500 text-sm mb-3">{{ spot.description }}</p>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span 
                      v-for="tag in spot.tags" 
                      :key="tag"
                      class="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {{ tag }}
                    </span>
                  </div>
                  <div class="flex items-center justify-between text-sm text-gray-400">
                    <span>{{ spot.author }} · {{ spot.date }}</span>
                    <span>{{ spot.views }} 次浏览 · {{ spot.comments }} 条评论</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">热门钓点</h3>
              <ul class="space-y-3">
                <li v-for="(spot, index) in hotSpots" :key="index" class="flex items-center space-x-3">
                  <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    :class="index < 3 ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-600'"
                  >
                    {{ index + 1 }}
                  </span>
                  <div class="flex-1 min-w-0">
                    <p class="text-gray-800 text-sm font-medium truncate">{{ spot.name }}</p>
                    <p class="text-gray-400 text-xs">{{ spot.location }}</p>
                  </div>
                  <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span class="text-xs text-gray-600 ml-1">{{ spot.rating }}</span>
                </li>
              </ul>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">钓点统计</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">总钓点</span>
                  <span class="text-primary font-bold">1,234</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">本月新增</span>
                  <span class="text-primary font-bold">156</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">活跃钓友</span>
                  <span class="text-primary font-bold">5,678</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">累计分享</span>
                  <span class="text-primary font-bold">8,901</span>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-white">
              <h3 class="text-lg font-semibold mb-2">分享你的钓点</h3>
              <p class="text-white/80 text-sm mb-4">分享优质钓点，获得更多钓友关注</p>
              <button class="w-full px-4 py-2 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors text-sm font-medium">
                立即分享
              </button>
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
const sortBy = ref('newest')

const filters = [
  { id: 'all', name: '全部' },
  { id: 'lake', name: '湖泊' },
  { id: 'river', name: '江河' },
  { id: 'reservoir', name: '水库' },
  { id: 'stream', name: '溪流' },
  { id: 'blackpit', name: '黑坑' }
]

const spots = [
  {
    id: 1,
    name: '千岛湖路亚基地',
    location: '浙江省杭州市淳安县',
    description: '千岛湖是国内著名的路亚钓场，水质清澈，鱼类资源丰富。主要目标鱼种有翘嘴鲌、鳜鱼、鲈鱼等。',
    tags: ['湖泊', '免费', '翘嘴'],
    rating: 4.8,
    author: '路亚达人',
    date: '2024-01-15',
    views: 3256,
    comments: 128,
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=qiandao%20lake%20beautiful%20scenery%20fishing&image_size=landscape_4_3'
  },
  {
    id: 2,
    name: '长江支流钓点',
    location: '江苏省镇江市',
    description: '长江支流，水流平缓，是钓获大个体翘嘴的好地方。建议使用浮水铅笔或米诺。',
    tags: ['江河', '免费', '翘嘴', '鳡鱼'],
    rating: 4.5,
    author: '渔乐无穷',
    date: '2024-01-12',
    views: 2180,
    comments: 86,
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=yangtze%20river%20fishing%20spot%20scenic&image_size=landscape_4_3'
  },
  {
    id: 3,
    name: '太湖路亚钓场',
    location: '江苏省苏州市',
    description: '太湖水域广阔，鱼类种类繁多。推荐在清晨或傍晚出钓，使用铁板或复合亮片搜索。',
    tags: ['湖泊', '免费', '鲈鱼', '翘嘴'],
    rating: 4.6,
    author: '钓鱼新手',
    date: '2024-01-10',
    views: 1890,
    comments: 72,
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=lake%20taihu%20fishing%20sunset%20view&image_size=landscape_4_3'
  },
  {
    id: 4,
    name: '青龙山水库',
    location: '安徽省宣城市',
    description: '小型水库，环境幽静，适合休闲垂钓。主要鱼种有鲫鱼、鲤鱼、翘嘴等。',
    tags: ['水库', '收费', '休闲'],
    rating: 4.3,
    author: '山野钓客',
    date: '2024-01-08',
    views: 1256,
    comments: 45,
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=reservoir%20fishing%20peaceful%20countryside&image_size=landscape_4_3'
  }
]

const hotSpots = [
  { name: '千岛湖路亚基地', location: '浙江杭州', rating: 4.8 },
  { name: '太湖路亚钓场', location: '江苏苏州', rating: 4.6 },
  { name: '长江支流钓点', location: '江苏镇江', rating: 4.5 },
  { name: '青龙山水库', location: '安徽宣城', rating: 4.3 },
  { name: '天目湖钓场', location: '江苏常州', rating: 4.2 }
]
</script>
