<template>
  <div class="pt-16">
    <section class="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">鱼种图鉴</h1>
        <p class="text-white/80">了解目标鱼种，提高钓鱼成功率</p>
      </div>
    </section>

    <section class="py-8 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-3">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="activeCategory = category.id"
            class="px-4 py-2 rounded-full transition-all duration-200"
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
            v-for="fish in fishList" 
            :key="fish.id"
            class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            @click="selectedFish = fish"
          >
            <div class="relative">
              <img :src="fish.image" :alt="fish.name" class="w-full h-56 object-cover" />
              <div class="absolute top-3 left-3">
                <span class="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-700">
                  {{ fish.category }}
                </span>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-bold text-gray-800">{{ fish.name }}</h3>
                <span class="text-sm text-gray-400">{{ fish.scientificName }}</span>
              </div>
              <p class="text-gray-500 text-sm mb-3">{{ fish.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in fish.tags" 
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

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">鱼种对比</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-600">鱼种</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-600">栖息环境</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-600">活跃水层</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-600">最佳季节</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-600">推荐假饵</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="fish in fishList" :key="fish.id" class="border-t hover:bg-gray-50">
                <td class="px-4 py-3">
                  <div class="flex items-center space-x-3">
                    <img :src="fish.image" :alt="fish.name" class="w-12 h-12 rounded-lg object-cover" />
                    <span class="font-medium text-gray-800">{{ fish.name }}</span>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">{{ fish.habitat }}</td>
                <td class="px-4 py-3 text-sm text-gray-600">{{ fish.waterLayer }}</td>
                <td class="px-4 py-3 text-sm text-gray-600">{{ fish.season }}</td>
                <td class="px-4 py-3 text-sm text-gray-600">{{ fish.recommendedLure }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <div 
      v-if="selectedFish"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="selectedFish = null"
    >
      <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="relative">
          <img :src="selectedFish.image" :alt="selectedFish.name" class="w-full h-64 object-cover" />
          <button 
            @click="selectedFish = null"
            class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
          >
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h2 class="text-2xl font-bold text-gray-800 mb-1">{{ selectedFish.name }}</h2>
              <p class="text-gray-400">{{ selectedFish.scientificName }}</p>
            </div>
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {{ selectedFish.category }}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-gray-50 rounded-lg p-3">
              <p class="text-xs text-gray-400 mb-1">栖息环境</p>
              <p class="text-sm font-medium text-gray-800">{{ selectedFish.habitat }}</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-3">
              <p class="text-xs text-gray-400 mb-1">活跃水层</p>
              <p class="text-sm font-medium text-gray-800">{{ selectedFish.waterLayer }}</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-3">
              <p class="text-xs text-gray-400 mb-1">最佳季节</p>
              <p class="text-sm font-medium text-gray-800">{{ selectedFish.season }}</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-3">
              <p class="text-xs text-gray-400 mb-1">推荐假饵</p>
              <p class="text-sm font-medium text-gray-800">{{ selectedFish.recommendedLure }}</p>
            </div>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800 mb-2">详细介绍</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ selectedFish.details }}</p>
          </div>
          <div class="mt-6">
            <h3 class="font-semibold text-gray-800 mb-2">钓法建议</h3>
            <ul class="space-y-2">
              <li v-for="(tip, index) in selectedFish.fishingTips" :key="index" class="flex items-start text-sm text-gray-500">
                <svg class="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ tip }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeCategory = ref('all')
const selectedFish = ref(null)

const categories = [
  { id: 'all', name: '全部' },
  { id: 'freshwater', name: '淡水鱼' },
  { id: 'saltwater', name: '海水鱼' },
  { id: 'predatory', name: '掠食性鱼类' }
]

const fishList = [
  {
    id: 1,
    name: '翘嘴鲌',
    scientificName: 'Culter alburnus',
    category: '淡水鱼',
    description: '凶猛的肉食性鱼类，喜欢追逐小鱼，是路亚钓法的热门目标。',
    habitat: '水库、湖泊、江河',
    waterLayer: '中上层',
    season: '夏季、秋季',
    recommendedLure: '米诺、铅笔、铁板',
    tags: ['热门', '中上层', '夏季'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    details: '翘嘴鲌，俗称翘嘴、大白鱼，是一种大型淡水掠食性鱼类。其特征是口上位，下颌突出上翘，因此得名。翘嘴鲌体型修长，游泳速度快，性情凶猛，主要以小鱼、小虾为食。',
    fishingTips: [
      '选择清晨或傍晚时段出钓，此时翘嘴活跃度最高',
      '使用米诺等浮水假饵，模仿小鱼游动姿态',
      '抛投至水草区边缘或深浅交界处',
      '采用匀速收线或抽停手法'
    ]
  },
  {
    id: 2,
    name: '鳜鱼',
    scientificName: 'Siniperca chuatsi',
    category: '淡水鱼',
    description: '伏击型猎手，喜欢躲在障碍物附近等待猎物。',
    habitat: '石缝、桥墩、水草区',
    waterLayer: '底层',
    season: '春季、秋季',
    recommendedLure: '软饵、铅头钩、胡须佬',
    tags: ['底层', '伏击型', '春秋季'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    details: '鳜鱼，又名桂花鱼、季花鱼，是中国名贵的淡水食用鱼类。其身体呈黄绿色，带有斑点，肉质鲜美。鳜鱼是典型的伏击型猎手，喜欢躲藏在石缝、水草等障碍物附近。',
    fishingTips: [
      '寻找有结构的区域，如桥墩、石头缝、水草区',
      '使用软饵跳底，动作要慢',
      '注意感知轻口，鳜鱼咬口很轻',
      '采用精细钓组，提高敏感度'
    ]
  },
  {
    id: 3,
    name: '鲈鱼',
    scientificName: 'Lateolabrax japonicus',
    category: '淡水鱼',
    description: '适应性强，攻击欲望强，是路亚钓法的理想目标。',
    habitat: '路亚黑坑、野水',
    waterLayer: '全水层',
    season: '全年',
    recommendedLure: '复合亮片、铅笔、米诺',
    tags: ['全水层', '全年', '热门'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    details: '鲈鱼是一种广盐性鱼类，既能生活在海水中，也能在淡水中生存。它是路亚爱好者最喜爱的目标鱼种之一，攻击性强，上钩后搏斗激烈，极具挑战性。',
    fishingTips: [
      '鲈鱼适应能力强，可在各种水域垂钓',
      '使用复合亮片搜索全水层',
      '在黑坑中可采用快节奏搜索',
      '注意鲈鱼喜欢追逐移动的物体'
    ]
  },
  {
    id: 4,
    name: '鳡鱼',
    scientificName: 'Elopichthys bambusa',
    category: '淡水鱼',
    description: '水中的猎豹，速度极快，爆发力强。',
    habitat: '江河、大型水库',
    waterLayer: '中上层',
    season: '夏季',
    recommendedLure: '浮水铅笔、波扒、铁板',
    tags: ['中上层', '高速', '夏季'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    details: '鳡鱼，俗称黄钻、竿鱼，是一种大型淡水凶猛鱼类。其身体细长，呈流线型，游泳速度极快，被称为"水中猎豹"。鳡鱼主要以其他鱼类为食，攻击性极强。',
    fishingTips: [
      '选择开阔水域，鳡鱼喜欢追逐小鱼群',
      '使用浮水铅笔制造水花，吸引注意',
      '抛投要远，搜索范围要大',
      '搏鱼时注意其爆发力，保持线的张力'
    ]
  },
  {
    id: 5,
    name: '鲶鱼',
    scientificName: 'Silurus asotus',
    category: '淡水鱼',
    description: '底栖鱼类，嗅觉灵敏，喜欢夜间活动。',
    habitat: '河底、深坑',
    waterLayer: '底层',
    season: '夏季、秋季',
    recommendedLure: '软饵、蛙饵',
    tags: ['底层', '夜行', '夏秋'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    details: '鲶鱼是一种底栖性鱼类，身体光滑无鳞，有须，嗅觉和触觉都很灵敏。它喜欢生活在水体底层，夜间活动频繁，以小鱼、小虾和有机碎屑为食。',
    fishingTips: [
      '夜间出钓效果更好',
      '使用气味浓郁的假饵',
      '搜索河底深坑和障碍物附近',
      '耐心等待，鲶鱼咬口较慢'
    ]
  },
  {
    id: 6,
    name: '马口鱼',
    scientificName: 'Opsariichthys bidens',
    category: '淡水鱼',
    description: '小型凶猛鱼类，色彩艳丽，适合路亚入门练习。',
    habitat: '溪流、小河',
    waterLayer: '中上层',
    season: '春季、夏季',
    recommendedLure: '小型亮片、迷你米诺',
    tags: ['小型', '溪流', '入门'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    details: '马口鱼是一种小型淡水鱼类，雄鱼在繁殖季节色彩艳丽，极具观赏性。虽然体型小，但攻击性强，是路亚新手入门练习的理想目标。',
    fishingTips: [
      '使用小型假饵，大小在3-5cm为宜',
      '选择清澈的溪流或小河',
      '轻抛投，避免惊扰鱼群',
      '快速回收，模仿小虫游动'
    ]
  }
]
</script>
