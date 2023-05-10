<template>
  <div class="gh-bottom">
    <ul>
      <li>
        <span>桂花论坛：</span>
        <span>guihur-X</span>
      </li>
      <li>
        <span>联系作者：</span>
        <span>329179227@qq.com</span>
      </li>
      <li>
        <span class="point"><a href="https://github.com/Xguihur">更多--></a></span>
      </li>
    </ul>
  </div>
</template>
<script setup></script>
<style scoped lang="less">
.point {
  cursor: pointer;
  padding: 0 1vh;
}
.point:hover {
  color: #fff;
  background-color: rgb(150, 200, 237);
}

.gh-bottom {
  ul {
    display: flex;
    color: #666;
    list-style: none;
    justify-content: center;

    > li {
      margin: 1vw;
      cursor: text;

      a {
        text-decoration: none;
      }
    }
  }
}
</style>
