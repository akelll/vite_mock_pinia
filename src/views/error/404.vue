<template>
  <div class="bg">
    <div class="content">
      <div class="code color">404</div>
      <div class="msg color">小主，您访问的页面走丢了</div>
      <div class="msg-en color">Ooups, Page not found</div>
      <el-button icon="el-icon-arrow-left" @click="back">返 回</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const back = () => {
  router.go(-1)
}


</script>

<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/404.png');
  background-position: center;
  background-repeat: no-repeat;
  background-color: #00193d;
  .content {
    width: 360px;
    margin: auto;
    padding-top: 10%;
    .code {
      font-size: 50px;
      font-weight: bold;
      margin-bottom: 30px;
    }
    .msg {
      font-size: 30px;
      margin-bottom: 10px;
    }
    .msg-en {
      font-size: 20px;
      margin-bottom: 40px;
    }
    .color {
      color: #fff;
    }
  }
}
</style>
