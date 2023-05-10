<template>
  <div>
    <img class="con-img" src="@/assets/callout.svg" alt="" />
    <div class="text">随心写作,自由表达</div>
    <el-button class="write-btn" size="large">
      <router-link to="/write" class="turn-write">开始写文章</router-link>
    </el-button>
  </div>
</template>
<script setup></script>
<style scoped lang="less">
.con-img {
  width: 24vw;
  height: auto;
  margin-top: 10vh;
}
.text {
  font-size: 28px;
  margin: 2vh 0 4vh;
  letter-spacing: 16px;
}
.write-btn {
  color: #fff;
  background-color: #0d6efd;

  .turn-write {
    color: #fff;
    text-decoration: none;
  }
}
.write-btn:hover {
  background-color: #084db4;
}
</style>
