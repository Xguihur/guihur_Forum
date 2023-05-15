<template>
  <div class="articleBox">
    <template v-for="item in data" :key="item.title">
      <gh-article-card class="card-item" :title="item.title" :profile="item.content" :img="item.img"></gh-article-card>
    </template>
  </div>
</template>
<script setup>
import ghArticleCard from './components/articleCard.vue'
// 这里将来调用接口获取列表，接口是从数据库中拿到 title 和 introduction 和 img 进行处理与返回
// 传绝对路径不显示图片，于是将图片放到服务器上好了
const data = [
  {
    title: '神奈川第一后卫',
    content: '整整27年了，每一个日夜翘首以盼、望穿秋水，不见它来！所以，2023年4月20日零点，当它正式在国内各大影院上映，全网沸腾！',
    img: `http://8.134.111.95:8866/forum/lt1.jpg`
  },
  {
    title: '宫城良田',
    content: '有欢呼，有尖叫，有热血，有眼泪。曾经它那句“全国大赛见”，让多少人整整等了一个青春！',
    img: 'http://8.134.111.95:8866/forum/lt2.jpg'
  },
  {
    title: '不良少年',
    content: '直到我们被岁月、被生活捏成了各种平平无奇的角色，丢掉了儿时的梦想和爱好，以及曾经的热血和青春，成日奔波在城市里的各个角落，为一日三餐忙忙碌碌。',
    img: 'http://8.134.111.95:8866/forum/lt3.jpg'
  },
  {
    title: '震惊！良田在路上遇到彩子居然...',
    content: '它的出现，才把我们的青春记忆再次唤醒，让很多人走进影院就已经忍不住泪流满面。',
    img: 'http://8.134.111.95:8866/forum/lt4.jpg'
  },
  {
    title: '第一次与流川枫搭上话的新队长',
    content: '流川枫、樱木花道、赤木刚宪、三井寿、宫城良田，大银幕上的“湘北五虎”，不管岁月如何变迁，依旧在我们的青春深处熠熠生辉。',
    img: 'http://8.134.111.95:8866/forum/lt5.jpg'
  },
  {
    title: '队长良田',
    content: '在校园里，这样风一般的男子，基本算是遥不可及的高贵“王子”一般的存在。'
  }
]
</script>
<style scoped lang="less">
.articleBox {
  width: 70vw;
  margin: 0 auto;
  background-color: #ededed;
  padding: 2vh 1vw;

  .card-item {
    margin-top: 2vh;
  }
}
</style>
